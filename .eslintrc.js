module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
  },
  parserOptions: {
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
  },
}