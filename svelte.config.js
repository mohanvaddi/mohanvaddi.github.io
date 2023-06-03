import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const sassPath = `./src/`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		scss: {
			prependData: `@import '${sassPath}styles/app.scss';`
		}
	}),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$src: './src',
			$components: './src/components',
			$assets: './src/assets',
			$utils: './src/utils',
			$data: './src/_data',
			$lib: './src/lib'
		}
	}
};

export default config;
