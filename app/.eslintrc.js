module.exports = {
  root: false,
  env: {
    node: true
  },
  plugins: ['vue'],
  extends: ['plugin:vue/essential', '@vue/standard'],
  globals: {
    APP: true,
    _hmt: true
  },
  rules: {
    'global-require': 0,
    indent: [2, 2, { SwitchCase: 2 }],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [0],
    'no-extra-semi': 2,
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': [1, { max: 2 }],
    'array-bracket-spacing': 2,
    'computed-property-spacing': 2,
    'eol-last': 2,
    'generator-star-spacing': 2,
    'max-depth': 2,
    'max-len': [2, 160, 2],
    'max-nested-callbacks': 2,
    'max-params': [2, 5],
    'no-mixed-operators': 0,
    'object-curly-spacing': 0,
    'standard/no-callback-literal': 0,
    'prefer-const': [
      2,
      {
        destructuring: 'all'
      }
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
