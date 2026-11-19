/**
 * Các nguyên tố xuất hiện trong chương trình học.
 *
 * Tên gọi theo Chương trình giáo dục phổ thông 2018: dùng tên quốc tế (IUPAC) như
 * hydrogen, oxygen, sodium. `vi` là tên quen dùng trong tiếng Việt của một số nguyên tố
 * (sắt, đồng, vàng, natri...), hiện kèm trong ngoặc để người học nối được hai cách gọi.
 *
 * Màu theo quy ước CPK (Corey–Pauling–Koltun) đã được làm dịu cho giao diện.
 * `radius` là bán kính tương đối dùng khi vẽ mô hình 2D (H = 1).
 */
export const ELEMENTS = {
  H: { number: 1, name: 'Hydrogen', color: '#F4F4F5', textColor: '#18181B', radius: 1.0 },
  He: { number: 2, name: 'Helium', color: '#D9FFFF', textColor: '#18181B', radius: 1.0 },
  Li: { number: 3, name: 'Lithium', color: '#CC80FF', textColor: '#18181B', radius: 1.5 },
  C: { number: 6, name: 'Carbon', color: '#3F3F46', textColor: '#FFFFFF', radius: 1.35 },
  N: {
    number: 7,
    name: 'Nitrogen',
    vi: 'nitơ',
    color: '#3B82F6',
    textColor: '#FFFFFF',
    radius: 1.3,
  },
  O: { number: 8, name: 'Oxygen', color: '#EF4444', textColor: '#FFFFFF', radius: 1.3 },
  F: { number: 9, name: 'Fluorine', color: '#86EFAC', textColor: '#18181B', radius: 1.25 },
  Ne: { number: 10, name: 'Neon', color: '#B3E3F5', textColor: '#18181B', radius: 1.2 },
  Na: {
    number: 11,
    name: 'Sodium',
    vi: 'natri',
    color: '#A855F7',
    textColor: '#FFFFFF',
    radius: 1.6,
  },
  Mg: { number: 12, name: 'Magnesium', color: '#22C55E', textColor: '#FFFFFF', radius: 1.5 },
  Al: {
    number: 13,
    name: 'Aluminium',
    vi: 'nhôm',
    color: '#BFA6A6',
    textColor: '#18181B',
    radius: 1.5,
  },
  Si: { number: 14, name: 'Silicon', color: '#F0C8A0', textColor: '#18181B', radius: 1.45 },
  P: { number: 15, name: 'Phosphorus', color: '#F97316', textColor: '#FFFFFF', radius: 1.4 },
  S: {
    number: 16,
    name: 'Sulfur',
    vi: 'lưu huỳnh',
    color: '#FACC15',
    textColor: '#18181B',
    radius: 1.4,
  },
  Cl: { number: 17, name: 'Chlorine', color: '#16A34A', textColor: '#FFFFFF', radius: 1.4 },
  Ar: { number: 18, name: 'Argon', color: '#80D1E3', textColor: '#18181B', radius: 1.3 },
  K: {
    number: 19,
    name: 'Potassium',
    vi: 'kali',
    color: '#8F40D4',
    textColor: '#FFFFFF',
    radius: 1.8,
  },
  Ca: { number: 20, name: 'Calcium', color: '#3DFF00', textColor: '#18181B', radius: 1.6 },
  Fe: { number: 26, name: 'Iron', vi: 'sắt', color: '#E06633', textColor: '#FFFFFF', radius: 1.5 },
  Cu: {
    number: 29,
    name: 'Copper',
    vi: 'đồng',
    color: '#C88033',
    textColor: '#FFFFFF',
    radius: 1.5,
  },
  Zn: { number: 30, name: 'Zinc', vi: 'kẽm', color: '#7D80B0', textColor: '#FFFFFF', radius: 1.5 },
  Ag: {
    number: 47,
    name: 'Silver',
    vi: 'bạc',
    color: '#C0C0C0',
    textColor: '#18181B',
    radius: 1.6,
  },
  I: { number: 53, name: 'Iodine', color: '#940094', textColor: '#FFFFFF', radius: 1.6 },
  Au: { number: 79, name: 'Gold', vi: 'vàng', color: '#FFD123', textColor: '#18181B', radius: 1.6 },
  Hg: {
    number: 80,
    name: 'Mercury',
    vi: 'thuỷ ngân',
    color: '#B8B8D0',
    textColor: '#18181B',
    radius: 1.6,
  },
  Pb: { number: 82, name: 'Lead', vi: 'chì', color: '#575961', textColor: '#FFFFFF', radius: 1.7 },
} as const satisfies Record<
  string,
  { number: number; name: string; vi?: string; color: string; textColor: string; radius: number }
>

export type ElementSymbol = keyof typeof ELEMENTS

export const ELEMENT_SYMBOLS = Object.keys(ELEMENTS) as [ElementSymbol, ...ElementSymbol[]]

/** Tên hiển thị của nguyên tố: tên quốc tế, kèm tên quen thuộc tiếng Việt nếu có. Ví dụ "Iron (sắt)". */
export function elementLabel(symbol: ElementSymbol): string {
  const el: { name: string; vi?: string } = ELEMENTS[symbol]
  return el.vi ? `${el.name} (${el.vi})` : el.name
}
