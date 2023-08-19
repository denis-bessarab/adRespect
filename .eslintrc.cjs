module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'plugins': ["@html-eslint"],
  'extends': 'google',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
        '*.html'
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
      'parser': '@html-eslint/parser',
      'extends': ["plugin:@html-eslint/recommended"],
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'require-jsdoc': 0,
    'no-unused-vars': 0,
    'max-len': 0,
  },
};
