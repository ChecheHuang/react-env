module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app'
  ],
  plugins: ['prettier', 'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}