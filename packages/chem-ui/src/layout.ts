import {
  ELEMENTS,
  type ElementSymbol,
  type Molecule,
  type Reaction,
  type ReactionSide,
} from '@funchem/content'

/** Bán kính vẽ của nguyên tử H trong hộp phân tử 100x100. */
export const BASE_ATOM_RADIUS = 9

export interface Point {
  x: number
  y: number
}

export interface PlacedAtom extends Point {
  key: string
  element: ElementSymbol
  r: number
}

export interface PlacedBond {
  key: string
  x1: number
  y1: number
  x2: number
  y2: number
  order: 1 | 2 | 3
  kind: 'covalent' | 'ionic'
  /** độ dày nét, đã theo tỉ lệ */
  width: number
}

export interface PlacedMolecule {
  key: string
  moleculeId: string
  /** tâm và cạnh của ô chứa phân tử trên sân khấu */
  cx: number
  cy: number
  size: number
  atoms: PlacedAtom[]
  bonds: PlacedBond[]
}

export interface StageSize {
  width: number
  height: number
}

/** Đặt một phân tử (toạ độ hộp 100x100) vào ô vuông cạnh `size`, tâm (cx, cy). */
export function placeMolecule(
  molecule: Molecule,
  key: string,
  cx: number,
  cy: number,
  size: number,
): PlacedMolecule {
  const k = size / 100
  const pos = (v: number, c: number) => c + (v - 50) * k
  const atoms: PlacedAtom[] = molecule.atoms.map((a) => ({
    key: `${key}:${a.id}`,
    element: a.element,
    x: pos(a.x, cx),
    y: pos(a.y, cy),
    r: BASE_ATOM_RADIUS * ELEMENTS[a.element].radius * k,
  }))
  const byId = new Map(molecule.atoms.map((a, i) => [a.id, atoms[i]!]))
  const bonds: PlacedBond[] = molecule.bonds.flatMap((b, i) => {
    const a = byId.get(b.a)
    const c = byId.get(b.b)
    if (!a || !c) return []
    return [
      {
        key: `${key}:b${i}`,
        x1: a.x,
        y1: a.y,
        x2: c.x,
        y2: c.y,
        order: b.order,
        kind: b.kind,
        width: (b.order === 1 ? 3.2 : 2.4) * k,
      },
    ]
  })
  return { key, moleculeId: molecule.id, cx, cy, size, atoms, bonds }
}

/**
 * Xếp các phân tử của một vế (đã nhân hệ số) thành lưới giữa sân khấu.
 * Tối đa 4 phân tử một hàng; nhiều hơn thì xuống hàng.
 */
export function layoutSide(
  sides: ReactionSide[],
  molecules: Map<string, Molecule>,
  stage: StageSize,
  keyPrefix: string,
  options: { maxPerRow?: number; maxCell?: number } = {},
): PlacedMolecule[] {
  const maxPerRow = options.maxPerRow ?? 4
  const instances: { molecule: Molecule; key: string }[] = []
  sides.forEach((s, si) => {
    const m = molecules.get(s.moleculeId)
    if (!m) return
    for (let i = 0; i < s.coefficient; i++)
      instances.push({ molecule: m, key: `${keyPrefix}${si}.${i}` })
  })
  const n = instances.length
  if (n === 0) return []
  const rows = Math.ceil(n / maxPerRow)
  const cols = Math.ceil(n / rows)
  const cell = Math.min(stage.width / cols, stage.height / rows, options.maxCell ?? 120)
  const gridW = cols * cell
  const gridH = rows * cell
  const x0 = (stage.width - gridW) / 2
  const y0 = (stage.height - gridH) / 2

  return instances.map((inst, i) => {
    const row = Math.floor(i / cols)
    const col = i % cols
    // hàng cuối chưa đủ thì canh giữa
    const inRow = row === rows - 1 ? n - cols * (rows - 1) : cols
    const rowOffset = ((cols - inRow) * cell) / 2
    const cx = x0 + rowOffset + col * cell + cell / 2
    const cy = y0 + row * cell + cell / 2
    return placeMolecule(inst.molecule, inst.key, cx, cy, cell * 0.92)
  })
}

export interface MovingAtom {
  key: string
  element: ElementSymbol
  /** vị trí trong chất phản ứng */
  from: Point & { r: number }
  /** vị trí khi liên kết vừa đứt: bị đẩy nhẹ ra xa tâm phân tử */
  apart: Point & { r: number }
  /** vị trí trong sản phẩm */
  to: Point & { r: number }
}

export interface ReactionLayout {
  stage: StageSize
  reactants: PlacedMolecule[]
  products: PlacedMolecule[]
  atoms: MovingAtom[]
  /** số nguyên tử từng nguyên tố; bằng nhau ở hai vế vì phản ứng đã cân bằng */
  counts: { element: ElementSymbol; count: number }[]
}

/**
 * Tính bố cục cho hoạt hình phản ứng: mỗi nguyên tử ở chất phản ứng được ghép với
 * một nguyên tử cùng nguyên tố ở sản phẩm, để giao diện chỉ việc di chuyển chúng.
 * Thuần dữ liệu: web vẽ bằng SVG, mobile vẽ bằng react-native-svg.
 */
export function layoutReaction(
  reaction: Pick<Reaction, 'reactants' | 'products'>,
  molecules: Map<string, Molecule>,
  stage: StageSize,
): ReactionLayout {
  const reactants = layoutSide(reaction.reactants, molecules, stage, 'r')
  const products = layoutSide(reaction.products, molecules, stage, 'p')

  const targets = new Map<ElementSymbol, PlacedAtom[]>()
  for (const m of products) {
    for (const a of m.atoms) {
      const list = targets.get(a.element) ?? []
      list.push(a)
      targets.set(a.element, list)
    }
  }
  // ghép theo thứ tự trái → phải để đường đi ít cắt nhau
  for (const list of targets.values()) list.sort((a, b) => a.x - b.x || a.y - b.y)

  const sources: { atom: PlacedAtom; mol: PlacedMolecule }[] = reactants
    .flatMap((mol) => mol.atoms.map((atom) => ({ atom, mol })))
    .sort((a, b) => a.atom.x - b.atom.x || a.atom.y - b.atom.y)

  const used = new Map<ElementSymbol, number>()
  const atoms: MovingAtom[] = []
  for (const { atom, mol } of sources) {
    const i = used.get(atom.element) ?? 0
    used.set(atom.element, i + 1)
    const target = targets.get(atom.element)?.[i]
    if (!target) {
      throw new Error(`Phản ứng không cân bằng: thừa nguyên tử ${atom.element} ở chất phản ứng`)
    }
    const spread = mol.atoms.length > 1 ? 1.28 : 1
    atoms.push({
      key: atom.key,
      element: atom.element,
      from: { x: atom.x, y: atom.y, r: atom.r },
      apart: {
        x: mol.cx + (atom.x - mol.cx) * spread,
        y: mol.cy + (atom.y - mol.cy) * spread,
        r: atom.r,
      },
      to: { x: target.x, y: target.y, r: target.r },
    })
  }
  for (const [el, list] of targets) {
    if ((used.get(el) ?? 0) !== list.length) {
      throw new Error(`Phản ứng không cân bằng: thiếu nguyên tử ${el} ở chất phản ứng`)
    }
  }

  const counts = [...targets.entries()]
    .map(([element, list]) => ({ element, count: list.length }))
    .sort((a, b) => ELEMENTS[a.element].number - ELEMENTS[b.element].number)

  return { stage, reactants, products, atoms, counts }
}

/** Các bước của hoạt hình phản ứng, dùng chung cho mọi nền tảng. */
export const REACTION_STEPS = [
  { id: 'reactants', title: 'Chất tham gia', caption: 'Các chất ban đầu gặp nhau.' },
  { id: 'break', title: 'Liên kết đứt', caption: 'Liên kết cũ giữa các nguyên tử bị bẻ gãy.' },
  {
    id: 'rearrange',
    title: 'Sắp xếp lại',
    caption: 'Các nguyên tử tìm bạn mới. Không nguyên tử nào mất đi hay sinh ra.',
  },
  { id: 'products', title: 'Sản phẩm', caption: 'Liên kết mới hình thành, tạo ra chất mới.' },
] as const

export type ReactionStepId = (typeof REACTION_STEPS)[number]['id']

/**
 * Khung vuông vừa khít phân tử (toạ độ hộp 100x100), dùng làm viewBox để hình
 * lấp đầy khung vẽ thay vì nằm nhỏ giữa ô trống.
 * `minSide` giữ cho phân tử một nguyên tử không bị phóng quá to.
 */
export function moleculeViewBox(
  molecule: Molecule,
  options: { padding?: number; minSide?: number } = {},
): { x: number; y: number; side: number } {
  const padding = options.padding ?? 5
  const minSide = options.minSide ?? 36
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const a of molecule.atoms) {
    const r = BASE_ATOM_RADIUS * ELEMENTS[a.element].radius
    minX = Math.min(minX, a.x - r)
    minY = Math.min(minY, a.y - r)
    maxX = Math.max(maxX, a.x + r)
    maxY = Math.max(maxY, a.y + r)
  }
  const side = Math.max(maxX - minX, maxY - minY, minSide - 2 * padding) + 2 * padding
  return { x: (minX + maxX) / 2 - side / 2, y: (minY + maxY) / 2 - side / 2, side }
}
