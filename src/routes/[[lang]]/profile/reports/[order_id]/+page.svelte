<script lang="ts">
	import ChatAvatar from '$lib/components/ui/User/ChatAvatar.svelte';
	import * as m from '$paraglide/messages';

	export let data;
	let { supabase, session, userdata, digital_order } = data;
	$: ({ session, supabase, userdata, digital_order } = data);

	let service = digital_order.service_id;
	let currentMessage = '';

	console.log(digital_order);
</script>

<div class="">
	<div class="">
		<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
			<div class="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
				<h1 class="text-2xl font-bold tracking-tight sm:text-3xl">{m.reports()}</h1>
				<p class="mt-2 text-sm text-gray-500">
					Check the status of recent orders, manage returns, and discover similar products.
				</p>
			</div>
		</div>

		<div class="mt-16">
			<h2 class="sr-only">Recent orders</h2>
			<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
				<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0"></div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col gap-3 p-3 border-2 rounded-2xl">
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<ChatAvatar {supabase} uploadable={false} bind:url={userdata.avatar_url} size={14} />
		<div class="card p-4 variant-soft rounded-tl-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">Feavel</p>
				<small class="opacity-50">2022</small>
			</header>
			<p>Hello</p>
		</div>
	</div>

	<div class="grid grid-cols-[1fr_auto] gap-2">
		<div class="card p-4 rounded-tr-none space-y-2 variant-soft-secondary">
			<header class="flex justify-between items-center">
				<p class="font-bold">Feavel</p>
				<small class="opacity-50">2022</small>
			</header>
			<p>Hello</p>
		</div>
		<ChatAvatar {supabase} uploadable={false} bind:url={userdata.avatar_url} size={14} />
	</div>

	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
		<button class="input-group-shim">+</button>
		<textarea
			bind:value={currentMessage}
			class="bg-transparent border-0 ring-0"
			name="prompt"
			id="prompt"
			placeholder="Write a message..."
			rows="1"
		/>
		<button class="variant-filled-primary">Send</button>
	</div>
</div>
