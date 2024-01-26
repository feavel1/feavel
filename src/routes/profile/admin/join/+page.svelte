<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { LucideCheckCheck } from 'lucide-svelte';

	export let data;

	let { supabase, session, applicationStatus } = data;
	$: ({ session, supabase, applicationStatus } = data);

	console.log(applicationStatus);
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	let profileForm: HTMLFormElement;
</script>

{#if applicationStatus == null}
	<div>
		<div class="px-4 sm:px-0">
			<h3 class="text-base font-semibold leading-7">Applicant Information</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
				Personal details and application.
			</p>
		</div>
		<form
			action="?/createStudio"
			method="POST"
			bind:this={profileForm}
			use:enhance={handleSubmit}
			class="mt-6 border-t border-gray-100"
		>
			<dl class="divide-y divide-gray-100">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6">Studio name</dt>
					<input
						value="123"
						type="text"
						name="studio_name"
						id="sudio_name"
						placeholder="Best ever studio"
						class="input"
					/>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6">Contact phone</dt>
					<input
						value="123"
						name="phone"
						id="phone"
						autocomplete="mobile"
						placeholder="+8613088886666"
						class="input"
					/>
				</div>

				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6">Salary expectation</dt>
					<input
						value="123"
						type="text"
						name="salary_expectation"
						id="salary_expectation"
						placeholder="9999¥"
						class="input"
					/>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6">Description</dt>
					<input
						value="123"
						type="text"
						name="description"
						id="description"
						placeholder="This will be shown to users"
						class="input"
					/>
				</div>

				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6">Withdraw method</dt>

					<label class="label">
						<span>Select</span>
						<select name="withdraw_method" id="withdraw_method" class="select">
							<option value="alipay">Alipay</option>
							<option value="wechat">Wechat</option>
						</select>
					</label>
				</div>

				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6">Withdraw account</dt>

					<input
						name="withdraw_number"
						id="withdraw_number"
						placeholder="phone or id"
						value="123"
						class="input"
					/>
				</div>

				<!-- attachments -->

				<!-- <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
				<dt class="text-sm font-medium leading-6 ">Attachments (less than 5mb)</dt>
				<dd class="mt-2 text-sm  sm:col-span-2 sm:mt-0">
					<ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
						<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
							<div class="flex w-0 flex-1 items-center">
								<svg
									class="h-5 w-5 flex-shrink-0 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
										clip-rule="evenodd"
									/>
								</svg>
								<div class="ml-4 flex min-w-0 flex-1 gap-2">
									<span class="truncate font-medium">resume_back_end_developer.pdf</span>
									<span class="flex-shrink-0 text-gray-400">2.4mb</span>
								</div>
							</div>
							<div class="ml-4 flex-shrink-0">
								<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
							</div>
						</li>
						<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
							<div class="flex w-0 flex-1 items-center">
								<svg
									class="h-5 w-5 flex-shrink-0 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
										clip-rule="evenodd"
									/>
								</svg>
								<div class="ml-4 flex min-w-0 flex-1 gap-2">
									<span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
									<span class="flex-shrink-0 text-gray-400">4.5mb</span>
								</div>
							</div>
							<div class="ml-4 flex-shrink-0">
								<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
							</div>
						</li>
					</ul>
				</dd>
			</div> -->
			</dl>
			<div class="mt-8 flex">
				<button type="submit" class="btn variant-filled">
					{loading ? 'Loading...' : 'Apply'}
				</button>
			</div>
		</form>
	</div>
{:else if applicationStatus.status == 'applied'}
	<div class="rounded-md bg-green-50 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<LucideCheckCheck class="stroke-success-800" />
			</div>
			<div class="ml-3">
				<p class="font-medium text-success-800">Successfully uploaded. Plese wait for review</p>
			</div>
		</div>
	</div>
{:else if applicationStatus.status == 'blocked'}
	Sorry, you are blocked. plese contact the manager
{:else if applicationStatus.status == 'approved'}
	<div class="rounded-md bg-green-50 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<LucideCheckCheck class="stroke-success-800" />
			</div>
			<div class="ml-3">
				<p class="font-medium text-success-800">
					Successfully approved. Plese start making services
				</p>
			</div>
		</div>
	</div>
{/if}
