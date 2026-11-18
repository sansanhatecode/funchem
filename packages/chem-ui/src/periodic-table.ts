/**
 * Ba nhóm theo sách KHTN 7 (chương trình 2018): kim loại, phi kim, khí hiếm.
 * Sách không tách nhóm "á kim": boron, silicon, arsenic xếp vào phi kim, germanium vào kim loại.
 */
export type ElementCategory = 'metal' | 'nonmetal' | 'noble-gas'

export interface TableElement {
  number: number
  symbol: string
  /** tên quốc tế theo chương trình 2018 */
  name: string
  /** tên quen dùng trong tiếng Việt, nếu có */
  vi?: string
  /** cột 1..18 */
  group: number
  /** hàng 1..6 */
  period: number
  category: ElementCategory
  /** nơi thường gặp trong đời sống */
  note?: string
}

const row = (
  number: number,
  symbol: string,
  name: string,
  group: number,
  period: number,
  category: ElementCategory,
  extra: { vi?: string; note?: string } = {},
): TableElement => ({ number, symbol, name, group, period, category, ...extra })

/**
 * Bảng tuần hoàn rút gọn: đủ 36 nguyên tố của bốn hàng đầu, cộng vài nguyên tố quen thuộc ở hàng 5 và 6.
 * Dùng chung cho web và mobile.
 */
export const PERIODIC_TABLE: TableElement[] = [
  row(1, 'H', 'Hydrogen', 1, 1, 'nonmetal', { note: 'Có trong nước và mọi sinh vật' }),
  row(2, 'He', 'Helium', 18, 1, 'noble-gas', { note: 'Khí bơm bóng bay' }),
  row(3, 'Li', 'Lithium', 1, 2, 'metal', { note: 'Pin điện thoại' }),
  row(4, 'Be', 'Beryllium', 2, 2, 'metal'),
  row(5, 'B', 'Boron', 13, 2, 'nonmetal'),
  row(6, 'C', 'Carbon', 14, 2, 'nonmetal', { note: 'Than, ruột bút chì, kim cương' }),
  row(7, 'N', 'Nitrogen', 15, 2, 'nonmetal', {
    vi: 'nitơ',
    note: 'Chiếm gần bốn phần năm không khí',
  }),
  row(8, 'O', 'Oxygen', 16, 2, 'nonmetal', { note: 'Khí bạn hít thở' }),
  row(9, 'F', 'Fluorine', 17, 2, 'nonmetal', { note: 'Có trong kem đánh răng' }),
  row(10, 'Ne', 'Neon', 18, 2, 'noble-gas', { note: 'Biển hiệu phát sáng đỏ cam' }),
  row(11, 'Na', 'Sodium', 1, 3, 'metal', { vi: 'natri', note: 'Có trong muối ăn' }),
  row(12, 'Mg', 'Magnesium', 2, 3, 'metal', { note: 'Pháo bông cháy sáng trắng' }),
  row(13, 'Al', 'Aluminium', 13, 3, 'metal', { vi: 'nhôm', note: 'Vỏ lon, giấy bạc gói đồ ăn' }),
  row(14, 'Si', 'Silicon', 14, 3, 'nonmetal', { note: 'Cát và chip điện thoại' }),
  row(15, 'P', 'Phosphorus', 15, 3, 'nonmetal', { note: 'Vỏ bao diêm' }),
  row(16, 'S', 'Sulfur', 16, 3, 'nonmetal', {
    vi: 'lưu huỳnh',
    note: 'Chất bột màu vàng trong pháo, diêm',
  }),
  row(17, 'Cl', 'Chlorine', 17, 3, 'nonmetal', { note: 'Khử trùng nước hồ bơi' }),
  row(18, 'Ar', 'Argon', 18, 3, 'noble-gas', { note: 'Khí trong bóng đèn sợi đốt' }),
  row(19, 'K', 'Potassium', 1, 4, 'metal', { vi: 'kali', note: 'Có nhiều trong chuối' }),
  row(20, 'Ca', 'Calcium', 2, 4, 'metal', { note: 'Xương, răng, vỏ trứng' }),
  row(21, 'Sc', 'Scandium', 3, 4, 'metal'),
  row(22, 'Ti', 'Titanium', 4, 4, 'metal', { note: 'Gọng kính, khớp nhân tạo' }),
  row(23, 'V', 'Vanadium', 5, 4, 'metal'),
  row(24, 'Cr', 'Chromium', 6, 4, 'metal', { note: 'Lớp mạ sáng bóng' }),
  row(25, 'Mn', 'Manganese', 7, 4, 'metal', { note: 'Pin tiểu' }),
  row(26, 'Fe', 'Iron', 8, 4, 'metal', { vi: 'sắt', note: 'Cây đinh, cây cầu, khung xe' }),
  row(27, 'Co', 'Cobalt', 9, 4, 'metal', { note: 'Pin sạc' }),
  row(28, 'Ni', 'Nickel', 10, 4, 'metal', { note: 'Đồng xu' }),
  row(29, 'Cu', 'Copper', 11, 4, 'metal', { vi: 'đồng', note: 'Lõi dây điện' }),
  row(30, 'Zn', 'Zinc', 12, 4, 'metal', { vi: 'kẽm', note: 'Vỏ pin, tôn mạ kẽm' }),
  row(31, 'Ga', 'Gallium', 13, 4, 'metal'),
  row(32, 'Ge', 'Germanium', 14, 4, 'metal'),
  row(33, 'As', 'Arsenic', 15, 4, 'nonmetal'),
  row(34, 'Se', 'Selenium', 16, 4, 'nonmetal'),
  row(35, 'Br', 'Bromine', 17, 4, 'nonmetal'),
  row(36, 'Kr', 'Krypton', 18, 4, 'noble-gas'),
  row(47, 'Ag', 'Silver', 11, 5, 'metal', { vi: 'bạc', note: 'Trang sức, mặt sau của gương' }),
  row(53, 'I', 'Iodine', 17, 5, 'nonmetal', { note: 'Muối i-ốt' }),
  row(79, 'Au', 'Gold', 11, 6, 'metal', { vi: 'vàng', note: 'Nhẫn cưới, vàng miếng' }),
  row(80, 'Hg', 'Mercury', 12, 6, 'metal', { vi: 'thuỷ ngân', note: 'Nhiệt kế kiểu cũ' }),
  row(82, 'Pb', 'Lead', 14, 6, 'metal', { vi: 'chì', note: 'Ắc quy xe máy' }),
]

export const CATEGORY_LABEL: Record<ElementCategory, string> = {
  metal: 'Kim loại',
  nonmetal: 'Phi kim',
  'noble-gas': 'Khí hiếm',
}

/** Màu ô theo nhóm chất. */
export const CATEGORY_COLOR: Record<ElementCategory, string> = {
  metal: '#FFD58A',
  nonmetal: '#9BE3B4',
  'noble-gas': '#9FD4F7',
}

export function tableElementLabel(e: Pick<TableElement, 'name' | 'vi'>): string {
  return e.vi ? `${e.name} (${e.vi})` : e.name
}
