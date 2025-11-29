import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

// PRETTIER imports
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  globalIgnores(['dist']),

  // MAIN ESLint config
  {
    files: ['**/*.{js,jsx}'],

    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,

      // PRETTIER last me rakho (very important)
      prettierConfig,
    ],

    plugins: {
      prettier: prettierPlugin,
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    rules: {
      // Tumhara existing rule
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Prettier ko ESLint error bana do
      'prettier/prettier': 'error',
    },
  },
]);
