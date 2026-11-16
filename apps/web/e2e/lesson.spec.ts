import { content } from '@funchem/content'
import { expect, test } from '@playwright/test'
import { escapeRe, playLesson, signUpWithOtp } from './helpers'

const firstUnit = content.units[0]!
const firstLesson = firstUnit.lessons[0]!
const secondLesson = firstUnit.lessons[1]!

test('khách làm bài đầu tiên, đăng ký OTP, tiến độ được giữ nguyên', async ({ page }) => {
  // 1. Vào học không cần tài khoản
  await page.goto('/')
  await page.getByRole('link', { name: 'Bắt đầu học' }).first().click()
  await expect(page.getByText('Bạn đang học với tư cách khách')).toBeVisible()

  // bài đầu sẵn sàng, bài hai còn khoá
  await expect(
    page.getByRole('link', { name: new RegExp(`${escapeRe(firstLesson.title)}, sẵn sàng`) }),
  ).toBeVisible()
  await expect(
    page.getByLabel(new RegExp(`${escapeRe(secondLesson.title)}, chưa mở`)),
  ).toBeVisible()

  // 2. Vào bài đầu: thấy hiện tượng ngoài đời trước, phóng to mới thấy nguyên tử
  await page
    .getByRole('link', { name: new RegExp(`${escapeRe(firstLesson.title)}, sẵn sàng`) })
    .click()
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
  await expect(page.getByText('Huy hiệu mới')).toBeVisible()
  await expect(page.getByText('Bước đầu tiên')).toBeVisible()
  for (const id of firstLesson.unlocksMolecules) {
    await expect(page.getByText(content.molecules.get(id)!.name).first()).toBeVisible()
  }

  // 5. Về bản đồ: bài đầu xong, bài hai mở
  await page.getByRole('link', { name: 'Về bản đồ học' }).click()
  await expect(
    page.getByRole('link', { name: new RegExp(`${escapeRe(firstLesson.title)}, đã xong`) }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: new RegExp(`${escapeRe(secondLesson.title)}, sẵn sàng`) }),
  ).toBeVisible()
  const xpBefore = await page.getByText('điểm kinh nghiệm').locator('..').innerText()

  // 6. Đăng ký bằng OTP
  const email = `e2e-${Date.now()}@example.com`
  await page.getByRole('link', { name: 'Lưu tiến độ' }).click()
  await signUpWithOtp(page, email)

  // 7. Tài khoản thật giữ nguyên tiến độ
  await expect(page.getByText(email)).toBeVisible()
  await expect(
    page.getByRole('link', { name: new RegExp(`${escapeRe(firstLesson.title)}, đã xong`) }),
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
