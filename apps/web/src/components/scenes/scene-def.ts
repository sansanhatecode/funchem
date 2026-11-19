/** Thông tin nhẹ về một cảnh; phần vẽ (nặng) nằm trong các gói ở ./packs. */
export interface SceneMeta {
  /** mô tả cảnh cho trình đọc màn hình */
  label: string
  /** điểm sẽ phóng to vào, theo toạ độ khung 320x200 */
  hotspot: { x: number; y: number }
}
