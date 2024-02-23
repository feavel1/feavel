import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ parent }) => {
	const { serviceCategory, studios } = await parent();

	return {
		serviceCategory
	};
};
