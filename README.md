# FunChem

Web và app học hoá học cho người mới bắt đầu, theo mô hình bài học ngắn kiểu Duolingo. Phân tử và phản ứng được hình hoá và gắn với đời sống. Kế hoạch đầy đủ ở [PLAN.md](PLAN.md).

## Cấu trúc

```
apps/
  api/          Hono + Better Auth. Backend độc lập, web và mobile cùng gọi.
  web/          Next.js 16 + Tailwind v4. Chỉ là giao diện.
packages/
  content/      Bài học, phân tử, phản ứng (TypeScript + Zod). Tự kiểm tra tham chiếu chéo.
  core/         Chấm điểm, XP, streak, luật mở khoá. TypeScript thuần, không framework.
  db/           Schema Postgres (Drizzle) + migrations.
  chem-ui/      Bố cục phân tử và hoạt hình phản ứng dạng dữ liệu, dùng chung web và mobile.
  api-client/   Client có kiểu sinh từ route của Hono, dùng chung web và mobile.
```

Nguyên tắc: logic nghiệp vụ nằm trong `packages/core`, không nằm trong Next.js hay Hono. Client gửi câu trả lời, server chấm lại rồi mới cộng XP.

## Chạy ở máy

Yêu cầu: Node 22+, pnpm 12, và Postgres 16 (Homebrew hoặc Docker).

```sh
pnpm install

# 1. Postgres — chọn một trong hai
# a) Homebrew
brew services start postgresql@16
createdb funchem_dev
#    DATABASE_URL=postgres://localhost:5432/funchem_dev
# b) Docker
pnpm db:up
#    DATABASE_URL=postgres://funchem:funchem@localhost:5432/funchem_dev

# 2. Biến môi trường
cp apps/api/.env.example apps/api/.env      # sửa DATABASE_URL, đặt BETTER_AUTH_SECRET (openssl rand -base64 32)
cp apps/web/.env.example apps/web/.env.local

# 3. Migration (đọc DATABASE_URL từ shell)
DATABASE_URL=postgres://localhost:5432/funchem_dev pnpm db:migrate

# 4. Build các gói dùng chung một lần, rồi chạy dev
pnpm build
pnpm dev                         # API ở http://localhost:4000, web ở http://localhost:3000
```

Mở http://localhost:3000 và bấm "Bắt đầu học".

Khi chưa đặt `RESEND_API_KEY`, mã OTP đăng nhập được in ra log của API (dòng có `"code"`) thay vì gửi email.

## Lệnh thường dùng

| Lệnh               | Việc                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| `pnpm test`        | Chạy toàn bộ test. Test tích hợp Postgres chỉ chạy khi có `TEST_DATABASE_URL`.                          |
| `pnpm typecheck`   | Kiểm tra kiểu mọi gói                                                                                   |
| `pnpm lint`        | ESLint                                                                                                  |
| `pnpm e2e`         | Test trình duyệt (Playwright). Cần `E2E_DATABASE_URL`. Chạy ở cổng 3100/4100 nên không đụng `pnpm dev`. |
| `pnpm db:generate` | Sinh migration mới sau khi sửa `packages/db/src/schema.ts`                                              |
| `pnpm db:migrate`  | Áp migration vào `DATABASE_URL`                                                                         |

Chạy test tích hợp:

```sh
DATABASE_URL=postgres://funchem:funchem@localhost:5432/funchem_test pnpm db:migrate
TEST_DATABASE_URL=postgres://funchem:funchem@localhost:5432/funchem_test pnpm test
```

Chạy test trình duyệt (lần đầu cần tạo database riêng):

```sh
createdb funchem_e2e
DATABASE_URL=postgres://localhost:5432/funchem_e2e pnpm db:migrate
E2E_DATABASE_URL=postgres://localhost:5432/funchem_e2e pnpm e2e
```

Các trang chỉ có khi dev, để xem nhanh:

- http://localhost:3000/dev/content: toàn bộ kiến thức và câu hỏi trên một trang, kèm đáp án và giải thích. Lọc theo Unit (`?unit=3`), ẩn đáp án (`?answers=0`), in hoặc lưu PDF để gửi người soát.
- http://localhost:3000/dev/scenes: mọi cảnh đời sống, bấm kính lúp để thử phóng to.
- http://localhost:3000/dev/exercises: mọi dạng bài tập và hoạt hình phản ứng.
- http://localhost:3000/dev/mascot: các biểu cảm của linh vật.
- http://localhost:3000/dev/visuals: bảng tuần hoàn, mô hình nguyên tử và ba trạng thái.

## Thêm nội dung

Mọi nội dung nằm trong `packages/content/src/data/`. Thêm phân tử vào `molecules/`, phản ứng vào `reactions/`, bài học vào `units/`. Khi import, registry tự kiểm tra:

- số nguyên tử vẽ ra khớp với công thức,
- phản ứng đã cân bằng với hệ số khai báo,
- mọi `moleculeId`, `reactionId`, `conceptId` đều tồn tại,
- mỗi Unit kết thúc bằng checkpoint.

Nội dung sai thì `pnpm test` báo lỗi kèm vị trí. Khi sửa bài đã phát hành, tăng `CONTENT_VERSION` trong `packages/content/src/registry.ts`.

## Thêm cảnh đời sống

Mỗi phân tử và phản ứng phải gắn với một cảnh ngoài đời (`illustration` trong ví dụ đời sống đầu tiên, hoặc trong `story` của phản ứng). Để thêm cảnh mới:

1. Thêm id vào `SCENE_IDS` trong `packages/content/src/schema/scene.ts`.
2. Vẽ cảnh trong `apps/web/src/components/scenes/art/<id>.tsx`, dùng khung và bảng màu ở `scenes/kit.tsx`.
3. Đăng ký vào `SCENES` trong `apps/web/src/components/scenes/index.tsx`, kèm mô tả và điểm phóng to. TypeScript báo lỗi cho tới khi cảnh được đăng ký.

## Đăng nhập

- Khách ẩn danh: vào `/learn` là có phiên, tiến độ lưu server ngay.
- Email + mã OTP 6 số, không mật khẩu.
- Google và Apple: bật khi đặt `GOOGLE_CLIENT_ID` / `APPLE_CLIENT_ID` ở API và `NEXT_PUBLIC_AUTH_GOOGLE=1` / `NEXT_PUBLIC_AUTH_APPLE=1` ở web.
- Khi khách đăng ký, toàn bộ tiến độ được chuyển sang tài khoản thật.

## Deploy

- **Database:** Neon. Đặt `DATABASE_URL`, chạy `pnpm db:migrate`.
- **API:** Fly.io, từ gốc repo:
  ```sh
  fly deploy --config apps/api/fly.toml --dockerfile apps/api/Dockerfile .
  fly secrets set DATABASE_URL=... BETTER_AUTH_SECRET=... API_URL=https://api.<domain> WEB_URL=https://<domain> COOKIE_DOMAIN=<domain>
  ```
- **Web:** Vercel, root directory `apps/web`, đặt `NEXT_PUBLIC_API_URL`.

Web và API nên cùng domain gốc (ví dụ `funchem.vn` và `api.funchem.vn`) để cookie đăng nhập dùng chung được.
