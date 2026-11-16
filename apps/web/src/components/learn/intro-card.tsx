import { content, type IntroCard as IntroCardData } from '@funchem/content'
import { MoleculeView } from '@/components/chem/molecule-view'
import { MoleculeZoom } from '@/components/chem/molecule-zoom'
import { ReactionPlayer } from '@/components/chem/reaction-player'
import { SceneView } from '@/components/scenes'

/**
 * Thẻ "Khám phá" mở đầu bài học: hiện tượng ngoài đời trước,
 * bấm kính lúp để phóng to xuống cấp nguyên tử, rồi mới tới câu chuyện.
 */
export function IntroCard({ intro }: { intro: IntroCardData }) {
  const v = intro.visual
  const molecule = v.type === 'molecule' ? content.molecules.get(v.moleculeId) : undefined
  const reaction = v.type === 'reaction' ? content.reactions.get(v.reactionId) : undefined
  const illustrated = molecule?.lifeExamples.find((e) => e.illustration)
  const scene = v.type === 'molecule' ? (v.scene ?? illustrated?.illustration) : undefined
  // khi bài học tự chọn cảnh riêng thì không dùng lời dẫn của ví dụ đời sống mặc định
  const hint =
    v.type === 'molecule' && !v.scene && illustrated
      ? `${illustrated.title}. Bấm kính lúp để nhìn sâu vào bên trong.`
      : undefined

  return (
    <article className="flex flex-col gap-5">
      <p className="text-sm font-extrabold text-brand-deep">Khám phá</p>
      <h1 className="-mt-4 text-2xl font-extrabold text-balance">{intro.title}</h1>

      {molecule && scene && <MoleculeZoom molecule={molecule} scene={scene} hint={hint} />}
      {molecule && !scene && (
        <div className="flex flex-col items-center rounded-2xl border border-line bg-paper py-6">
          <MoleculeView molecule={molecule} size={200} animated showLabel />
        </div>
      )}
      {reaction && <ReactionPlayer reaction={reaction} />}
      {/* các dạng hình mới (ba trạng thái, bảng tuần hoàn, bên trong nguyên tử): tạm hiện cảnh đời sống cho tới khi có phần phóng to riêng */}
      {v.type === 'states' && (
        <SceneView id={v.scenes.liquid} className="rounded-2xl border border-line" />
      )}
      {(v.type === 'periodic-table' || v.type === 'atom') && (
        <SceneView id={v.scene} className="rounded-2xl border border-line" />
      )}

      <div className="flex flex-col gap-3 text-lg leading-relaxed">
        {intro.story.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </article>
  )
}
