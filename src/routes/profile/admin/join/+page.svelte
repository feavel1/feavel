<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { LucideCheckCheck } from 'lucide-svelte';

	export let data;

	let { supabase, session, studio } = data;
	$: ({ session, supabase, studio } = data);

	console.log(studio);
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	let profileForm: HTMLFormElement;
</script>

{#if studio == null}
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
			</dl>
			<div class="mt-8 flex">
				<button type="submit" class="btn variant-filled">
					{loading ? 'Loading...' : 'Apply'}
				</button>
			</div>
		</form>
	</div>
{:else if studio.status == 'applied'}
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
{:else if studio.status == 'blocked'}
	Sorry, you are blocked. plese contact the manager
{:else if studio.status == 'approved'}
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
