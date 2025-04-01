import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: { globals: globals.browser },
		plugins: { js },
		extends: ["js/recommended"]
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	stylistic.configs.recommended,
	eslintConfigPrettier
])
