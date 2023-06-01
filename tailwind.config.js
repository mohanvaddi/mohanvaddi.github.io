/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#0f172a',
				primary: '#34D399'
			},
			fontFamily: {
				montserrat: ['Montserrat'],
				inter: ['Inter'],
				'roboto-mono': ['Roboto Mono']
			}
		}
	},
	plugins: []
};
