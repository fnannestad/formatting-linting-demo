import globals from "globals"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import stylistic from "@stylistic/eslint-plugin"
import react from "eslint-plugin-react"
import preferFunctionComponent from "eslint-plugin-react-prefer-function-component/config"

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
			preferFunctionComponent.configs.recommended,
			eslintConfigPrettier
		],
		settings: {
			react: {
				version: "detect"
			}
		},
		rules: {
			"spaced-comment": ["error", "always", { markers: ["/"] }],
			"no-unneeded-ternary": "error",
			"prefer-const": "error",
			"max-params": ["error", 5],
			"no-duplicate-imports": "error",
			"no-self-compare": "error",
			"no-template-curly-in-string": "error",
			"no-useless-assignment": "error",
			"curly": "error",
			"default-case-last": "error",
			"default-param-last": "error",
			"eqeqeq": "error",
			"no-unneeded-ternary": "error",
			"prefer-template": "error",
			"react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
			"react/jsx-fragments": ["error", "syntax"],
			"react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
			"react/jsx-newline": ["error", { prevent: true }],
			"react/self-closing-comp": "error"
		}
	}
)
