import { readFile } from 'node:fs/promises'
import { content } from '@funchem/content'
import { expect, type Page } from '@playwright/test'
import { OTP_FILE } from '../playwright.config'
import { answerWrong, solveExercise } from './solve'

export async function latestOtp(email: string): Promise<string> {
  const lines = (await readFile(OTP_FILE, 'utf8')).trim().split('\n')
  const hit = lines
    .map((l) => JSON.parse(l) as { to: string; code: string })
    .reverse()
    .find((l) => l.to === email)
  if (!hit) throw new Error(`Không thấy OTP cho ${email}`)
  return hit.code
}

/** Đăng ký bằng email OTP từ trang /login (đang ở phiên khách thì tiến độ được giữ). */
export async function signUpWithOtp(page: Page, email: string) {
  await page.getByLabel('Email').fill(email)
  await page.getByRole('button', { name: 'Gửi mã cho tôi' }).click()
  await expect(page.getByLabel('Mã 6 số')).toBeVisible()
  await expect.poll(() => latestOtp(email).catch(() => '')).toMatch(/^\d{6}$/)
  await page.getByLabel('Mã 6 số').fill(await latestOtp(email))
  await page.getByRole('button', { name: 'Xác nhận' }).click()
  // màn nhập mã cũng hiện email, nên phải chờ chuyển trang xong mới coi là đã đăng nhập
  await page.waitForURL(/\/learn$/)
  await expect(page.getByText(email)).toBeVisible()
}

/** Biến một chuỗi bất kỳ (ví dụ tên bài có dấu ?) thành mẫu khớp nguyên văn. */
export const escapeRe = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const nextButton = /^(Tiếp tục|Hoàn thành)$/

/**
 * Làm hết các câu đang hiện trong trình chơi (bài học hoặc ôn tập), kể cả câu bị hỏi lại.
 * Đọc id bài tập từ trang nên không phụ thuộc thứ tự. `firstWrong`: cố ý trả lời sai câu đầu nếu là dạng chọn.
 * Trả về số câu trả lời sai ở lần đầu.
 */
export async function playExercises(page: Page, opts: { firstWrong?: boolean } = {}) {
  const main = page.getByRole('main')
  let wrong = 0
  let first = true
  for (let guard = 0; guard < 80; guard++) {
    await expect(main).toHaveAttribute('data-exercise-id', /.+/)
    const id = (await main.getAttribute('data-exercise-id'))!
    const exercise = content.exercises.get(id)!.exercise
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(exercise.prompt)
    const check = page.getByRole('button', { name: 'Kiểm tra', exact: true })
    if (first && opts.firstWrong && (await answerWrong(main, exercise))) {
      await check.click()
      await expect(page.getByRole('status')).toContainText('Chưa đúng')
      await expect(page.getByRole('status')).toContainText('Đáp án:')
      wrong++
    } else {
      await solveExercise(main, exercise, content)
      await check.click()
      await expect(page.getByRole('status')).toContainText('Chính xác!')
    }
    first = false
    await expect(page.getByRole('status')).toContainText(exercise.explanation)
    const next = page.getByRole('button', { name: nextButton })
    const label = await next.innerText()
    await next.click()
    if (label.trim() === 'Hoàn thành') return { wrong }
    // chờ câu kế tiếp hiện ra (phản hồi của câu cũ biến mất)
    await expect(page.getByRole('button', { name: 'Kiểm tra', exact: true })).toBeVisible()
  }
  throw new Error('Trình chơi không kết thúc sau 80 câu')
}

/** Làm trọn một bài học từ thẻ Khám phá tới khi bấm Hoàn thành. */
export async function playLesson(
  page: Page,
  lessonId: string,
  opts: { firstWrong?: boolean } = {},
) {
  const { lesson } = content.lessons.get(lessonId)!
  if (lesson.intro) {
    await expect(page.getByRole('heading', { name: lesson.intro.title, exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Bắt đầu luyện tập' }).click()
  }
  const { wrong } = await playExercises(page, opts)
  return { total: lesson.exercises.length, wrong }
}
