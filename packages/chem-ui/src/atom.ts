/** Số neutron của đồng vị phổ biến nhất, cho 20 nguyên tố đầu. */
const NEUTRONS: Record<number, number> = {
  1: 0,
  2: 2,
  3: 4,
  4: 5,
  5: 6,
  6: 6,
  7: 7,
  8: 8,
  9: 10,
  10: 10,
  11: 12,
  12: 12,
  13: 14,
  14: 14,
  15: 16,
  16: 16,
  17: 18,
  18: 22,
  19: 20,
  20: 20,
}

/** Sức chứa các lớp electron đối với 20 nguyên tố đầu. */
const SHELL_CAPACITY = [2, 8, 8, 2]

export interface AtomStructure {
  protons: number
  neutrons: number
  electrons: number
  /** số electron trên từng lớp, từ trong ra ngoài */
  shells: number[]
}

/** Cấu tạo của nguyên tử trung hoà có số hiệu `atomicNumber` (1..20). */
export function atomStructure(atomicNumber: number): AtomStructure {
  if (!Number.isInteger(atomicNumber) || atomicNumber < 1 || atomicNumber > 20) {
    throw new Error(`Chỉ hỗ trợ số hiệu nguyên tử từ 1 tới 20, nhận ${atomicNumber}`)
  }
  const shells: number[] = []
  let left = atomicNumber
  for (const cap of SHELL_CAPACITY) {
    if (left <= 0) break
    const n = Math.min(cap, left)
    shells.push(n)
    left -= n
  }
  return {
    protons: atomicNumber,
    neutrons: NEUTRONS[atomicNumber]!,
    electrons: atomicNumber,
    shells,
  }
}

export interface NucleonPosition {
  kind: 'proton' | 'neutron'
  x: number
  y: number
}

/**
 * Xếp proton và neutron thành một cụm tròn quanh gốc toạ độ (xoắn ốc góc vàng),
 * xen kẽ hai loại để nhìn rõ cả hai. `spacing` là khoảng cách giữa các hạt.
 */
export function layoutNucleus(
  protons: number,
  neutrons: number,
  spacing: number,
): NucleonPosition[] {
  const total = protons + neutrons
  const kinds: NucleonPosition['kind'][] = []
  let p = protons
  let n = neutrons
  for (let i = 0; i < total; i++) {
    // xen kẽ hai loại cho tới khi một loại hết
    const takeProton = p > 0 && (n === 0 || i % 2 === 0)
    if (takeProton) {
      kinds.push('proton')
      p--
    } else {
      kinds.push('neutron')
      n--
    }
  }
  const golden = Math.PI * (3 - Math.sqrt(5))
  return kinds.map((kind, i) => {
    const r = total === 1 ? 0 : spacing * Math.sqrt(i + 0.5) * 0.62
    // làm tròn: sin/cos lệch ở chữ số cuối giữa các engine JS, gây lệch khi render ở server rồi hydrate ở trình duyệt
    return { kind, x: round2(r * Math.cos(i * golden)), y: round2(r * Math.sin(i * golden)) }
  })
}

/** Làm tròn 2 chữ số thập phân, để toạ độ giống hệt nhau trên mọi engine JS. */
export function round2(n: number): number {
  return Math.round(n * 100) / 100
}
