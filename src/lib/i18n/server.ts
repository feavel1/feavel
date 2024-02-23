// ./src/lib/i18n/server.js
import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';
import {
	sourceLanguageTag,
	availableLanguageTags,
	type AvailableLanguageTag
} from '$paraglide/runtime';

import * as runtime from '$paraglide/runtime';

export const i18n = createI18n(runtime);

export function translatePath(path: string, lang: AvailableLanguageTag) {
	path = getPathWithoutLang(path);

	//Don't prefix with the source language tag, that's the default
	if (lang === sourceLanguageTag) return path;
	//Otherwise, prefix with the language tag
	else return `/${lang}${path}`;
}

/**
 * Removes the language tag from the path, if it exists.
 */
function getPathWithoutLang(path: string) {
	const [_, maybeLang, ...rest] = path.split('/');
	if (availableLanguageTags.includes(maybeLang as any)) return `/${rest.join('/')}`;
	else return path;
}

/**
 * Look up the text direction for a given locale.
 * You could use a Polyfill for `Intl.Locale.prototype.getTextInfo` instead.
 */
export function getTextDirection(locale: AvailableLanguageTag) {
	const directions: Record<AvailableLanguageTag, 'ltr' | 'rtl'> = {
		en: 'ltr',
		zh: 'ltr'
	};

	return directions[locale];
}
