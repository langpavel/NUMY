
module.exports = {
  extends: 'airbnb',
  globals: {
    __DEV__: true,
    window: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'jsx-a11y/html-has-lang': 'warn',
    'no-prototype-builtins': 'warn',
    'no-param-reassign': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    // Recommend not to leave any console.log in your code
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'trace'],
      },
    ],
  },
};
