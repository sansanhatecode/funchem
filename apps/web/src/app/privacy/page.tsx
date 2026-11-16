import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Chính sách riêng tư' }

export default function PrivacyPage() {
  return (
    <LegalPage title="Chính sách riêng tư" updated="16/11/2026">
      <section>
        <h2>Chúng tôi lưu những gì</h2>
        <ul>
          <li>Địa chỉ email, nếu bạn tạo tài khoản. Khách học thử không cần email.</li>
          <li>Tên và ảnh đại diện từ Google hoặc Apple, nếu bạn đăng nhập bằng các dịch vụ đó.</li>
          <li>Biệt danh bạn tự đặt, mục tiêu mỗi ngày và múi giờ.</li>
          <li>
            Tiến độ học: bài đã làm, câu trả lời, điểm, XP, chuỗi ngày, huy hiệu, bộ sưu tập phân
            tử.
          </li>
          <li>Thông tin kỹ thuật của phiên đăng nhập: địa chỉ IP và loại trình duyệt.</li>
        </ul>
      </section>
      <section>
        <h2>Chúng tôi dùng dữ liệu để làm gì</h2>
        <ul>
          <li>Giữ tiến độ của bạn trên mọi thiết bị.</li>
          <li>Chọn câu ôn tập phù hợp với những chỗ bạn hay sai.</li>
          <li>Xem câu hỏi nào nhiều người sai để sửa bài học cho dễ hiểu hơn.</li>
          <li>Hiện bảng xếp hạng tuần.</li>
        </ul>
        <p>Chúng tôi không bán dữ liệu và không dùng dữ liệu để quảng cáo.</p>
      </section>
      <section>
        <h2>Người khác thấy gì về bạn</h2>
        <p>
          Bảng xếp hạng chỉ hiện biệt danh bạn tự đặt và số XP trong tuần. Nếu bạn chưa đặt biệt
          danh, bảng hiện “Bạn học” kèm vài ký tự. Email và tên thật không bao giờ hiện cho người
          khác. Khách chưa đăng ký không có tên trên bảng.
        </p>
      </section>
      <section>
        <h2>Bên thứ ba</h2>
        <ul>
          <li>
            Dữ liệu được lưu trên máy chủ cơ sở dữ liệu và máy chủ ứng dụng do nhà cung cấp hạ tầng
            vận hành.
          </li>
          <li>Email chứa mã đăng nhập được gửi qua một dịch vụ gửi thư.</li>
          <li>Nếu bạn đăng nhập bằng Google hoặc Apple, các bên đó biết bạn dùng FunChem.</li>
        </ul>
      </section>
      <section>
        <h2>Quyền của bạn</h2>
        <ul>
          <li>Sửa biệt danh và mục tiêu trong trang Hồ sơ.</li>
          <li>
            Xoá tài khoản bất cứ lúc nào trong trang Hồ sơ. Toàn bộ dữ liệu học tập bị xoá ngay và
            không khôi phục được.
          </li>
        </ul>
      </section>
      <section>
        <h2>Tuổi của người học</h2>
        <p>
          FunChem dành cho người từ 13 tuổi trở lên. Nếu bạn dưới 13 tuổi, hãy học cùng bố mẹ hoặc
          thầy cô và đừng tự tạo tài khoản.
        </p>
      </section>
    </LegalPage>
  )
}
