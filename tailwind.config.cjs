/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				keyboard: 'clamp(0.875rem, 0.7361rem + 0.6173vw, 1.5rem);',
				word: 'clamp(3rem, 2.3333rem + 2.9630vw, 6rem)',
			},
		},
	},
	plugins: [],
};
