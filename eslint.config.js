/* eslint-disable */
import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,

  {
    ignores: ['**/node_modules/', '**/dist/'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      semi: 'off',
      '@stylistic/semi': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'],
        },
      ],
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
      'object-curly-newline': 'off',
    },
  },
];
