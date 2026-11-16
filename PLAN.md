# FunChem — Kế hoạch xây dựng (bản chờ duyệt)

> Web học hoá học cho người mới bắt đầu, theo mô hình Duolingo: bài học ngắn, hình ảnh sinh động, phân tử và phản ứng được "hình hoá" và gắn với đời sống. Nội dung chia theo Unit để theo dõi tiến độ.

---

## 1. Tầm nhìn sản phẩm

**Người dùng mục tiêu:** người chưa biết gì (hoặc đã quên hết) về hoá học, học bằng tiếng Việt, học trên điện thoại hoặc máy tính, mỗi lần 5–10 phút.

**Ba nguyên tắc thiết kế nội dung**

1. **Nhìn trước, gọi tên sau.** Mỗi khái niệm xuất hiện dưới dạng hình ảnh/hoạt hình trước, rồi mới đến thuật ngữ và công thức.
2. **Luôn có "ngoài đời là gì".** Mỗi phân tử, mỗi phản ứng đều gắn với một vật hoặc hiện tượng quen thuộc (nước, muối ăn, gỉ sắt, bánh nở, giấm + baking soda...).
3. **Làm, không đọc.** Người học thao tác: ghép nguyên tử thành phân tử, kéo hệ số để cân bằng phản ứng, nối cặp, sắp xếp... thay vì đọc đoạn văn dài.

---

## 2. Trải nghiệm chính (giống Duolingo)

| Màn hình                                          | Mô tả                                                                                                                                                                 |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bản đồ học tập** (`/learn`)                     | Đường đi uốn lượn qua các Unit. Mỗi Unit một màu, chứa 4–6 nút bài học. Nút khoá / mở / hoàn thành (vương miện). Cuối Unit là **Checkpoint** để mở Unit tiếp theo.    |
| **Trình chơi bài học** (`/learn/[unit]/[lesson]`) | Thanh tiến độ trên cùng, 8–12 bài tập liên tiếp, phản hồi đúng/sai ngay lập tức với giải thích ngắn + hình minh hoạ. Màn hình kết thúc hiện XP, streak, độ chính xác. |
| **Bộ sưu tập phân tử** (`/molecules`)             | Kiểu "Pokédex": mỗi phân tử đã học được mở khoá, xem mô hình, công thức, nơi gặp trong đời sống. Tạo động lực sưu tầm.                                                |
| **Hồ sơ** (`/profile`)                            | Tổng XP, streak, lịch học, huy hiệu theo Unit, khái niệm còn yếu.                                                                                                     |
| **Trang giới thiệu** (`/`)                        | Landing ngắn, nút "Bắt đầu học" vào thẳng bài 1 (không bắt đăng nhập).                                                                                                |

**Gamification (MVP):** XP mỗi bài, streak theo ngày, mục tiêu ngày (10/20/30 XP), huy hiệu hoàn thành Unit. **Không dùng hệ thống "tim/mạng"** ở MVP vì gây nản cho người mới; có thể bật sau.

**Ôn tập:** sau mỗi Unit có nút "Ôn tập" tự chọn bài tập từ các khái niệm người dùng hay sai (spaced repetition đơn giản).

---

## 3. Hệ thống "hình hoá" (điểm khác biệt)

### 3.1 Bộ render phân tử 2D (SVG)

- Mô hình bóng–que 2D, nguyên tử là hình tròn màu theo quy ước CPK (H trắng, O đỏ, C xám đen, N xanh dương, Na tím, Cl xanh lá, S vàng...), có ký hiệu bên trong.
- Phân tử được khai báo bằng dữ liệu (danh sách nguyên tử + liên kết + toạ độ), render bằng component `<Molecule />`. Thêm phân tử mới = thêm dữ liệu, không viết code mới.
- Hoạt ảnh: nguyên tử "bắt tay" khi tạo liên kết, rung nhẹ khi ở trạng thái khí, xếp mạng tinh thể khi ở thể rắn.
- Chọn 2D thay vì 3D vì dễ hiểu hơn cho người mới và nhẹ cho điện thoại. 3D (3Dmol.js) để giai đoạn sau như tính năng "xem 3D".

### 3.2 Bộ hoạt hình phản ứng

Mỗi phản ứng là một timeline 4 bước, dựng từ dữ liệu `Reaction`:

1. Chất phản ứng xuất hiện (đếm số nguyên tử từng loại ở dưới).
2. Liên kết đứt, nguyên tử tách ra.
3. Nguyên tử sắp xếp lại, liên kết mới hình thành.
4. Sản phẩm xuất hiện, bộ đếm chứng minh "số nguyên tử không đổi" (bảo toàn khối lượng).

Bên cạnh luôn có khung **"Ngoài đời"**: hình minh hoạ hiện tượng (chiếc đinh gỉ, bánh phồng lên, nến cháy) và 1–2 câu giải thích.

### 3.3 Minh hoạ đời sống

- Phong cách phẳng, tươi sáng, bo tròn, thống nhất một bảng màu.
- Nguồn: SVG tự dựng cho phân tử/phản ứng (component), ảnh minh hoạ cảnh đời sống tạo bằng AI theo một style prompt chung rồi lưu trong `public/illustrations/`.
- Linh vật: một nhân vật dạng cốc thí nghiệm/nguyên tử để dẫn chuyện và chúc mừng.

---

## 4. Chương trình học (8 Unit)

| #   | Unit                              | Nội dung cốt lõi                                                                                                 | Gắn với đời sống                               |
| --- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1   | **Mọi thứ được làm từ gì?**       | Nguyên tử, nguyên tố, ký hiệu, bảng tuần hoàn (chỉ 20 nguyên tố đầu + vài nguyên tố quen thuộc)                  | Vàng, sắt, oxy trong không khí, than           |
| 2   | **Nguyên tử bắt tay nhau**        | Phân tử, hợp chất, liên kết cộng hoá trị vs ion (minh hoạ "chia sẻ" vs "cho–nhận"), đọc công thức H₂O, CO₂, NaCl | Nước, muối ăn, khí ga, đường                   |
| 3   | **Rắn, lỏng, khí**                | Trạng thái vật chất, nóng chảy/bay hơi, hoà tan, dung dịch, biến đổi vật lý vs hoá học                           | Đá tan, nước sôi, pha đường vào trà            |
| 4   | **Phản ứng hoá học đầu tiên**     | Chất phản ứng → sản phẩm, dấu hiệu phản ứng, bảo toàn khối lượng, cân bằng phương trình đơn giản                 | Gỉ sắt, nến cháy, giấm + baking soda           |
| 5   | **Chua và xà phòng: Axit – Bazơ** | pH, chất chỉ thị, trung hoà                                                                                      | Chanh, xà phòng, thuốc đau dạ dày, bắp cải tím |
| 6   | **Hoá học trong bếp**             | Bột nở sinh CO₂, caramel hoá, phản ứng Maillard, lên men                                                         | Bánh nở, thịt nướng vàng, sữa chua             |
| 7   | **Hoá học quanh nhà**             | Oxi hoá – khử cơ bản, pin, chất tẩy, polymer/nhựa                                                                | Pin điện thoại, nước tẩy, chai nhựa            |
| 8   | **Hoá học trong cơ thể**          | Hô hấp tế bào, tiêu hoá, đường/đạm/béo, nước và muối khoáng                                                      | Thở, ăn, uống nước điện giải                   |

**MVP làm trọn Unit 1–4.** Unit 5–8 làm ở giai đoạn sau khi khung đã ổn.

Mỗi Unit: 4–6 bài học + 1 Checkpoint. Mỗi bài học: 1 thẻ "Khám phá" (hoạt hình + câu chuyện) + 8–12 bài tập.

---

## 5. Các dạng bài tập

| Dạng                | Mô tả                                                                   | Ưu tiên     |
| ------------------- | ----------------------------------------------------------------------- | ----------- |
| Trắc nghiệm có hình | Chọn 1 trong 3–4 đáp án, đáp án là hình/phân tử                         | MVP         |
| Nối cặp             | Phân tử ↔ tên ↔ vật ngoài đời                                           | MVP         |
| Ghép phân tử        | Kéo nguyên tử vào khung để tạo H₂O, CO₂...                              | MVP         |
| Cân bằng phản ứng   | Chạm để thêm phân tử hai vế, bộ đếm nguyên tử tự cập nhật, đúng khi cân | MVP         |
| Điền chỗ trống      | Hoàn thành công thức / phương trình                                     | Giai đoạn 2 |
| Phân loại           | Kéo thẻ vào nhóm (axit/bazơ, nguyên tố/hợp chất)                        | Giai đoạn 2 |
| Sắp xếp thứ tự      | Các bước của một hiện tượng (nến cháy, bánh nở)                         | Giai đoạn 2 |
| Đúng/Sai tình huống | Thẻ chuyện đời sống, chọn đúng/sai + giải thích                         | Giai đoạn 2 |

---

## 6. Kiến trúc kỹ thuật

**Định hướng:** sản phẩm lâu dài, có web và app điện thoại, có tài khoản học sinh. Vì vậy backend là một dịch vụ **độc lập** ngay từ đầu (không nằm trong Next.js), còn web và mobile chỉ là hai giao diện cùng gọi một API và dùng chung lõi nghiệp vụ.

### 6.1 Sơ đồ tổng thể

```
┌─────────────┐   ┌──────────────┐
│ apps/web    │   │ apps/mobile  │
│ Next.js     │   │ Expo (RN)    │
└──────┬──────┘   └──────┬───────┘
       │  HTTPS / JSON   │
       └────────┬────────┘
         ┌──────▼──────┐
         │ apps/api    │  Hono trên Node.js
         │ + Better Auth│
         └──────┬──────┘
         ┌──────▼──────┐
         │ PostgreSQL  │  schema do mình sở hữu (Drizzle migrations)
         └─────────────┘
```

### 6.2 Monorepo (pnpm workspaces + Turborepo)

| Gói                   | Chứa gì                                                                                                   | Phụ thuộc                                          | Ghi chú                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------- |
| `packages/core`       | Luật chấm điểm từng dạng bài, tính XP, streak theo múi giờ, điều kiện mở khoá, kiểm tra cân bằng phản ứng | TypeScript thuần                                   | Không biết gì về web, mobile hay database. Test kỹ nhất.                    |
| `packages/content`    | Unit, bài học, bài tập, phân tử, phản ứng dạng TypeScript + Zod schema                                    | Zod                                                | Dùng chung cho web, mobile và API (API dùng để chấm lại).                   |
| `packages/db`         | Schema Postgres, migrations, truy vấn                                                                     | Drizzle ORM                                        | Nguồn sự thật duy nhất về dữ liệu người dùng.                               |
| `packages/api-client` | Client gọi API có kiểu, sinh từ định nghĩa route của Hono                                                 | Hono RPC                                           | Web và mobile import cùng một client, đổi API là lỗi compile ngay.          |
| `packages/chem-ui`    | Định nghĩa toạ độ, màu CPK, timeline hoạt hình phản ứng ở dạng dữ liệu                                    | TypeScript thuần                                   | Web render bằng SVG, mobile render bằng react-native-svg, cùng một dữ liệu. |
| `apps/api`            | Hono + Better Auth, deploy riêng                                                                          | Hono, Better Auth, Drizzle                         | Backend thật sự của sản phẩm.                                               |
| `apps/web`            | Next.js 16, giao diện web, landing                                                                        | Next.js, Tailwind v4, Framer Motion, GSAP, dnd-kit | Không chứa logic nghiệp vụ, chỉ gọi `api-client`.                           |
| `apps/mobile`         | Expo + Expo Router, iOS và Android                                                                        | Expo, Reanimated, react-native-svg                 | Giai đoạn 3.                                                                |

### 6.3 Backend: `apps/api`

| Thành phần           | Lựa chọn                                                 | Lý do                                                                                                                                                                                          |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework            | **Hono** chạy trên Node.js                               | Nhỏ, nhanh, chạy được mọi runtime, có RPC sinh client có kiểu                                                                                                                                  |
| Xác thực             | **Better Auth**                                          | Một thư viện phục vụ cả web (cookie) và mobile (token trong Secure Store). Có sẵn plugin ẩn danh, Google, Apple, email OTP. Tài khoản lưu trong Postgres của mình, không phụ thuộc bên thứ ba. |
| Database             | **PostgreSQL**                                           | Thuê ở Neon hoặc Supabase lúc đầu (miễn phí), chuyển đi được vì schema và migrations do mình giữ                                                                                               |
| ORM                  | **Drizzle**                                              | Nhẹ, SQL rõ ràng, migrations có kiểm soát                                                                                                                                                      |
| Kiểm tra dữ liệu vào | Zod ở mọi endpoint                                       |                                                                                                                                                                                                |
| Deploy               | Container Docker trên **Fly.io** hoặc **Railway**        | Một lệnh deploy, có thể tự host sau                                                                                                                                                            |
| Việc nền             | Cron trong API cho reset streak, tính bảng xếp hạng tuần | Chưa cần hàng đợi riêng                                                                                                                                                                        |
| Giám sát             | Sentry + log có cấu trúc (pino)                          | Biết lỗi trước khi học sinh báo                                                                                                                                                                |

**Nguyên tắc:** client gửi câu trả lời, **server chấm lại bằng `packages/core`** rồi mới cộng XP. Client không bao giờ tự quyết định điểm.

### 6.4 Xác thực và luồng tài khoản

Cách đăng nhập hỗ trợ:

- **Google** (web + Android + iOS)
- **Apple** (bắt buộc trên iOS khi đã có đăng nhập xã hội)
- **Email + mã OTP** (không cần mật khẩu, hợp người mới và học sinh)
- **Khách ẩn danh:** vào học ngay không cần tài khoản. Better Auth tạo user ẩn danh, tiến độ lưu server từ bài đầu tiên. Khi học sinh đăng ký, tài khoản ẩn danh được **nâng cấp** thành tài khoản thật, không mất gì. Đây là cách Duolingo giữ người dùng mới.

Phiên đăng nhập: web dùng cookie HttpOnly; mobile dùng bearer token lưu trong `expo-secure-store`. Cùng một API, Better Auth tự phân biệt.

Dữ liệu học sinh: cần trang Điều khoản và Chính sách riêng tư, nút xoá tài khoản (Apple yêu cầu), xác định độ tuổi nếu nhắm học sinh dưới 13 tuổi.

### 6.5 Schema database ban đầu

```
users, sessions, accounts, verifications    -- do Better Auth quản lý

profiles
  user_id PK → users, display_name, avatar, timezone, daily_goal_xp,
  locale, created_at

lesson_attempts            -- mỗi lần làm bài, không ghi đè
  id, user_id, lesson_id, score, xp_earned, duration_sec,
  answers jsonb, completed_at

user_lessons               -- trạng thái tốt nhất của từng bài
  user_id, lesson_id PK, best_score, crowns, first_completed_at, last_completed_at

user_stats                 -- cập nhật sau mỗi attempt
  user_id PK, xp_total, streak_current, streak_longest,
  last_active_date, freeze_count

user_molecules             -- bộ sưu tập
  user_id, molecule_id PK, unlocked_at

user_badges
  user_id, badge_id PK, earned_at

concept_strength           -- cho ôn tập
  user_id, concept_id PK, strength 0..1, last_reviewed_at, next_review_at

xp_events                  -- nguồn cho bảng xếp hạng tuần
  id, user_id, amount, source, created_at
```

Nội dung bài học (Unit, Lesson, Molecule, Reaction) giai đoạn 1–2 nằm trong `packages/content`, được version theo git. Bảng `content_releases` ghi phiên bản nội dung mà mỗi attempt dùng, để sau này chuyển nội dung vào database mà không mất lịch sử.

### 6.6 Web: `apps/web`

Next.js 15 chỉ làm giao diện và landing. Hoạt hình phân tử bằng SVG + Framer Motion, hoạt hình phản ứng bằng GSAP timeline, kéo thả bằng dnd-kit. Trạng thái tạm trong bài học bằng Zustand; dữ liệu server bằng TanStack Query gọi `api-client`. Deploy Vercel.

### 6.7 Mobile: `apps/mobile`

Expo + Expo Router, dùng lại `core`, `content`, `api-client`, `chem-ui`. Hoạt hình bằng Reanimated + react-native-svg từ cùng dữ liệu toạ độ với web. Phát hành qua EAS Build lên App Store và Google Play. Làm sau khi web đã có học sinh thật và nội dung Unit 1–4 ổn định.

Phương án thay thế đã cân nhắc: dùng Expo cho cả web (một codebase). Không chọn vì web Duolingo-like cần hoạt hình và kéo thả tinh tế, làm bằng công nghệ web tốt hơn; và landing cần SEO.

### 6.8 Cấu trúc thư mục

```
funchem/
  apps/
    api/          # Hono + Better Auth
    web/          # Next.js
    mobile/       # Expo (giai đoạn 3)
  packages/
    core/         # luật chấm điểm, XP, streak
    content/      # units, molecules, reactions + Zod
    db/           # Drizzle schema + migrations
    api-client/   # client có kiểu
    chem-ui/      # dữ liệu hình hoá dùng chung
  turbo.json
  pnpm-workspace.yaml
```

---

## 7. Lộ trình thực hiện

### Giai đoạn 0 — Nền móng (≈ 3–4 ngày)

- Monorepo pnpm + Turborepo, ESLint, Prettier, Vitest, CI GitHub Actions.
- `packages/content`: Zod schema cho Unit / Lesson / Exercise / Molecule / Reaction.
- `packages/core`: hàm chấm 4 dạng bài MVP, tính XP, streak theo múi giờ, kèm test.
- `packages/db`: schema ở mục 6.5, migration đầu tiên, Postgres trên Neon.
- `apps/api`: Hono + Better Auth (ẩn danh, Google, email OTP), endpoint `POST /attempts`, `GET /me/progress`. Deploy lên Fly.io.
- `apps/web`: scaffold Next.js + Tailwind, design tokens (màu từng Unit, font Be Vietnam Pro, bo góc lớn), component nền, màn đăng nhập.

### Giai đoạn 1 — MVP có tài khoản (≈ 3 tuần)

- `<Atom />`, `<Molecule />` render từ dữ liệu `chem-ui`.
- `<ReactionPlayer />` 4 bước + bộ đếm nguyên tử; 2 phản ứng mẫu (gỉ sắt, giấm + baking soda).
- Bản đồ học tập, Checkpoint, trình chơi bài học, 4 dạng bài tập MVP, màn kết quả.
- Luồng khách ẩn danh → đăng ký giữ nguyên tiến độ.
- Nội dung đầy đủ **Unit 1 và 2**.
- XP, streak, mục tiêu ngày tính ở server; bộ sưu tập phân tử.
- Responsive mobile-first, deploy, mời 5–10 học sinh dùng thử.

### Giai đoạn 2 — Hoàn thiện nền tảng web (≈ 3 tuần)

- 4 dạng bài tập còn lại, **Unit 3 và 4**, thêm 4–6 phản ứng hoạt hình.
- Ôn tập theo `concept_strength`.
- Âm thanh, hiệu ứng, onboarding, trang hồ sơ, huy hiệu.
- Bảng xếp hạng tuần từ `xp_events`.
- Sentry, phân tích sự kiện học (bài nào bỏ dở, câu nào sai nhiều).
- Điều khoản, chính sách riêng tư, xoá tài khoản.
- Accessibility cơ bản, PWA cài lên màn hình chính.

### Giai đoạn 3 — App điện thoại (≈ 4–6 tuần)

- `apps/mobile` với Expo Router, đăng nhập Google/Apple/OTP qua cùng API.
- Port bản đồ, trình chơi bài học, render phân tử bằng react-native-svg + Reanimated.
- Thông báo đẩy nhắc streak (Expo Notifications).
- Phát hành TestFlight và Google Play nội bộ, rồi công khai.

### Giai đoạn 4 — Mở rộng nội dung và vận hành

- **Unit 5–8.**
- Chuyển nội dung vào Postgres + trang quản trị để soạn bài không cần code.
- Xem phân tử 3D (tuỳ chọn).
- Gói trả phí nếu cần (Stripe trên web, RevenueCat trên mobile).

---

## 8. Các quyết định đã chốt và còn mở

**Đã chốt (theo trao đổi):**

- Sản phẩm lâu dài, có web và app điện thoại, có tài khoản.
- Backend độc lập bằng **Hono** (đã chốt sau khi so sánh với Fastify, NestJS, tRPC) + Better Auth + Postgres, lõi nghiệp vụ tách khỏi framework.
- Lý do chọn Hono: client có kiểu sinh tự động cho web và mobile, xây trên Web Standards nên không khoá vào runtime, Better Auth hỗ trợ chính thức.
- Khách ẩn danh học ngay, đăng ký sau giữ nguyên tiến độ.

**Đã chốt ngày 2026-11-16 (theo đề xuất):**

1. Postgres thuê ở **Neon**.
2. API deploy lên **Fly.io** bằng Docker.
3. Đăng nhập email bằng **mã OTP** không mật khẩu, kèm Google và Apple.
4. Phân tử **2D SVG** cho MVP, 3D để giai đoạn 4.
5. **Không dùng "tim/mạng"**, chỉ XP + streak + mục tiêu ngày.
6. Thứ tự Unit giữ nguyên 1 → 8.
7. Minh hoạ đời sống **tạo bằng AI** theo một style thống nhất, SVG phân tử/phản ứng tự dựng.
8. Học sinh mục tiêu **từ 13 tuổi trở lên** (giả định; nếu mở cho dưới 13 cần thêm xác nhận phụ huynh và rà soát pháp lý).

Giai đoạn 0 bắt đầu ngay sau khi chốt.

---

## 9. Trạng thái

### Giai đoạn 0 — hoàn thành ngày 2026-11-16

- [x] Monorepo pnpm + Turborepo, ESLint, Prettier, Vitest, CI GitHub Actions có Postgres.
- [x] `packages/content`: Zod schema cho 8 dạng bài, phân tử, phản ứng, unit; registry kiểm tra tham chiếu chéo, công thức và cân bằng phản ứng. Nội dung mẫu: 8 phân tử, 3 phản ứng, Unit 1 gồm 2 bài + checkpoint.
- [x] `packages/core`: chấm cả 8 dạng bài, XP, streak theo múi giờ, luật mở khoá, độ mạnh khái niệm.
- [x] `packages/db`: 13 bảng, migration đầu tiên.
- [x] `apps/api`: Hono + Better Auth (ẩn danh, email OTP, Google/Apple theo cấu hình, bearer cho mobile), `POST /attempts`, `GET /me`, `GET /me/progress`, `GET /me/attempts`. Dockerfile và `fly.toml`.
- [x] `packages/api-client`: client có kiểu.
- [x] `apps/web`: Next.js 16, design tokens, Button / Card / ProgressBar, `MoleculeView` vẽ phân tử từ dữ liệu, trang chủ, đăng nhập OTP, trang học đọc tiến độ thật.
- [x] Đã chạy thử trong trình duyệt với Postgres thật: khách học → nộp bài → đăng ký OTP → tiến độ giữ nguyên.

Khác với kế hoạch ban đầu:

- Dùng **Next.js 16** (bản hiện hành) thay vì 15.
- Chấm đủ 8 dạng bài ngay ở `core`, vì phần chấm rẻ; giao diện 4 dạng sau vẫn ở Giai đoạn 2.
- `packages/chem-ui` chưa tách riêng: bảng nguyên tố và toạ độ phân tử đang ở `content`. Sẽ tách khi làm hoạt hình phản ứng ở Giai đoạn 1.

Chưa làm, cần tài khoản của bạn:

- [ ] Tạo database trên Neon, app trên Fly.io, project trên Vercel và deploy.
- [ ] Google OAuth client, Apple Sign In, Resend API key để gửi OTP thật.
- [ ] Tên miền.

### Giai đoạn 1 — phần code và nội dung hoàn thành ngày 2026-11-16

- [x] Trình chơi bài học: thẻ Khám phá, phản hồi đúng/sai kèm giải thích và đáp án, màn kết quả do server chấm (độ chính xác, XP, chuỗi ngày, phân tử mới), phím Enter làm nút chính.
- [x] Giao diện cho **cả 8 dạng bài**, thao tác bằng chạm.
- [x] `ReactionPlayer`: hoạt hình 4 bước, mỗi nguyên tử di chuyển từ chất phản ứng sang sản phẩm, có bộ đếm nguyên tử. 3 phản ứng: metan cháy, sắt gỉ, tạo thành nước.
- [x] `packages/chem-ui`: bố cục phân tử và phản ứng dạng dữ liệu, sẵn cho mobile.
- [x] Bản đồ học tập dạng đường đi, khoá/mở/hoàn thành, checkpoint cần đúng 80%.
- [x] Trang bộ sưu tập phân tử với thẻ chi tiết.
- [x] Nội dung **Unit 1 và Unit 2**: 10 bài học + 2 bài kiểm tra, 123 bài tập, 17 phân tử, 22 khái niệm.
- [x] Test trình duyệt (Playwright) trong repo và CI: 18 test, gồm một test chơi hết toàn bộ chương trình qua giao diện.
- [x] Trang `/dev/exercises` để thử nhanh mọi dạng bài và hoạt hình (chỉ khi dev).

Khác với kế hoạch:

- Làm giao diện đủ 8 dạng bài ngay (kế hoạch: 4), vì nội dung Unit 1–2 cần các dạng đó.
- Tương tác bằng **chạm** thay vì kéo thả, nên chưa dùng dnd-kit. Chạm dễ dùng trên điện thoại và chuyển sang React Native không đổi logic.
- Hoạt hình dùng CSS transition trên SVG, chưa cần Framer Motion hay GSAP.
- Câu trả lời sai chưa được hỏi lại ở cuối bài như Duolingo.

Chưa làm, cần bạn:

- [ ] Deploy (Neon, Fly.io, Vercel) và mời 5–10 học sinh dùng thử. `apps/api/Dockerfile` chưa được build thử vì máy không chạy Docker.

Quyết định còn mở:

1. ~~Tên nguyên tố~~ Đã chuyển sang tên quốc tế của chương trình 2018 (xem mục bên dưới).
2. **XP khi làm lại bài cũ:** hiện được đủ XP mỗi lần. Nên giảm (ví dụ còn một nửa) trước khi có bảng xếp hạng.
3. **Hình minh hoạ còn thiếu** (đề xuất cho Giai đoạn 2): bảng tuần hoàn tương tác, hình bên trong nguyên tử (proton, nơtron, electron), mạng tinh thể muối. Ba bài hiện phải dạy bằng chữ.
4. Phân tử `co` và `fe2o3` chưa được mở khoá ở Unit 1–2, để dành cho Unit 4.

### Làm lại phần hình ảnh — ngày 2026-11-16

Phản hồi sau khi xem bản Giai đoạn 1: chỉ có mô hình nguyên tử, thiếu hình đời sống, trông như sách giáo khoa. Đã làm lại theo nguyên tắc **hiện tượng trước, nguyên tử sau**:

- [x] 18 cảnh đời sống vẽ bằng SVG động (đinh gỉ dưới mưa, ly nước đá, bếp biogas, nhẫn vàng, lon nước ngọt, tên lửa, lọ muối...). Mỗi phân tử và phản ứng bắt buộc gắn với một cảnh; test của `packages/content` chặn nội dung thiếu cảnh.
- [x] Hiệu ứng phóng to (`ZoomScene`): bấm kính lúp, máy quay lao vào một điểm trên cảnh và thế giới hạt mở ra từ đó.
- [x] Thế giới hạt (`ParticleView`): nhiều phân tử chuyển động đúng với trạng thái của chất. Khí bay tự do, lỏng chen sát, kim loại xếp khít, muối là mạng ion dương âm xen kẽ.
- [x] Phản ứng mở đầu bằng hiện tượng (đinh gỉ, bếp cháy), phóng to mới thấy 4 bước ở cấp nguyên tử.
- [x] Linh vật Bình (chiếc bình tam giác) với 5 biểu cảm: chào ở bản đồ, cổ vũ khi đúng, an ủi khi sai, ăn mừng khi xong bài.
- [x] Bản đồ học có ảnh hiện tượng cạnh từng bài; bộ sưu tập hiện cảnh đời sống kèm phân tử; bài tập nối cặp dùng hình thay chữ; pháo giấy ở màn kết quả.
- [x] Trang chủ làm lại quanh cảnh phóng to được và phản ứng đinh gỉ.
- [x] Bộ icon Phosphor thay cho emoji.

Ghi chú:

- Cảnh vẽ tay bằng SVG trong code thay vì dùng công cụ tạo ảnh AI. Lý do: hình cần chuyển động và phóng to đúng điểm; công cụ tạo vector của Figma có sẵn nhưng tốn credit trả phí của tài khoản.
- Cảnh hiện là component web. Khi làm app điện thoại cần chuyển sang react-native-svg (cùng toạ độ, cùng bảng màu).
- Chưa có giao diện tối (dark mode).

### Tên gọi theo chương trình 2018 và trang chủ mới — ngày 2026-11-16

- [x] **Tên nguyên tố và hợp chất theo chuẩn quốc tế của Chương trình giáo dục phổ thông 2018.** Hydrogen, oxygen, carbon, nitrogen, sodium, potassium, chlorine, helium, calcium; carbon dioxide, methane, ammonia, ethanol, sodium chloride, sodium fluoride, carbon monoxide, iron(III) oxide; neutron thay cho nơtron.
- [x] Quy ước hiển thị: tên quốc tế đứng trước, tên quen dùng tiếng Việt trong ngoặc, ví dụ "Iron (sắt)", "Sodium (natri)", "Sodium chloride (muối ăn)". Đồ vật và vật liệu vẫn gọi theo đời thường: đinh sắt, dây đồng, nhẫn vàng.
- [x] Nguồn tên nằm ở một chỗ: `ELEMENTS` (`name`, `vi`) và `name` / `commonName` của phân tử trong `packages/content`. Giao diện dùng `elementLabel` và `moleculeLabel`.
- [x] Trang chủ làm lại quanh thông điệp "hoá học ở khắp mọi nơi, thú vị và không khó": khu chạm thử 6 đồ vật để phóng to, dải cảnh chạy ngang, dòng thời gian một ngày toàn hoá học, phản ứng đinh gỉ, 4 câu hỏi "vì sao", và một bài tập thật làm được ngay trên trang.

Cần người có chuyên môn giảng dạy rà lại: cách viết tên trong câu văn (viết thường, chỗ nào kèm tên tiếng Việt) nên khớp với bộ sách giáo khoa mà học sinh mục tiêu đang dùng.

### Tiếp theo: Giai đoạn 2

Unit 3–4 (có bài cân bằng phản ứng), ôn tập theo khái niệm yếu, hỏi lại câu sai, âm thanh, trang hồ sơ, bảng xếp hạng tuần, ba loại hình minh hoạ ở trên, pháp lý và phân tích học tập.
