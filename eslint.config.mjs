import path from 'node:path';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

// Same check as eslint-plugin-filename-rules' kebab-case, which does not support ESLint 10.
const KEBAB_CASE_FILENAME = /^([a-z]+-)*[a-z]+(?:\..*)?$/;

const kebabCaseFilename = {
  meta: {
    type: 'layout',
    docs: { description: 'checks that filenames are kebab-case' },
    messages: { noMatch: "Filename '{{name}}' is not kebab-case." },
    schema: [],
  },
  create: (context) => ({
    Program: (node) => {
      const name = path.basename(context.filename);
      if (!KEBAB_CASE_FILENAME.test(name)) {
        context.report({ node, messageId: 'noMatch', data: { name } });
      }
    },
  }),
};

export default tseslint.config(
  {
    ignores: [ 'dist/', 'public/', '**/*.js', '**/*.mjs', '**/*.cjs' ],
  },
  {
    files: [ '**/*.ts' ],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.strict,
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      local: { rules: { 'kebab-case-filename': kebabCaseFilename } },
    },
    rules: {
      'no-console': 1,
      'quotes': [ 2, 'single', { avoidEscape: true } ],
      'comma-dangle': [ 'error', {
        arrays: 'always',
        objects: 'always',
        imports: 'never',
        exports: 'always',
        functions: 'never',
      } ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'object-curly-spacing': [ 'error', 'always' ],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-floating-promises': [ 'error', {
        allowForKnownSafeCalls: [
          { from: 'package', name: [ 'test' ], package: 'node:test' },
        ],
      } ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-for-of': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',
      'no-nested-ternary': 'error',
      'local/kebab-case-filename': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          filter: '__typename',
          format: null,
        },
        {
          selector: 'variable',
          types: [ 'function' ],
          format: [ 'camelCase', 'PascalCase' ],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          types: [ 'boolean', 'number', 'string', 'array' ],
          format: [ 'camelCase', 'UPPER_CASE' ],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: [ 'PascalCase' ],
        },
      ],
    },
  }
);
