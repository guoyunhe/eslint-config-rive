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
    // YOU MUST put typescript before node (see https://github.com/import-js/eslint-plugin-import/issues/2225#issuecomment-923516582)
    'import/resolver': {
      typescript: {},
      node: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  ignorePatterns: ['build', 'coverage', 'dist', 'lib', 'node_modules', '.rive'],
};
