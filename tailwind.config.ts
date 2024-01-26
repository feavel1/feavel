/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './my-custom-theme';
import plugin from 'tailwindcss/plugin';

import { join } from 'path';

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',

		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				white: 'var(--novel-white)',
				stone: {
					50: 'var(--novel-stone-50)',
					100: 'var(--novel-stone-100)',
					200: 'var(--novel-stone-200)',
					300: 'var(--novel-stone-300)',
					400: 'var(--novel-stone-400)',
					500: 'var(--novel-stone-500)',
					600: 'var(--novel-stone-600)',
					700: 'var(--novel-stone-700)',
					800: 'var(--novel-stone-800)',
					900: 'var(--novel-stone-900)'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),

		plugin(function ({ addVariant, matchUtilities, theme }) {
			addVariant('hocus', ['&:hover', '&:focus']);

			matchUtilities(
				{
					square: (value) => ({
						width: value,
						height: value
					})
				},
				{ values: theme('spacing') }
			);
		}),
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		}),
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
		}
	]
} satisfies Config;
