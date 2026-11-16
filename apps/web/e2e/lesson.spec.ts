import { readFile } from 'node:fs/promises'
import { content } from '@funchem/content'
import { expect, type Page, test } from '@playwright/test'
import { OTP_FILE } from '../playwright.config'
import { answerWrong, solveExercise } from './solve'

const firstUnit = content.units[0]!
const firstLesson = firstUnit.lessons[0]!
const secondLesson = firstUnit.lessons[1]!

async function latestOtp(email: string): Promise<string> {
  const lines = (await readFile(OTP_FILE, 'utf8')).trim().split('\n')
  const hit = lines
    .map((l) => JSON.parse(l) as { to: string; code: string })
    .reverse()
    .find((l) => l.to === email)
  if (!hit) throw new Error(`Không thấy OTP cho ${email}`)
  return hit.code
}

/** Làm trọn một bài học, trả lời đúng mọi câu (trừ câu đầu nếu `firstWrong`). */
async function playLesson(page: Page, lessonId: string, opts: { firstWrong?: boolean } = {}) {
  const { lesson } = content.lessons.get(lessonId)!
  const main = page.getByRole('main')
  if (lesson.intro) {
    await expect(page.getByRole('heading', { name: lesson.intro.title })).toBeVisible()
    await page.getByRole('button', { name: 'Bắt đầu luyện tập' }).click()
  }
  let wrong = 0
  for (const [i, exercise] of lesson.exercises.entries()) {
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(exercise.prompt)
    const check = page.getByRole('button', { name: 'Kiểm tra' })
    if (i === 0 && opts.firstWrong && (await answerWrong(main, exercise))) {
      await check.click()
      await expect(page.getByRole('status')).toContainText('Chưa đúng')
      await expect(page.getByRole('status')).toContainText('Đáp án:')
      wrong++
    } else {
      await solveExercise(main, exercise, content)
      await check.click()
      await expect(page.getByRole('status')).toContainText('Chính xác!')
    }
    await expect(page.getByRole('status')).toContainText(exercise.explanation)
    await page
      .getByRole('button', { name: i + 1 < lesson.exercises.length ? 'Tiếp tục' : 'Hoàn thành' })
      .click()
  }
  return { total: lesson.exercises.length, wrong }
}

test('khách làm bài đầu tiên, đăng ký OTP, tiến độ được giữ nguyên', async ({ page }) => {
  // 1. Vào học không cần tài khoản
  await page.goto('/')
  await page.getByRole('link', { name: 'Bắt đầu học' }).first().click()
  await expect(page.getByText('Bạn đang học với tư cách khách')).toBeVisible()

  // bài đầu sẵn sàng, bài hai còn khoá
  await expect(
    page.getByRole('link', { name: new RegExp(`${firstLesson.title}, sẵn sàng`) }),
  ).toBeVisible()
  await expect(page.getByLabel(new RegExp(`${secondLesson.title}, chưa mở`))).toBeVisible()

  // 2. Vào bài đầu: thấy hiện tượng ngoài đời trước, phóng to mới thấy nguyên tử
  await page.getByRole('link', { name: new RegExp(`${firstLesson.title}, sẵn sàng`) }).click()
  const particles = page.getByRole('img', { name: /Cận cảnh .* ở cấp nguyên tử/ })
  await expect(particles).toBeHidden()
  await page.getByRole('button', { name: 'Phóng to tới nguyên tử' }).click()
  await expect(particles).toBeVisible()
  await expect(page.getByRole('list', { name: 'Chú giải màu nguyên tử' })).toBeVisible()
  await page.getByRole('button', { name: 'Thu nhỏ' }).click()
  await expect(particles).toBeHidden()

  // 3. Làm bài, sai câu đầu nếu là dạng chọn
  const { total, wrong } = await playLesson(page, firstLesson.id, { firstWrong: true })

  // 4. Màn kết quả do server chấm
  const pct = Math.round(((total - wrong) / total) * 100)
  await expect(page.getByText(`${pct}%`)).toBeVisible()
  await expect(page.getByText(/\+\d+ XP/)).toBeVisible()
  for (const id of firstLesson.unlocksMolecules) {
    await expect(page.getByText(content.molecules.get(id)!.name).first()).toBeVisible()
  }

  // 5. Về bản đồ: bài đầu xong, bài hai mở
  await page.getByRole('link', { name: 'Về bản đồ học' }).click()
  await expect(
    page.getByRole('link', { name: new RegExp(`${firstLesson.title}, đã xong`) }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: new RegExp(`${secondLesson.title}, sẵn sàng`) }),
  ).toBeVisible()
  const xpBefore = await page.getByText('điểm kinh nghiệm').locator('..').innerText()

  // 6. Đăng ký bằng OTP
  const email = `e2e-${Date.now()}@example.com`
  await page.getByRole('link', { name: 'Lưu tiến độ' }).click()
  await page.getByLabel('Email').fill(email)
  await page.getByRole('button', { name: 'Gửi mã cho tôi' }).click()
  await expect(page.getByLabel('Mã 6 số')).toBeVisible()
  await expect.poll(() => latestOtp(email).catch(() => '')).toMatch(/^\d{6}$/)
  await page.getByLabel('Mã 6 số').fill(await latestOtp(email))
  await page.getByRole('button', { name: 'Xác nhận' }).click()

  // 7. Tài khoản thật giữ nguyên tiến độ
  await expect(page.getByText(email)).toBeVisible()
  await expect(
    page.getByRole('link', { name: new RegExp(`${firstLesson.title}, đã xong`) }),
  ).toBeVisible()
  expect(await page.getByText('điểm kinh nghiệm').locator('..').innerText()).toBe(xpBefore)

  // 8. Bộ sưu tập có phân tử vừa mở
  if (firstLesson.unlocksMolecules.length > 0) {
    await page.goto('/molecules')
    const name = content.molecules.get(firstLesson.unlocksMolecules[0]!)!.name
    await page.getByRole('button', { name: new RegExp(name) }).click()
    await expect(page.getByRole('dialog')).toContainText('Bạn gặp nó ở đâu?')
    await page.getByRole('dialog').getByRole('button', { name: 'Phóng to tới nguyên tử' }).click()
    await expect(page.getByRole('dialog').getByRole('img', { name: /Cận cảnh/ })).toBeVisible()
    await page.getByRole('button', { name: 'Đóng' }).click()
    await expect(page.getByRole('dialog')).toBeHidden()
  }
})

test('bài chưa mở không vào được bằng đường dẫn trực tiếp', async ({ page }) => {
  const checkpoint = firstUnit.lessons.at(-1)!
  await page.goto(`/learn/${checkpoint.id}`)
  await expect(page.getByText('Bài này chưa mở')).toBeVisible()
})
