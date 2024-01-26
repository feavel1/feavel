export const load = async ({ parent }: any) => {
	const { applicationStatus } = await parent();

	return {
		applicationStatus
	};
};
