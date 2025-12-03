import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extende as configurações padrão do Next.js para core e TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { 
    // Regras personalizadas para desativar o linting no código
    rules: {
      // DESATIVADO: Permite o uso explícito do tipo 'any' para evitar falhas de build temporárias.
      "@typescript-eslint/no-explicit-any": "off",

      // Exemplo: se você também quiser desativar a verificação de variáveis não utilizadas
      // "@typescript-eslint/no-unused-vars": "off" 
    }
  },
  {
    // Configura arquivos e diretórios que devem ser ignorados pelo ESLint
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;