import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params, locals: { supabase } }) => {
	const { data: service, error: service_error } = await supabase
		.from('services')
		.select(
			`id, created_at, created_by(name), name, price, description, highlights, created_by, cover_url, services_category_rel(services_category(category_name))`
		)
		.eq('id', params.serviceId)
		.eq('status', 'approved')
		.eq('enabled', true)
		.single();

	if (service_error) {
		console.error(service_error);
		return { error: 'Failed to fetch service' };
	}

	if (!service) {
		return { error: 'Service not found' };
	}

	const transformedService = {
		...service,
		category_name: Array.isArray(service.services_category_rel)
			? service.services_category_rel.map((rel) => rel.services_category.category_name)
			: []
	};

	return { transformedService };
};
