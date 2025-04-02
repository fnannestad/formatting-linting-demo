import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import stylistic from "@stylistic/eslint-plugin"
import react from "eslint-plugin-react"

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			react,
			"@stylistic": stylistic
		},
		extends: [
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			tseslint.configs.eslintRecommended,
			react.configs.flat.recommended,
			react.configs.flat["jsx-runtime"],
			reactRefresh.configs.recommended,
			reactHooks.configs["recommended-latest"],
			eslintConfigPrettier
		],
		settings: {
			react: {
				version: "detect"
			}
		}
	}
)
