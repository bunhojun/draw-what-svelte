module.exports = {
	webpackFinal: async  (config) => {
		const svelteLoader = config.module.rules.find(
			(r) => r.loader && r.loader.includes("svelte-loader"),
		)
		svelteLoader.options.preprocess = require("svelte-preprocess")({})
		return config
	},
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-svelte-csf",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/svelte",
	svelteOptions: {
		preprocess: import("../svelte.config.js").preprocess,
	},
	features: {
		interactionsDebugger: true,
	},
};
