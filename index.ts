import js from "@eslint/js";
import ts from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import type { Linter } from "eslint";

export default [
  js.configs.recommended,
  ts.configs.recommendedTypeChecked as any,
  prettier,
  {
    name: 'rive',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
] satisfies Linter.Config[];
