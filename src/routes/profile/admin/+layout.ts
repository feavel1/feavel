import { capitalizeFirstLetter } from '$lib/utils/helpers';

export const load = async ({ parent }: any) => {
	const { applicationStatus, supabase, session, userdata } = await parent();

	const { data: studios, error: studioErr } = await supabase
		.from('studios')
		.select('id, user_id, name, description, salary_expectation, status')
		.eq('user_id', session.user.id)
		.single();

	const { data: services, error: serviceErr } = await supabase
		.from('services')
		.select('id, name, description, highlights, price, status, enabled, cover_url')
		.eq('created_by', studios.id);

	const { data: serviceCategory, error: tagSugestionsError } = await supabase
		.from('services_category')
		.select('category_name');

	const { data: ordered_services, error: service_error } = await supabase
		.from('digital_purchase')
		.select(
			`id, created_at, service_id(id, name, cover_url, highlights), price, payment_method, payment_status`
		)
		.eq('service_id.created_by', studios.id);

	let serCatSer = serviceCategory.map((t: { category_name: string }) => ({
		label: capitalizeFirstLetter(t.category_name),
		value: t.category_name
	}));

	return {
		applicationStatus,
		services,
		serCatSer,
		studios,
		userdata,
		ordered_services
	};
};
