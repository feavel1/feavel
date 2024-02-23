import { throwRedirect } from '$lib/utils/helpers';

export const load = async ({ parent }: any) => {
	const { session } = await parent();
	if (session) {
		throwRedirect(302, '/profile');
	}
};
