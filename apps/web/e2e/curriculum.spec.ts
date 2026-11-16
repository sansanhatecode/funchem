import { content } from '@funchem/content'
import { expect, test } from '@playwright/test'
import { solveExercise } from './solve'

/**
 * Chơi hết toàn bộ chương trình bằng giao diện, trả lời đúng mọi câu.
 * Bảo đảm mọi bài tập trong nội dung thật đều giải được qua UI và được server chấm đúng,
 * mọi bài mở khoá theo đúng thứ tự, và bộ sưu tập nhận đủ phân tử.
 */
test('toàn bộ chương trình giải được từ đầu đến cuối', async ({ page }) => {
  const lessons = content.units.flatMap((u) => u.lessons)
  test.setTimeout(lessons.reduce((n, l) => n + l.exercises.length, 0) * 4_000 + 60_000)

  await page.goto('/learn')
  await expect(page.getByText('Mục tiêu hôm nay')).toBeVisible()
  await page.getByRole('link', { name: new RegExp(`${lessons[0]!.title}, sẵn sàng`) }).click()

  for (const [li, lesson] of lessons.entries()) {
    await test.step(`${lesson.id} (${lesson.exercises.length} câu)`, async () => {
      const main = page.getByRole('main')
      if (lesson.intro) {
        await expect(
          page.getByRole('heading', { name: lesson.intro.title, exact: true }),
        ).toBeVisible()
        await page.getByRole('button', { name: 'Bắt đầu luyện tập' }).click()
      }
      for (const [i, exercise] of lesson.exercises.entries()) {
        await expect(page.getByRole('heading', { level: 1 }), exercise.id).toHaveText(
          exercise.prompt,
        )
        await solveExercise(main, exercise, content)
        await page.getByRole('button', { name: 'Kiểm tra' }).click()
        await expect(page.getByRole('status'), exercise.id).toContainText('Chính xác!')
        await page
          .getByRole('button', {
            name: i + 1 < lesson.exercises.length ? 'Tiếp tục' : 'Hoàn thành',
          })
          .click()
      }
      // server chấm: 100% và đạt
      await expect(page.getByText('100%')).toBeVisible()
      for (const id of lesson.unlocksMolecules) {
        await expect(
          page.getByRole('main').getByText(content.molecules.get(id)!.name).first(),
        ).toBeVisible()
      }
      if (li + 1 < lessons.length) {
        await page.getByRole('link', { name: 'Bài tiếp theo' }).click()
      } else {
        await page.getByRole('link', { name: 'Về bản đồ học' }).click()
      }
    })
  }

  // Bản đồ: mọi bài đã xong
  for (const lesson of lessons) {
    await expect(
      page.getByRole('link', { name: new RegExp(`${lesson.title}, đã xong`) }),
    ).toBeVisible()
  }
  // Bộ sưu tập: đủ mọi phân tử mà chương trình mở khoá
  const unlockable = new Set(lessons.flatMap((l) => l.unlocksMolecules))
  await page.goto('/molecules')
  await expect(
    page.getByText(`Bạn đã mở ${unlockable.size} trên ${content.molecules.size} phân tử`),
  ).toBeVisible()
})
