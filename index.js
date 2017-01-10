module.exports = {
  extends: ['standard'],
  rules: {
    'space-before-function-paren': 'off',
    'no-return-assign': 'off',
    'maxlen': [100, { 'ignoreStrings': true, 'ignoreRegExpLiterals': true }],
    semi: ['error', 'always']
  }
};
