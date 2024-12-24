import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#F8F6ED",
				"accent-primary": "#57245C",
				"accent-secondary": "#3F4C3E",
				"accent-alternative": "#94A985",
			},
			backgroundImage: {
				pool: "url('/images/image_pool_2.jpg')",
			},
		},
	},
	plugins: [],
} satisfies Config;
