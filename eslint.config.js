import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Regras que o react-hooks v7 adicionou para o React Compiler. Este projeto
      // NÃO usa o compiler, então elas disparam em padrões válidos escritos à mão
      // (mutação de DOM em handlers, hidratar estado de cache em effect, memoização
      // manual). Ficam como 'warn' — visíveis se um dia adotarmos o compiler, mas
      // sem quebrar o lint. As regras que pegam bug de verdade (rules-of-hooks e
      // exhaustive-deps) seguem intactas na config recommended.
      'react-hooks/immutability': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
      'react-hooks/use-memo': 'warn',
      'react-hooks/refs': 'warn',
    },
  },
  // scripts/ são ferramentas de linha de comando (Node), não código do app:
  // rodam com `node script.js` e usam globals do Node (process, etc.).
  {
    files: ['scripts/**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
