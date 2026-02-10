import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      eslintReact.configs["recommended-typescript"],
      reactHooks.configs.flat.recommended,
      nextPlugin.configs["core-web-vitals"],
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        React: "readonly",
        JSX: "readonly",
      },
    },
  },
]);
