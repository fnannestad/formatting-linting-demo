declare module "eslint-plugin-spellcheck" {
	import type { ESLint, Linter } from "eslint"

	const plugin: ESLint.Plugin & {
		configs: Record<string, { rules: Linter.RulesRecord }>
	}

	export = plugin
}
