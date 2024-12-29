import react from 'eslint-plugin-react';
import ts from 'typescript-eslint';
import base from './base.js';

const config = ts.config(
  ...base,
  react.configs.recommended as any,
  react.configs['jsx-runtime'] as any,
  {
    name: 'rive/react',
  },
);

export default config;
