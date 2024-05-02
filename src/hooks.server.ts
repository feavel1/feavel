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
				event.cookies.set(key, value, { ...options, path: '/' });
			},
			remove: (key, options) => {
				event.cookies.delete(key, { ...options, path: '/' });
			}
		}
	});

	event.locals.safeGetSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		if (!session) {
			return { session: null, user: null };
		}

		const {
			data: { user },
			error
		} = await event.locals.supabase.auth.getUser();
		if (error) {
			// JWT validation has failed
			return { session: null, user: null };
		}

		return { session, user };
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
