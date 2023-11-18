/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/eslint-config-typescript'
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
