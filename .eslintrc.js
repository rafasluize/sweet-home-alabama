module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'prettier', '@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    semi: 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 0,
    'prettier/prettier': 'error',
    'import/extensions': 0,
    'react/require-default-props': 0,
  },
};
