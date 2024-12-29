import base from './index.js';

export default [
  base,
  {
    name: 'rive/react',
    extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
  },
];
