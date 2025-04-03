import globals from "globals"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import react from "eslint-plugin-react"
import preferFunctionComponent from "eslint-plugin-react-prefer-function-component/config"
import stylistic from "@stylistic/eslint-plugin"
import spellcheck from "eslint-plugin-spellcheck"

const spellcheckSkipWords = [
	"spellcheck",
	"globals",
	"tseslint",
	"dist",
	"ecma",
	"tsconfig",
	"plugins",
	"eqeqeq",
	"vite",
	"lang"
]

export default tseslint.config(
	{ ignores: ["dist"] },
	tseslint.configs.eslintRecommended,
	tseslint.configs.strictTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	stylistic.configs.recommended,
	...(react.configs.flat["recommended"] ? [react.configs.flat["recommended"]] : []),
	...(react.configs.flat["jsx-runtime"] ? [react.configs.flat["jsx-runtime"]] : []),
	reactHooks.configs["recommended-latest"],
	reactRefresh.configs.recommended,
	preferFunctionComponent.configs.recommended,
	eslintConfigPrettier,
	{
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
			stylistic,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			spellcheck
		},
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
			"no-useless-rename": "error",
			"no-nested-ternary": "error",
			"curly": "error",
			"default-case-last": "error",
			"default-param-last": "error",
			"eqeqeq": "error",
			"prefer-template": "error",
			"react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
			"react/jsx-fragments": ["error", "syntax"],
			"react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
			"react/jsx-newline": ["error", { prevent: true }],
			"react/self-closing-comp": "error",
			"spellcheck/spell-checker": [
				"error",
				{
					lang: "en_AU",
					minLength: 4,
					skipIfMatch: [
						// Ordinals, m (meters) and CSS (vw, vh)
						"(?<=[0-9])(?:st|nd|rd|th|m|vw|vh)"
					],
					skipWords: spellcheckSkipWords
				}
			]
		}
	}
)
