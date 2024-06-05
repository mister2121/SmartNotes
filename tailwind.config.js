/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/index.css"],
	theme: {
		colors: {
			"primary-400": "#080808",
			"primary-300": "#0d0d0d",
			"primary-200": "#737373",
			"primary-100": "#e7e7e7",
			"primary-50": "#f7f7f7",

			"secondary-300": "#017373",
			"secondary-200": "#048c80",
			"secondary-100": "#aad9d1",

			accent: "#efece6",

			"gradient-bg": "#017373",
		},
		extend: {
			backgroundImage: {
				gradient:
					"linear-gradient(25deg, rgba(1, 115, 115, 1) 0%, rgba(170, 217, 209, 1) 100%)",
			},
			fontFamily: {
				"be-vietnam-pro": ['"Be Vietnam Pro"', "sans-serif"],
				"dm-sans": ['"DM Sans"', "sans-serif"],
			},
		},
	},
	plugins: [],
}
