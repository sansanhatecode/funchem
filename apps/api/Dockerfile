# syntax=docker/dockerfile:1
FROM node:24-alpine AS base
RUN corepack enable && corepack prepare pnpm@12.15.0 --activate
WORKDIR /repo

FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json apps/api/
COPY packages/content/package.json packages/content/
COPY packages/core/package.json packages/core/
COPY packages/db/package.json packages/db/
RUN pnpm install --frozen-lockfile --filter @funchem/api...

FROM deps AS build
COPY tsconfig.base.json ./
COPY packages/content packages/content
COPY packages/core packages/core
COPY packages/db packages/db
COPY apps/api apps/api
RUN pnpm --filter @funchem/api... build
RUN pnpm --filter @funchem/api --prod deploy /out
# Better Auth khai báo next, react, vitest, drizzle-kit… là peer tuỳ chọn, và pnpm cài luôn chúng vì
# các gói này có trong workspace. API không nhập gói nào trong số đó, nên xoá đi cho image nhẹ
# (thư mục ứng dụng từ khoảng 480 MB còn khoảng 55 MB). Nếu API báo thiếu module sau khi nâng cấp thư viện, xem lại danh sách này.
RUN cd /out/node_modules/.pnpm && rm -rf \
      next@* @next+* styled-jsx@* @swc+* caniuse-lite@* \
      react@* react-dom@* \
      @img+* sharp@* lightningcss* \
      playwright@* playwright-core@* @playwright+* \
      vitest@* @vitest+* vite@* rolldown@* @rolldown+* \
      esbuild@* @esbuild+* tsx@* jiti@* typescript@* \
      drizzle-kit@* @types+*

FROM node:24-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /out ./
COPY --from=build /repo/packages/db/drizzle ./drizzle
EXPOSE 4000
CMD ["node", "dist/index.js"]
