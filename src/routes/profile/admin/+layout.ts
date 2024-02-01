export const load = async ({ parent }: any) => {
	const { applicationStatus, supabase, session, userdata } = await parent();

	const { data: studios, error: studioErr } = await supabase
		.from('studios')
		.select('name, description, salary_expectation, status')
		.eq('user_id', session.user.id)
		.single();

	const { data: services, error: serviceErr } = await supabase
		.from('services')
		.select('id, name, description, highlights, price, status, enabled, cover_url')
		.eq('created_by', session.user.id);

	const { data: serviceCategory, error: tagSugestionsError } = await supabase
		.from('services_category')
		.select('category_name');

	function capitalizeFirstLetter(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let serCatSer = serviceCategory.map((t: { category_name: string }) => ({
		label: capitalizeFirstLetter(t.category_name),
		value: t.category_name
	}));

	return {
		applicationStatus,
		services,
		serCatSer,
		studios,
		userdata
	};
};
