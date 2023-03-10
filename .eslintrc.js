module.exports = {
  extends: ['eslint-config-next', 'prettier'],
  ignorePatterns: ['*.d.ts'],
  settings: {
    next: {
      rootDir: ['./apps/*/', './packages/*/']
    }
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/jsx-curly-brace-presence': ['error', { 'props': 'always', 'children': 'never' }],
        '@typescript-eslint/no-floating-promises': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['off'],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'react/display-name': 'off',
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-wrap-multilines': [
          'error',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line'
          }
        ]
      }
    }
  ]
};
