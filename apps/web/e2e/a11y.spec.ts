import AxeBuilder from '@axe-core/playwright'
import { content } from '@funchem/content'
import { expect, type Page, test } from '@playwright/test'
import { playExercises } from './helpers'
import { answerWrong } from './solve'

/**
 * Quét accessibility tự động (axe, chuẩn WCAG 2.1 mức A và AA) trên các màn hình chính.
 * Công cụ chỉ bắt được lỗi máy đo được (độ tương phản, nhãn, vai trò, cấu trúc);
 * thao tác bằng bàn phím và trình đọc màn hình vẫn cần người thử.
 */
async function scan(page: Page, name: string) {
  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()
  const report = violations.map((v) => ({
    rule: v.id,
    impact: v.impact,
    help: v.help,
    nodes: v.nodes
      .slice(0, 5)
      .map((n) => `${n.target.join(' ')} :: ${n.failureSummary?.split('\n')[1]?.trim() ?? ''}`),
    count: v.nodes.length,
  }))
  expect(report, `${name}: ${JSON.stringify(report, null, 2)}`).toEqual([])
}

test.describe('accessibility', () => {
  test('trang chủ', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await scan(page, 'trang chủ')
  })

  test('đăng nhập, điều khoản', async ({ page }) => {
    await page.goto('/login')
    await expect(page.getByLabel('Email')).toBeVisible()
    await scan(page, 'đăng nhập')
    await page.goto('/terms')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await scan(page, 'điều khoản')
  })

  test('bản đồ học, bộ sưu tập, hồ sơ, bảng xếp hạng', async ({ page }) => {
    await page.goto('/learn')
    await expect(page.getByRole('link', { name: /, sẵn sàng$/ }).first()).toBeVisible()
    await scan(page, 'bản đồ học')
    for (const path of ['/molecules', '/profile', '/leaderboard']) {
      await page.goto(path)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      await scan(page, path)
    }
  })

  test('bài học: thẻ Khám phá, câu hỏi, phản hồi sai', async ({ page }) => {
    await page.goto('/learn/u1-l1-atoms')
    await expect(page.getByRole('button', { name: 'Bắt đầu luyện tập' })).toBeVisible()
    await scan(page, 'thẻ Khám phá')
    await page.getByRole('button', { name: 'Bắt đầu luyện tập' }).click()
    const check = page.getByRole('button', { name: 'Kiểm tra', exact: true })
    await expect(check).toBeVisible()
    await scan(page, 'câu hỏi')

    // trả lời sai câu đầu để quét cả màn phản hồi, rồi làm hết bài để quét màn kết quả
    const main = page.getByRole('main')
    const first = content.exercises.get((await main.getAttribute('data-exercise-id'))!)!.exercise
    expect(await answerWrong(main, first)).toBe(true)
    await check.click()
    await expect(page.getByRole('status')).toContainText('Chưa đúng')
    await scan(page, 'phản hồi sai')
    await page.getByRole('button', { name: 'Tiếp tục' }).click()
    await playExercises(page)
    await expect(page.getByText('Chính xác', { exact: true })).toBeVisible()
    await scan(page, 'màn kết quả')
  })

  test('mọi dạng bài tập và hình mở đầu ở trang xem thử', async ({ page }) => {
    await page.goto('/dev/exercises')
    await expect(page.locator('[data-exercise]').first()).toBeVisible()
    await scan(page, 'các dạng bài tập')
    await page.goto('/dev/visuals')
    await expect(page.getByRole('heading', { name: 'Thang pH' })).toBeVisible()
    await scan(page, 'hình mở đầu')
  })
})
