<script lang="ts">
	// import { Ratings } from '@skeletonlabs/skeleton';
	// import { LucideStar, LucideStarHalf } from 'lucide-svelte';
	import Time from 'svelte-time';

	export let data;

	let { transformedService, supabase }: any = data;
	$: ({ transformedService, supabase } = data);

	let publicUrl: string;

	let tabState = 'FAQ';

	$: tabState;

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabase.storage.from('storage').download(path);
			if (error) {
				throw error;
			}
			const url = URL.createObjectURL(data);
			publicUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	$: if (transformedService?.cover_url) downloadImage(transformedService.cover_url);
</script>

<div class="">
	<div class="mx-auto px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<!-- Product -->
		<div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
			<!-- Product image -->
			<div class="lg:col-span-4 lg:row-end-1">
				<div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
					<img
						src={publicUrl}
						alt="Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles."
						class="object-cover object-center"
					/>
				</div>
			</div>

			<!-- Product details -->
			<div
				class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
			>
				<div class="flex flex-col-reverse">
					<div class="mt-4">
						<h1 class="text-2xl font-bold tracking-tight text-surface-900-50-token sm:text-3xl">
							{transformedService.name}
						</h1>

						<h2 id="information-heading" class="sr-only">Product information</h2>
						<p class="mt-2 text-sm text-secondary-700-200-token">
							<Time timestamp={transformedService.created_at} />
						</p>
					</div>
				</div>

				<div class=" mt-4 text-secondary-700-200-token">
					<h3 class="text-xl font-medium text-surface-900-50-token">Highlights</h3>
					<ul class="list mt-4">
						{#each transformedService.highlights as hl}
							<li>- {hl}</li>
						{/each}
					</ul>
				</div>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
					<button
						type="button"
						class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
						>Pay {transformedService.price} ¥</button
					>
					<button
						type="button"
						class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
						>Preview</button
					>
				</div>

				<div class="mt-10 border-t border-gray-200 pt-10">
					<h3 class="text-sm font-medium text-surface-900-50-token">Description</h3>
					<div class="whitespace-pre-line sm:mt-2">
						{transformedService.description}
					</div>
				</div>

				<div class="mt-10 border-t border-gray-200 pt-10">
					<h3 class="text-sm font-medium text-surface-900-50-token">License</h3>
					<p class="mt-4 text-sm text-secondary-700-200-token">
						For personal and professional use. You cannot resell or redistribute these icons in
						their original or modified state. <a
							href="/about/licence"
							class="font-medium text-indigo-600 hover:text-indigo-500">Read full license</a
						>
					</p>
				</div>

				<div class="mt-10 border-t border-gray-200 pt-10">
					<h3 class="text-sm font-medium text-surface-900-50-token">Share</h3>
					<ul role="list" class="mt-4 flex items-center space-x-6">
						<li>
							<a
								href="#"
								class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-secondary-700-200-token"
							>
								<span class="sr-only">Share on Facebook</span>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-secondary-700-200-token"
							>
								<span class="sr-only">Share on Instagram</span>
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-secondary-700-200-token"
							>
								<span class="sr-only">Share on Twitter</span>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path
										d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
				<div>
					<div class="border-b dark:border-gray-200 border-gray-700">
						<div class="-mb-px flex space-x-8" aria-orientation="horizontal" role="tablist">
							<!-- Selected: "border-indigo-600 text-indigo-600", Not Selected: "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800" -->
							<!-- <button
								id="tab-reviews"
								class="border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="tab-panel-reviews"
								role="tab"
								type="button">Customer Reviews</button
							> -->
							<button
								id="tab-faq"
								class="border-transparent hover:border-gray-300 hover:text-gray-400 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="tab-panel-faq"
								role="tab"
								on:click={() => {
									tabState = 'FAQ';
								}}
								type="button">FAQ</button
							>
							<button
								id="tab-license"
								class="border-transparent hover:border-gray-300 hover:text-gray-400 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="tab-panel-license"
								role="tab"
								on:click={() => {
									tabState = 'License';
								}}
								type="button">License</button
							>
						</div>
					</div>

					<!-- 'Customer Reviews' panel, show/hide based on tab state -->
					<!-- <div
						id="tab-panel-reviews"
						class="-mb-10"
						aria-labelledby="tab-reviews"
						role="tabpanel"
						tabindex="0"
					>
						<h3 class="sr-only">Customer Reviews</h3>

						<div class="flex space-x-4 text-sm text-secondary-700-200-token">
							<div class="flex-none py-10">
								<img
									src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
									alt=""
									class="h-10 w-10 rounded-full bg-gray-100"
								/>
							</div>
							<div class="py-10">
								<h3 class="font-medium text-surface-900-50-token">Emily Selman</h3>
								<p><time datetime="2021-07-16">July 16, 2021</time></p>

								<div class="mt-4 flex items-center">
							
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="sr-only">5 out of 5 stars</p>

								<div class="prose prose-sm mt-4 max-w-none text-secondary-700-200-token">
									<p>
										This icon pack is just what I need for my latest project. There's an icon for
										just about anything I could ever need. Love the playful look!
									</p>
								</div>
							</div>
						</div>
						<div class="flex space-x-4 text-sm text-secondary-700-200-token">
							<div class="flex-none py-10">
								<img
									src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
									alt=""
									class="h-10 w-10 rounded-full bg-gray-100"
								/>
							</div>
							<div class="py-10 border-t border-gray-200">
								<h3 class="font-medium text-surface-900-50-token">Hector Gibbons</h3>
								<p><time datetime="2021-07-12">July 12, 2021</time></p>

								<div class="mt-4 flex items-center">
									
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										class="text-yellow-400 h-5 w-5 flex-shrink-0"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="sr-only">5 out of 5 stars</p>

								<div class="prose prose-sm mt-4 max-w-none text-secondary-700-200-token">
									<p>
										Blown away by how polished this icon pack is. Everything looks so consistent and
										each SVG is optimized out of the box so I can use it directly with confidence.
										It would take me several hours to create a single icon this good, so it's a
										steal at this price.
									</p>
								</div>
							</div>
						</div>
					</div> -->

					<!-- 'FAQ' panel, show/hide based on tab state -->
					{#if (tabState = 'FAQ')}
						<div
							id="tab-panel-faq"
							class="text-sm text-secondary-700-200-token"
							aria-labelledby="tab-faq"
							role="tabpanel"
							tabindex="0"
						>
							<h3 class="sr-only">Frequently Asked Questions</h3>

							<dl>
								<dt class="mt-10 font-medium text-surface-900-50-token">
									What format are these icons?
								</dt>
								<dd class="prose prose-sm mt-2 max-w-none text-secondary-700-200-token">
									<p>
										The icons are in SVG (Scalable Vector Graphic) format. They can be imported into
										your design tool of choice and used directly in code.
									</p>
								</dd>
								<dt class="mt-10 font-medium text-surface-900-50-token">
									Can I use the icons at different sizes?
								</dt>
								<dd class="prose prose-sm mt-2 max-w-none text-secondary-700-200-token">
									<p>
										Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to
										different sizes as needed. We don&#039;t recommend going smaller than 20 x 20 or
										larger than 64 x 64 to retain legibility and visual balance.
									</p>
								</dd>

								<!-- More FAQs... -->
							</dl>
						</div>
					{:else if (tabState = 'License')}
						<!-- 'License' panel, show/hide based on tab state -->
						<div
							id="tab-panel-license"
							class="pt-10"
							aria-labelledby="tab-license"
							role="tabpanel"
							tabindex="0"
						>
							<h3 class="sr-only">License</h3>

							<div class="prose prose-sm max-w-none text-secondary-700-200-token">
								<h4>Overview</h4>

								<p>
									For personal and professional use. You cannot resell or redistribute these icons
									in their original or modified state.
								</p>

								<ul role="list">
									<li>You're allowed to use the icons in unlimited projects.</li>
									<li>Attribution is not required to use the icons.</li>
								</ul>

								<h4>What you can do with it</h4>

								<ul role="list">
									<li>Use them freely in your personal and professional work.</li>
									<li>Make them your own. Change the colors to suit your project or brand.</li>
								</ul>

								<h4>What you can't do with it</h4>

								<ul role="list">
									<li>
										Don't be greedy. Selling or distributing these icons in their original or
										modified state is prohibited.
									</li>
									<li>
										Don't be evil. These icons cannot be used on websites or applications that
										promote illegal or immoral beliefs or activities.
									</li>
								</ul>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
