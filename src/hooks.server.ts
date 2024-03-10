import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { getTextDirection } from '$lib/i18n/server';
import { sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';

export const handle: Handle = async ({ event, resolve }) => {
	// Initialize Supabase client and attach it to event.locals
	event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) => {
				event.cookies.set(key, value, options);
			},
			remove: (key, options) => {
				event.cookies.delete(key, options);
			}
		}
	});

	// Define a helper function to get session
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	const lang: AvailableLanguageTag =
		(event.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	const textDirection = getTextDirection(lang);

	// Call the original resolve function and customize response headers
	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		},
		transformPageChunk({ done, html }) {
			if (done) {
				return html.replace('%lang%', lang).replace('%textDir%', textDirection);
			}
		}
	});
};
