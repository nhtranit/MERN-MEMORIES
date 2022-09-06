module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': ['warn'],
    'react-hooks/exhaustive-deps': 'warn',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 0,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  // rules: {
  //   'react-hooks/exhaustive-deps': 'warn',
  //   'no-const-assign': 'warn',
  //   'no-this-before-super': 'warn',
  //   'no-unreachable': 'warn',
  //   'no-unused-vars': 'warn',
  //   'constructor-super': 'warn',
  //   'valid-typeof': 'warn',
  // },
  globals: {
    angular: true,
  },
};
