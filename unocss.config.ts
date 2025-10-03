import { defineConfig, presetIcons, presetWind4, transformerDirectives } from 'unocss';

export default defineConfig({
	theme: {},
	presets: [
		presetWind4(),
		presetIcons({
			cdn: 'https://esm.sh/',
		}),
	],
	transformers: [transformerDirectives()],
});
