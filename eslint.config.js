import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['.next/**', 'dist/**', 'out/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: { curly: ['error', 'all'], eqeqeq: ['error', 'always'] },
  },
]
