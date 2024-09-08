import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactLint from 'eslint-plugin-react';
import tanstack from '@tanstack/eslint-plugin-query';
import prettier from 'eslint-config-prettier';

/**
 * 기본구성 : eslint(recommended), typescript-eslint(recommended), reactHooks(recomended), reactRefresh
 * 추가 : react(recommended), react-query(recommended), prettier(rule 충돌 제거)
 */

const baseConfig = tseslint.config(
  { ignores: ['dist', '**/*.d.ts'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: reactLint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@tanstack/query': tanstack,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactLint.configs.recommended.rules,
      ...tanstack.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
);

// eslint-config-prettier 설정 추가
const integratedConfig = [...baseConfig, prettier];

export default integratedConfig;
