import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ parent }) => {
	const { services, serviceCategory } = await parent();

	return {
		services,
		serviceCategory
	};
};
