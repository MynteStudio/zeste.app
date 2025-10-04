import 'virtual:uno.css';
import '../src/styles/reset.css';
import type { Preview } from '@storybook/vue3-vite';

const preview: Preview = {
	parameters: {
		layout: 'centered',
	},
};

export default preview;
