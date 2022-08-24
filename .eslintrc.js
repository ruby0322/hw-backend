module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 'no-console': 'off',
    'linebreak-style': ['error', 'unix'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    // 'import/resolver': {
    //   typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    // },
  },
};
