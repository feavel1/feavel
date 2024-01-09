import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }: any) => {
	const { session } = await parent();
	if (session) {
		throw redirect(302, '/profile');
	}
};
