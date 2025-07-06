import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'out/', 'generated/', 'prisma/'],
  },

  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'],
  }),
  {
    rules: {
      'prettier/prettier': ['error'],
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
