module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "always"
      }
    ],
  },
}
