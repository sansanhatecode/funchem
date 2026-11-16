import { content } from '@funchem/content'
import { expect, test } from '@playwright/test'
import { escapeRe, playExercises, playLesson, signUpWithOtp } from './helpers'

const firstLesson = content.units[0]!.lessons[0]!

test('ôn tập, hồ sơ, bảng xếp hạng và xoá tài khoản', async ({ page }) => {
  test.setTimeout(180_000)

  // 1. Khách học xong bài đầu
  await page.goto('/learn')
  await page
    .getByRole('link', { name: new RegExp(`${escapeRe(firstLesson.title)}, sẵn sàng`) })
    .click()
  await playLesson(page, firstLesson.id)
  await expect(page.getByText('100%', { exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'Về bản đồ học' }).click()

  // 2. Ôn tập: chỉ gồm câu của bài đã học, làm xong được cộng XP
  await page.getByRole('link', { name: /Ôn tập hôm nay/ }).click()
  await expect(page).toHaveURL(/\/review$/)
  const lessonExerciseIds = firstLesson.exercises.map((e) => e.id)
  await expect(page.getByRole('main')).toHaveAttribute(
    'data-exercise-id',
    new RegExp(lessonExerciseIds.join('|')),
  )
  await playExercises(page)
  await expect(page.getByRole('heading', { name: 'Ôn xong rồi!' })).toBeVisible()
  await expect(page.getByText(/\+\d+ XP/)).toBeVisible()
  await page.getByRole('link', { name: 'Về bản đồ học' }).click()

  // 3. Khách chưa có tên trên bảng xếp hạng
  await page.getByRole('link', { name: 'Xếp hạng' }).first().click()
  await expect(page.getByText('Tạo tài khoản để có tên trên bảng')).toBeVisible()

  // 4. Đăng ký, đặt biệt danh và mục tiêu trong hồ sơ
  const email = `social-${Date.now()}@example.com`
  const nickname = `Thu${Date.now() % 100000}`
  await page.getByRole('link', { name: 'Lưu tiến độ' }).click()
  await signUpWithOtp(page, email)
  await expect(page.getByText(email)).toBeVisible()

  await page.goto('/profile')
  await expect(page.getByText(email)).toBeVisible()
  await expect(page.getByText('Bước đầu tiên')).toBeVisible()
  await page.getByLabel('Biệt danh').fill(nickname)
  await page.getByRole('button', { name: 'Lưu' }).click()
  await expect(page.getByText('Đã lưu.')).toBeVisible()
  await page.getByRole('radio', { name: '30 XP' }).click()
  await expect(page.getByRole('radio', { name: '30 XP' })).toBeChecked()

  // mục tiêu mới hiện trên bản đồ học
  await page.goto('/learn')
  await expect(page.getByText(/\/ 30 XP/)).toBeVisible()

  // 5. Bảng xếp hạng hiện biệt danh, không hiện email
  await page.goto('/leaderboard')
  const myRow = page.getByRole('listitem').filter({ hasText: nickname })
  await expect(myRow).toContainText('(bạn)')
  await expect(page.getByRole('main')).not.toContainText('@example.com')

  // 6. Xoá tài khoản: quay về trang chủ, học lại từ đầu với tư cách khách
  await page.goto('/profile')
  await page.getByRole('button', { name: 'Xoá tài khoản và toàn bộ dữ liệu' }).click()
  await page.getByRole('button', { name: 'Xoá vĩnh viễn' }).click()
  await expect(page).toHaveURL(/\/$/)
  await page.goto('/learn')
  await expect(page.getByText('Bạn đang học với tư cách khách')).toBeVisible()
  await expect(
    page.getByRole('link', { name: new RegExp(`${escapeRe(firstLesson.title)}, sẵn sàng`) }),
  ).toBeVisible()
})

test('trang điều khoản và chính sách riêng tư mở được từ trang đăng nhập', async ({ page }) => {
  await page.goto('/login')
  await page.getByRole('link', { name: 'Chính sách riêng tư' }).click()
  await expect(page.getByRole('heading', { level: 1, name: 'Chính sách riêng tư' })).toBeVisible()
  await page.goto('/terms')
  await expect(page.getByRole('heading', { level: 1, name: 'Điều khoản sử dụng' })).toBeVisible()
})
