import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ parent }) => {
	const { serviceCategory } = await parent();

	return {
		serviceCategory
	};
};
