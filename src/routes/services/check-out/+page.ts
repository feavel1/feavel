import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ parent }) => {
	const { transformedService } = await parent();

	return {
		transformedService
	};
};
