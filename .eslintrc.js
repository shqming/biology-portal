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
  globals: {
    require: true,
    process: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'no-unused-vars': 'warn',
    'max-len': ['warn', 100],
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    "global-require": 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
  },
};
