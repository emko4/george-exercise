import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

// The rules the project was written under came from Create React App and
// Airbnb's configuration, neither of which exists for the current ESLint.
// These are their maintained relatives: ESLint's own recommended rules,
// React's, the hooks', accessibility — with the three choices the project
// made, and the three of Airbnb's rules its code switches off in places.
export default [
  { ignores: ['site/', 'build/', 'node_modules/'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      // process.env.NODE_ENV is filled in by the build.
      globals: { ...globals.browser, process: 'readonly' },
    },
    plugins: { import: importPlugin },
    settings: { react: { version: 'detect' } },
    rules: {
      'import/prefer-default-export': 'error',
      'no-console': 'warn',
      'no-underscore-dangle': 'error',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': ['warn', { exceptions: ['InnerComponent'] }],
      'jsx-a11y/click-events-have-key-events': 'off',
    },
  },
  {
    files: ['src/**/*.spec.{js,jsx}', 'src/setupTests.js'],
    languageOptions: { globals: { ...globals.vitest } },
  },
];
