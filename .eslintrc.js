module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'viqtor-plugin',
  ],
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-deprecated': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, onlyAttribute: [''] },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    'viqtor-plugin/path-checker': ['error', { alias: '@' }],
    'viqtor-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testingFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'viqtor-plugin/layer-imports': [
      'error',
      { alias: '@', ignoreImportPatterns: ['**/StoreProvider', '**/testing'] },
    ],
    '@typescript-eslint/consistent-type-imports': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
