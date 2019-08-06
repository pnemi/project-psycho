module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  extends: [
    'standard',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
}
