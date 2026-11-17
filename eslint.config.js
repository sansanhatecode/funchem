import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '.claude/**',
      '**/.next/**',
      '**/.next-e2e/**',
      '**/.next-art/**',
      '**/test-results/**',
      '**/playwright-report/**',
      '**/.turbo/**',
      '**/node_modules/**',
      '**/drizzle/**',
      '**/next-env.d.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    // Mã chạy ở trình duyệt không được nhập cả kho nội dung: phải dùng `@funchem/content/lib`
    // và nhận dữ liệu do server cắt sẵn (apps/web/src/lib/content-slices.ts).
    files: [
      'apps/web/src/**/*.{ts,tsx}',
      'packages/core/src/**/*.ts',
      'packages/chem-ui/src/**/*.ts',
    ],
    ignores: [
      '**/*.test.ts',
      'apps/web/src/app/**/page.tsx',
      'apps/web/src/app/**/layout.tsx',
      'apps/web/src/app/**/route.ts',
      'apps/web/src/app/dev/**',
      'apps/web/src/lib/content-slices.ts',
      'apps/web/src/lib/lesson-scene.ts',
    ],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@funchem/content',
              message:
                'Nhập từ "@funchem/content/lib" (không kèm dữ liệu). Nội dung bài học do server cắt sẵn rồi truyền xuống.',
              allowTypeImports: true,
            },
            {
              name: '@funchem/content/testing',
              message: 'Nội dung fixture chỉ dùng trong test và trang dev.',
            },
          ],
        },
      ],
    },
  },
)
