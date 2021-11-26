module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-confusing-v-for-v-if': 'warn',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'error',
    'vue/comma-dangle': 'warn',
    'vue/eqeqeq': 'error',
    'vue/match-component-file-name': 'warn',
    'vue/no-irregular-whitespace': 'warn',
    'vue/max-attributes-per-line': 'off'
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ]
}
