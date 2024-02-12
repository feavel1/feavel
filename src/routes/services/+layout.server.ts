import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ locals: { supabase } }) => {
	try {
		const { data: services, error: service_error } = await supabase
			.from('services')
			.select(
				`id, created_at, created_by(name), name, price, description, highlights, created_by, cover_url, services_category_rel(services_category(category_name))`
			)
			.eq('status', 'approved')
			.eq('enabled', true);

		if (service_error) {
			return { error: 'Failed to fetch services' };
		}

		const transformedServices =
			services?.map(({ services_category_rel, ...rest }) => ({
				...rest,
				category_name: Array.isArray(services_category_rel)
					? services_category_rel.map((rel) => rel.services_category.category_name)
					: []
			})) || [];

		return { transformedServices };
	} catch (error) {
		console.error('An unexpected error occurred', error);
		return { error: 'Unexpected error occurred' };
	}
};
