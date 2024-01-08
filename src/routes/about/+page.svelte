<script>
	import File from '$lib/components/icons/File.svelte';
	import ContactInfo from '$lib/components/ui/ContactInfo.svelte';
</script>

<!-- <div class="flex flex-col justify-between">
	<div class="text-right">
		<p class="text-xs italic text-gray-500 py-2">
			Send me a text / email if you want to hire me - Feavel
		</p>
		<h1 class="h1">Contact Info</h1>
		<p class="italic text-lg">联系方式 📞</p>
	</div>

	<ContactInfo title="e-Mail" text="feavel@qq.com" chinese="邮箱" />

	<ContactInfo title="tel" text="+8613027929529" chinese="电话" />

	<ContactInfo title="wechat" text="tanuki20966" chinese="微信" />

	<div class="my-5 flex flex-col">
		<p class="italic text-lg">github</p>
		<a
			class="text-xl underline decoration-blue-400 hover:decoration-blue-100"
			href="https://github.com/feavel1">Baby feavel</a
		>
	</div>
</div> -->

<main class="relative isolate">
	<!-- Background -->
	<div
		class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
		aria-hidden="true"
	>
		<div
			class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
			style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
		></div>
	</div>

	<!-- Header section -->
	<div class="px-6 pt-14 lg:px-8">
		<div class="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
			<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">We love creators</h2>
			<p class="mt-6 text-lg leading-8 text-primary-800-100-token">
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
		</div>
	</div>

	<!-- Content section -->
	<div class="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			<div
				class="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-primary-800-100-token lg:max-w-none lg:grid-cols-2"
			>
				<div>
					<p>
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
						semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
						viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
						Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
					</p>
					<p class="mt-8">
						Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
						molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
						varius vulputate et ultrices hac adipiscing egestas.
					</p>
				</div>
				<div>
					<p>
						Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis
						id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et
						nesciunt doloremque nesciunt voluptate.
					</p>
					<p class="mt-8">
						Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
						molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
						varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut.
						Ac lorem vel integer orci.
					</p>
				</div>
			</div>
			<dl
				class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4"
			>
				<div class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
					<dt class="text-base leading-7 text-primary-800-100-token">Business was founded</dt>
					<dd class="text-3xl font-semibold tracking-tight text-white">2012</dd>
				</div>
				<div class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
					<dt class="text-base leading-7 text-primary-800-100-token">People on the team</dt>
					<dd class="text-3xl font-semibold tracking-tight text-white">120+</dd>
				</div>
				<div class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
					<dt class="text-base leading-7 text-primary-800-100-token">Users on the platform</dt>
					<dd class="text-3xl font-semibold tracking-tight text-white">250k</dd>
				</div>
				<div class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
					<dt class="text-base leading-7 text-primary-800-100-token">Paid out to creators</dt>
					<dd class="text-3xl font-semibold tracking-tight text-white">$70M</dd>
				</div>
			</dl>
		</div>
	</div>

	<!-- Image section -->
	<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
			alt=""
			class="aspect-[9/4] w-full object-cover xl:rounded-3xl"
		/>
	</div>

	<!-- Values section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our values</h2>
			<p class="mt-6 text-lg leading-8 text-primary-800-100-token">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
				suscipit eaque, iste dolor cupiditate blanditiis.
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-primary-800-100-token sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16"
		>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-white">
					<svg
						class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
							clip-rule="evenodd"
						/>
					</svg>
					Be world-class.
				</dt>
				<dd class="inline">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.
				</dd>
			</div>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-white">
					<svg
						class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M11 2a1 1 0 10-2 0v6.5a.5.5 0 01-1 0V3a1 1 0 10-2 0v5.5a.5.5 0 01-1 0V5a1 1 0 10-2 0v7a7 7 0 1014 0V8a1 1 0 10-2 0v3.5a.5.5 0 01-1 0V3a1 1 0 10-2 0v5.5a.5.5 0 01-1 0V2z"
							clip-rule="evenodd"
						/>
					</svg>
					Take responsibility.
				</dt>
				<dd class="inline">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				</dd>
			</div>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-white">
					<svg
						class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"
						/>
					</svg>
					Be supportive.
				</dt>
				<dd class="inline">
					Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.
				</dd>
			</div>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-white">
					<svg
						class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
							clip-rule="evenodd"
						/>
					</svg>
					Always learning.
				</dt>
				<dd class="inline">
					Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.
				</dd>
			</div>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-white">
					<svg
						class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
						/>
					</svg>
					Share everything you know.
				</dt>
				<dd class="inline">
					Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.
				</dd>
			</div>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-white">
					<svg
						class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"
						/>
					</svg>
					Enjoy downtime.
				</dt>
				<dd class="inline">
					Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.
				</dd>
			</div>
		</dl>
	</div>

	<!-- Team section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
			<p class="mt-6 text-lg leading-8 text-primary-800-100-token">
				Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in neque vel omnis. Eos error
				odio. Qui fugit voluptatibus eum culpa.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
		>
			<li>
				<img
					class="aspect-[14/13] w-full rounded-2xl object-cover"
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
					alt=""
				/>
				<h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
					Leslie Alexander
				</h3>
				<p class="text-base leading-7 text-primary-800-100-token">Co-Founder / CEO</p>
				<p class="text-sm leading-6 text-gray-500">Toronto, Canada</p>
			</li>

			<!-- More people... -->
		</ul>
	</div>

	<!-- CTA section -->
	<div class="relative isolate -z-10 mt-32 sm:mt-40">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div
				class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
			>
				<img
					class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
					src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
					alt=""
				/>
				<div class="w-full flex-auto">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our team</h2>
					<p class="mt-6 text-lg leading-8 text-primary-800-100-token">
						Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
						cupiditate veritatis in accusamus quisquam.
					</p>
					<ul
						role="list"
						class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
					>
						<li class="flex gap-x-3">
							<svg
								class="h-7 w-5 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
							Competitive salaries
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-7 w-5 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
							Flexible work hours
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-7 w-5 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
							30 days of paid vacation
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-7 w-5 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
							Annual team retreats
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-7 w-5 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
							Benefits for you and your family
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-7 w-5 flex-none"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
							A great work environment
						</li>
					</ul>
					<div class="mt-10 flex">
						<a href="#" class="text-sm font-semibold leading-6 text-indigo-400"
							>See our job postings <span aria-hidden="true">&rarr;</span></a
						>
					</div>
				</div>
			</div>
		</div>
		<div
			class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
			aria-hidden="true"
		>
			<div
				class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
				style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
			></div>
		</div>
	</div>
</main>
