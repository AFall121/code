module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'prefer-const': 'off',
    'max-len': ["error", { "ignoreStrings": true }],
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};
