module.exports = {
  extends: ['../../.eslintrc.js', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'no-use-before-define': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
