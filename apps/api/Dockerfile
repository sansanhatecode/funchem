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

FROM node:24-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /out ./
COPY --from=build /repo/packages/db/drizzle ./drizzle
EXPOSE 4000
CMD ["node", "dist/index.js"]
