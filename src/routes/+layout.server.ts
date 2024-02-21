import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ locals: { getSession } }) => {
	return {
		session: await getSession()
	};
};
