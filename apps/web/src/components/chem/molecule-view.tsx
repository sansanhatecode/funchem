import { moleculeViewBox, placeMolecule } from '@funchem/chem-ui'
import { formatFormula, type Molecule, moleculeLabel } from '@funchem/content'
import { AtomShape, BondShape } from './shapes'

export interface MoleculeViewProps {
  molecule: Molecule
  size?: number
  /** nguyên tử nhấp nhô nhẹ; tự tắt khi hệ điều hành bật giảm chuyển động */
  animated?: boolean
  showLabel?: boolean
  /** ẩn khỏi trình đọc màn hình khi phân tử chỉ để trang trí hoặc đã có nhãn bên cạnh */
  decorative?: boolean
}

/**
 * Vẽ phân tử dạng bóng–que 2D từ dữ liệu trong @funchem/content.
 * Bố cục tính bởi @funchem/chem-ui nên mobile vẽ lại được bằng react-native-svg.
 */
export function MoleculeView({
  molecule,
  size = 160,
  animated = false,
  showLabel = false,
  decorative = false,
}: MoleculeViewProps) {
  const placed = placeMolecule(molecule, molecule.id, 50, 50, 100)
  const vb = moleculeViewBox(molecule)
  const title = `${moleculeLabel(molecule)}, ${formatFormula(molecule.formula)}`

  return (
    <figure className="inline-flex flex-col items-center gap-2">
      <svg
        viewBox={`${vb.x} ${vb.y} ${vb.side} ${vb.side}`}
        width={size}
        height={size}
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : title}
        aria-hidden={decorative || undefined}
      >
        {placed.bonds.map((b) => (
          <BondShape key={b.key} bond={b} />
        ))}
        {placed.atoms.map((a, i) => (
          <g key={a.key} transform={`translate(${a.x} ${a.y})`}>
            <g
              style={
                animated
                  ? {
                      animation: `atom-float 3s ease-in-out ${i * 0.35}s infinite`,
                      transformBox: 'fill-box',
                    }
                  : undefined
              }
            >
              <AtomShape element={a.element} r={a.r} />
            </g>
          </g>
        ))}
      </svg>
      {showLabel && (
        <figcaption className="text-center text-sm">
          <span className="font-bold">{moleculeLabel(molecule)}</span>{' '}
          <span className="text-ink-soft">{formatFormula(molecule.formula)}</span>
        </figcaption>
      )}
    </figure>
  )
}
