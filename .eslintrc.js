
module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
  },

  env: {
    browser: true,
  },

  extends: [
    'plugin:vue/recommended',
    'standard',
  ],

  plugins: [
    'vue'
  ],

  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
