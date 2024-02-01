import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ parent }: any) => {
	const { services, serviceCategory } = await parent();

	return {
		services,
		serviceCategory
	};
};
