import { content } from '@funchem/content'
import { fixtureContent } from '@funchem/content/testing'
import { expect, test } from '@playwright/test'
import { answerWrong, solveExercise } from './solve'

test.describe('trang thử nghiệm dạng bài', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dev/exercises')
    // chờ trang hoạt động rồi mới thao tác
    await expect(page.locator('main[data-ready]')).toBeVisible()
  })

  for (const { exercise } of fixtureContent.exercises.values()) {
    test(`${exercise.type}: trả lời đúng được chấm đúng (${exercise.id})`, async ({ page }) => {
      const card = page.locator(`[data-exercise="${exercise.id}"]`)
      await solveExercise(card, exercise, fixtureContent)
      await card.getByRole('button', { name: 'Kiểm tra' }).click()
      await expect(card.getByRole('status')).toHaveText('Đúng')
    })
  }

  test('phân loại: kéo thả thẻ vào nhóm, đổi nhóm và trả về khay', async ({ page }) => {
    const exercise = [...fixtureContent.exercises.values()]
      .map((e) => e.exercise)
      .find((e) => e.type === 'sort')
    if (exercise?.type !== 'sort') throw new Error('fixture thiếu bài phân loại')
    const card = page.locator(`[data-exercise="${exercise.id}"]`)
    const drop = (id: string) => card.locator(`[data-drop="${id}"]`)
    const chip = (id: string) => card.locator(`[data-item-id="${id}"]`)
    const dragTo = async (itemId: string, zone: string) => {
      const from = (await chip(itemId).boundingBox())!
      const to = (await drop(zone).boundingBox())!
      await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2)
      await page.mouse.down()
      // đi qua vài điểm để trình duyệt bắn đủ pointermove
      await page.mouse.move(to.x + to.width / 2, to.y + to.height - 12, { steps: 6 })
      await page.mouse.up()
    }

    const first = exercise.items[0]!
    const wrongGroup = exercise.groups.find((g) => g.id !== first.groupId)!
    await card.scrollIntoViewIfNeeded()

    // thả nhầm nhóm, rồi kéo trả về khay
    await dragTo(first.id, wrongGroup.id)
    await expect(drop(wrongGroup.id).locator(`[data-item-id="${first.id}"]`)).toBeVisible()
    await dragTo(first.id, 'tray')
    await expect(drop('tray').locator(`[data-item-id="${first.id}"]`)).toBeVisible()

    // lại thả nhầm, rồi kéo thẳng sang nhóm đúng
    await dragTo(first.id, wrongGroup.id)
    for (const item of exercise.items) await dragTo(item.id, item.groupId)
    await expect(drop('tray').locator('[data-item-id]')).toHaveCount(0)

    await card.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(card.getByRole('status')).toHaveText('Đúng')
  })

  test('trả lời sai hiện đáp án đúng', async ({ page }) => {
    const exercise = fixtureContent.exercises.get('u1-l1-e1')!.exercise
    const card = page.locator(`[data-exercise="${exercise.id}"]`)
    expect(await answerWrong(card, exercise)).toBe(true)
    await card.getByRole('button', { name: 'Kiểm tra' }).click()
    await expect(card.getByRole('status')).toContainText('Sai. Đáp án: Nguyên tử')
  })

  test('nút Kiểm tra bị khoá khi chưa trả lời đủ', async ({ page }) => {
    const card = page.locator('[data-exercise="u1-l1-e4"]') // match-pairs
    await expect(card.getByRole('button', { name: 'Kiểm tra' })).toBeDisabled()
    await card.locator('[data-left-id="l1"]').click()
    await card.locator('[data-right-id="r1"]').click()
    await expect(card.getByRole('button', { name: 'Kiểm tra' })).toBeDisabled()
  })

  test('phản ứng: hiện tượng trước, phóng to mới thấy nguyên tử, đủ 4 bước và không mất nguyên tử nào', async ({
    page,
  }) => {
    for (const rx of content.reactions.values()) {
      const card = page.locator(`[data-reaction="${rx.id}"]`)
      const stage = card.getByRole('img', { name: /Hoạt hình phản ứng/ })

      // ban đầu chỉ có cảnh đời sống và câu chuyện, chưa có nguyên tử
      await expect(stage).toBeHidden()
      await expect(card.getByText(rx.story.title)).toBeVisible()

      await card.getByRole('button', { name: 'Phóng to xem phản ứng' }).click()
      await expect(stage).toBeVisible()
      const atomCount = await stage.locator('g > circle:first-child').count()
      expect(atomCount).toBeGreaterThan(2)

      // phản ứng tự chạy sau khi phóng to; đưa về bước 1 rồi tự bấm từng bước
      await card.getByRole('button', { name: /^Bước 1/ }).click()
      await expect(stage).toHaveAttribute('aria-label', /Bước 1/)
      for (const step of [2, 3, 4]) {
        await card.getByRole('button', { name: 'Bước tiếp' }).click()
        await expect(stage).toHaveAttribute('aria-label', new RegExp(`Bước ${step}`))
        expect(await stage.locator('g > circle:first-child').count()).toBe(atomCount)
      }
      await expect(card.getByRole('button', { name: 'Về đầu' })).toBeVisible()

      await card.getByRole('button', { name: 'Thu nhỏ' }).click()
      await expect(stage).toBeHidden()
    }
  })
})
