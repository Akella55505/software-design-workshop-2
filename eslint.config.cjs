const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...require('globals').node,
      },
    },
  },
  { ignores: ['**/*.cjs'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'warn',
    },
  },
];
