export const load = async ({ parent }: any) => {
	const { studio } = await parent();

	return {
		studio
	};
};
