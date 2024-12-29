import type { Linter } from 'eslint';
import react from 'eslint-plugin-react';
import base from './base.js';

export default [
  ...base,
  react.configs.recommended,
  react.configs['jsx-runtime'],
  {
    name: 'rive/react',
  },
] satisfies Linter.Config[];
