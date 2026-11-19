import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng',
  description: 'Điều khoản sử dụng FunChem, công cụ học hoá học cho người mới bắt đầu.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage title="Điều khoản sử dụng" updated="16/11/2026">
      <section>
        <h2>FunChem là gì</h2>
        <p>
          FunChem là công cụ học hoá học cho người mới bắt đầu. Nội dung nhằm giúp bạn hiểu khái
          niệm, không thay thế sách giáo khoa, giáo viên hay hướng dẫn an toàn phòng thí nghiệm.
        </p>
      </section>
      <section>
        <h2>An toàn</h2>
        <p>
          Các hiện tượng trong bài học chỉ để quan sát và hiểu. Đừng tự làm thí nghiệm với lửa, hoá
          chất hay khí đốt khi không có người lớn hoặc giáo viên hướng dẫn.
        </p>
      </section>
      <section>
        <h2>Tài khoản</h2>
        <ul>
          <li>Bạn có thể học thử không cần tài khoản. Tạo tài khoản để giữ tiến độ.</li>
          <li>Bạn chịu trách nhiệm với email dùng để đăng nhập.</li>
          <li>Biệt danh không được chứa lời lẽ xúc phạm hoặc mạo danh người khác.</li>
        </ul>
      </section>
      <section>
        <h2>Sử dụng công bằng</h2>
        <p>
          Đừng dùng công cụ tự động để cày điểm hoặc can thiệp vào bảng xếp hạng. Chúng tôi có thể
          đặt lại điểm hoặc khoá tài khoản vi phạm.
        </p>
      </section>
      <section>
        <h2>Nội dung</h2>
        <p>
          Bài học, hình minh hoạ và linh vật thuộc về FunChem. Bạn được dùng cho việc học cá nhân và
          giảng dạy trên lớp.
        </p>
      </section>
      <section>
        <h2>Thay đổi</h2>
        <p>
          Khi điều khoản thay đổi đáng kể, chúng tôi sẽ thông báo trong ứng dụng trước khi áp dụng.
        </p>
      </section>
    </LegalPage>
  )
}
