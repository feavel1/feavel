import { error, fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createStudio: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			error(401, { message: 'Unauthorized' });
		}

		const fD = await request.formData();
		const userId = session.user.id;
		const studioName = fD.get('studio_name');
		const phone = fD.get('phone');
		const salaryExpectation = fD.get('salary_expectation') as string;
		const studioDescription = fD.get('description');
		const withdrawMethod = fD.get('withdraw_method');
		const withdrawNumber = fD.get('withdraw_number');

		const { data, error: createStudioErr } = await supabase
			.from('studios')
			.insert({
				user_id: userId,
				name: studioName,
				contact_phone: phone,
				salary_expectation: salaryExpectation,
				description: studioDescription,
				withdraw_method: withdrawMethod,
				withdraw_number: withdrawNumber
			})
			.select();

		if (createStudioErr) {
			console.log(createStudioErr);
			return fail(500, {
				supabaseErrorMessage: createStudioErr.message
			});
		}

		return {
			sucsess: true,
			studioData: data
		};
	}
};
