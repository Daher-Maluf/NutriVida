/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4DAA57', // Verde principal
				secondary: '#76B947', // Verde secundario
				tertiary: '#A1C181', // Verde claro
				accent: '#F0E0C5', // Tono tierra claro
				neutral: '#F8F8F8', // Blanco roto para fondos
				dark: '#333333', // Color oscuro para textos
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}
