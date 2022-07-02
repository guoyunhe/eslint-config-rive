module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx'],
    },
    'import/resolver': {
      node: {},
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  ignorePatterns: ['build', 'coverage', 'dist', 'lib', 'node_modules', '.rive'],
};
