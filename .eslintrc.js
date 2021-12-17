module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    React: true,
    JSX: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'off',
      { extensions: ['.js', '.ts', '.tsx', '.jsx'] },
    ],
    'no-unused-vars': ['warn'],
    'react/display-name': ['warn'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
