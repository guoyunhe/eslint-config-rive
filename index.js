module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignorePatterns: ['.rive', 'build', 'coverage', 'dist', 'lib', 'node_modules'],
};
