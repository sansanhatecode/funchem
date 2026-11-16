import { content, formatFormula, moleculeLabel, SCENE_IDS, type SceneId } from '@funchem/content'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { MoleculeView } from '@/components/chem/molecule-view'
import { ReactionPlayer } from '@/components/chem/reaction-player'
import { Mascot } from '@/components/mascot'
import { SceneView } from '@/components/scenes'
import { buttonClass } from '@/components/ui/button'
import { CheckIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { HeroPlayground } from './home/hero-playground'
import { TryExercise } from './home/try-exercise'

// Một ngày bình thường, nhìn bằng con mắt hoá học
const DAY: { time: string; moment: string; scene: SceneId; molecule: string; fact: string }[] = [
  {
    time: '6:30',
    moment: 'Đánh răng',
    scene: 'toothpaste',
    molecule: 'naf',
    fact: 'Sodium fluoride trong kem đánh răng làm men răng chắc hơn.',
  },
  {
    time: '11:30',
    moment: 'Nêm nồi canh',
    scene: 'salt-shaker',
    molecule: 'nacl',
    fact: 'Hạt muối là vô số ion trái dấu xếp xen kẽ thành khối vuông tí hon.',
  },
  {
    time: '15:00',
    moment: 'Mở lon nước ngọt',
    scene: 'soda-can',
    molecule: 'co2',
    fact: 'Tiếng xì là khí carbon dioxide bị nén đang ùa ra ngoài.',
  },
  {
    time: '20:00',
    moment: 'Thắp một ngọn nến',
    scene: 'candle',
    molecule: 'o2',
    fact: 'Lửa cần oxygen. Úp ly lên, oxygen hết, nến tắt.',
  },
]

// Những câu hỏi ai cũng từng thắc mắc
const WHY: { question: string; answer: string; scene: SceneId }[] = [
  {
    question: 'Vì sao gói bim bim lúc nào cũng phồng căng?',
    answer:
      'Bên trong được bơm đầy khí nitrogen. Khí này gần như không phản ứng với gì, nên bánh giòn lâu và không vỡ vụn.',
    scene: 'snack-bag',
  },
  {
    question: 'Vì sao bóng bay tự bay lên trời?',
    answer: 'Helium nhẹ hơn không khí rất nhiều, nên không khí xung quanh đẩy quả bóng lên cao.',
    scene: 'balloons',
  },
  {
    question: 'Vì sao không được đốt than trong phòng kín?',
    answer:
      'Thiếu oxygen, than cháy sinh ra carbon monoxide: một khí độc không màu, không mùi, không ai kịp nhận ra.',
    scene: 'coal-stove',
  },
  {
    question: 'Vì sao nhẫn vàng đeo cả đời không gỉ?',
    answer:
      'Nguyên tử gold (vàng) gần như không chịu kết hợp với oxygen, khác hẳn iron (sắt) trong cây đinh.',
    scene: 'gold-ring',
  },
]

const NOT_HARD = [
  'Không cần thuộc công thức trước. Bạn nhìn hình, rồi công thức tự có nghĩa.',
  'Mỗi bài chỉ 5 phút, làm bằng cách chạm và ghép.',
  'Sai thì có giải thích ngay, bằng lời dễ hiểu.',
]

// Vài nguyên tử trôi lơ lửng sau phần mở đầu, chỉ để trang trí
const FLOATERS = [
  { x: '6%', y: '18%', size: 34, color: '#EF4444', dur: 7 },
  { x: '44%', y: '8%', size: 22, color: '#3B82F6', dur: 9 },
  { x: '90%', y: '14%', size: 30, color: '#FFC233', dur: 8 },
  { x: '3%', y: '78%', size: 20, color: '#A855F7', dur: 10 },
  { x: '48%', y: '88%', size: 26, color: '#16A34A', dur: 8.5 },
]

const container = 'mx-auto max-w-6xl px-5'

export default function HomePage() {
  const rusting = content.reactions.get('rusting')!

  return (
    <div className="overflow-x-clip">
      {/* ───── Mở đầu ───── */}
      <div className="relative bg-gradient-to-b from-brand-soft to-canvas">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          {FLOATERS.map((f, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-40"
              style={
                {
                  left: f.x,
                  top: f.y,
                  width: f.size,
                  height: f.size,
                  backgroundColor: f.color,
                  animation: `drift-atom ${f.dur}s ease-in-out ${-i}s infinite`,
                  '--ax': `${i % 2 ? -14 : 14}px`,
                  '--ay': `${i % 3 ? -18 : 16}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <header className={cn(container, 'relative flex h-16 items-center justify-between')}>
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-deep"
          >
            <Mascot size={30} />
            FunChem
          </Link>
          <Link href="/login" className={buttonClass('ghost', 'md')}>
            Đăng nhập
          </Link>
        </header>

        <section
          className={cn(
            container,
            'relative grid items-center gap-8 pt-4 pb-12 md:grid-cols-[5fr_6fr] md:gap-12 md:pt-10 md:pb-16',
          )}
        >
          <div className="min-w-0">
            <h1 className="text-[2.6rem] leading-[1.08] font-extrabold tracking-tight lg:text-6xl">
              Hoá học ở
              <br />
              <span className="text-brand-deep">khắp mọi nơi</span>
            </h1>
            <p className="mt-4 max-w-[44ch] text-lg text-ink-soft">
              Ngay trong ly nước, ngọn nến, lon nước ngọt quanh bạn. Chạm vào để thấy thế giới bên
              trong. Dễ hơn bạn nghĩ nhiều.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/learn" className={buttonClass('primary', 'lg')}>
                Bắt đầu học
              </Link>
              <Link href="/login" className={buttonClass('secondary', 'lg')}>
                Tôi đã có tài khoản
              </Link>
            </div>
          </div>
          <div className="relative min-w-0">
            <HeroPlayground />
            <div className="absolute -top-10 -right-2 hidden md:block" aria-hidden="true">
              <Mascot mood="wave" size={76} />
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* ───── Ở đâu cũng có hoá học: dải cảnh chạy ngang ───── */}
        <section aria-label="Hoá học có mặt ở những đâu" className="marquee overflow-hidden py-6">
          <ul className="marquee-track flex w-max gap-4">
            {[...SCENE_IDS, ...SCENE_IDS].map((id, i) => (
              <li key={`${id}-${i}`} className="w-44 shrink-0" aria-hidden={i >= SCENE_IDS.length}>
                <SceneView id={id} still decorative className="rounded-2xl border border-line" />
              </li>
            ))}
          </ul>
        </section>

        {/* ───── Một ngày của bạn ───── */}
        <section aria-labelledby="day" className={cn(container, 'py-14')}>
          <h2
            id="day"
            className="max-w-[20ch] text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
          >
            Một ngày của bạn, từ sáng tới tối, toàn là hoá học
          </h2>
          <ol className="relative mt-10 grid gap-8 md:grid-cols-4 md:gap-5">
            {/* đường nối các mốc trong ngày */}
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-[1.4rem] w-1 rounded bg-line md:top-[1.4rem] md:right-0 md:bottom-auto md:left-0 md:h-1 md:w-auto"
            />
            {DAY.map((d) => {
              const m = content.molecules.get(d.molecule)!
              return (
                <li key={d.time} className="relative pl-16 md:pt-16 md:pl-0">
                  <span className="absolute top-0 left-0 grid h-11 min-w-11 place-items-center rounded-full bg-ink px-3 text-sm font-extrabold text-white">
                    {d.time}
                  </span>
                  <SceneView
                    id={d.scene}
                    decorative
                    className="rounded-(--radius-card) border border-line shadow-(--shadow-card)"
                  />
                  <h3 className="mt-3 text-lg font-extrabold">{d.moment}</h3>
                  <p className="mt-1 text-ink-soft">{d.fact}</p>
                  <div className="mt-2 flex items-center gap-2 text-sm font-bold">
                    <MoleculeView molecule={m} size={34} decorative />
                    {moleculeLabel(m)}{' '}
                    <span className="font-medium text-ink-soft">{formatFormula(m.formula)}</span>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* ───── Hiểu điều đang xảy ra: phản ứng đinh gỉ ───── */}
        <section aria-labelledby="inside-out" className="bg-paper py-14">
          <div className={cn(container, 'grid items-start gap-8 md:grid-cols-2 md:gap-12')}>
            <div className="md:order-2 md:pt-6">
              <h2
                id="inside-out"
                className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
              >
                Hiểu được điều đang xảy ra ngay trước mắt
              </h2>
              <p className="mt-3 max-w-[52ch] text-lg text-ink-soft">
                Cây đinh để ngoài mưa hoá gỉ. Bấm kính lúp để xem tận mắt: sắt và oxygen buông tay
                bạn cũ, nắm tay bạn mới, và không nguyên tử nào biến mất.
              </p>
              <ul
                className="mt-6 flex items-end gap-x-2 sm:gap-x-3"
                aria-label="Các chất trong phản ứng gỉ sắt"
              >
                {[
                  { id: 'fe', sep: '+' },
                  { id: 'o2', sep: '→' },
                  { id: 'fe2o3', sep: null },
                ].map(({ id, sep }) => {
                  const m = content.molecules.get(id)!
                  return (
                    <li key={id} className="flex items-end gap-2 sm:gap-3">
                      <figure className="flex flex-col items-center rounded-2xl border border-line bg-canvas px-2 pt-2 pb-3 sm:px-3">
                        <MoleculeView molecule={m} size={60} decorative />
                        <figcaption className="text-center text-sm leading-tight">
                          <span className="font-extrabold">{m.name}</span>
                          <br />
                          <span className="text-ink-soft">{formatFormula(m.formula)}</span>
                        </figcaption>
                      </figure>
                      {sep && (
                        <span
                          className="pb-8 text-xl font-extrabold text-ink-soft sm:text-2xl"
                          aria-hidden="true"
                        >
                          {sep}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="rounded-(--radius-card) border border-line bg-canvas p-4 md:order-1">
              <ReactionPlayer reaction={rusting} />
            </div>
          </div>
        </section>

        {/* ───── Những câu hỏi vì sao ───── */}
        <section aria-labelledby="why" className={cn(container, 'py-14')}>
          <h2 id="why" className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Bạn đã bao giờ thắc mắc?
          </h2>
          <p className="mt-2 text-lg text-ink-soft">
            Chạm vào câu hỏi để xem hoá học trả lời thế nào.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {WHY.map((w) => (
              <li key={w.question}>
                <details className="group h-full overflow-hidden rounded-(--radius-card) border border-line bg-paper shadow-(--shadow-card)">
                  <summary className="flex cursor-pointer list-none flex-col [&::-webkit-details-marker]:hidden">
                    <SceneView id={w.scene} decorative />
                    <span className="flex items-center justify-between gap-3 p-4">
                      <span className="text-lg leading-snug font-extrabold">{w.question}</span>
                      <span
                        aria-hidden="true"
                        className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-xl font-extrabold text-white transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-line bg-brand-soft p-4 text-ink">{w.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </section>

        {/* ───── Hoá học không khó: làm thử một bài ───── */}
        <section aria-labelledby="easy" className="bg-[#fff8e1] py-14">
          <div
            className={cn(container, 'grid items-center gap-8 md:grid-cols-[5fr_6fr] md:gap-12')}
          >
            <div>
              <Mascot mood="happy" size={110} title="Bình, linh vật của FunChem" />
              <h2
                id="easy"
                className="mt-4 text-3xl font-extrabold tracking-tight text-balance md:text-4xl"
              >
                Hoá học không khó. Thử ngay trong 10 giây.
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {NOT_HARD.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-lg">
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <CheckIcon weight="bold" size={14} aria-hidden="true" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <TryExercise />
          </div>
        </section>

        {/* ───── Lời mời cuối trang ───── */}
        <section className={cn(container, 'py-14')}>
          <div className="flex flex-col items-center gap-5 rounded-(--radius-card) bg-brand px-6 py-10 text-center text-white sm:flex-row sm:text-left">
            <Mascot mood="cheer" size={110} />
            <div className="flex-1">
              <h2 className="text-2xl font-extrabold text-balance md:text-3xl">
                Nhìn quanh xem. Bạn muốn hiểu thứ gì trước?
              </h2>
              <p className="mt-1 opacity-90">
                Không cần đăng ký. Tiến độ được giữ lại khi bạn tạo tài khoản sau.
              </p>
            </div>
            <Link
              href="/learn"
              className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-2xl bg-paper px-7 font-extrabold text-brand-deep shadow-[0_4px_0_rgb(0_0_0/0.18)] active:translate-y-[4px] active:shadow-none"
            >
              Bắt đầu học
            </Link>
          </div>
        </section>
      </main>

      <footer
        className={cn(
          container,
          'flex items-center justify-between border-t border-line py-6 text-sm text-ink-soft',
        )}
      >
        <span className="font-extrabold text-brand-deep">FunChem</span>
        <span>Hoá học ở khắp mọi nơi</span>
      </footer>
    </div>
  )
}
