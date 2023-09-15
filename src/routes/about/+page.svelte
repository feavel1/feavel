<script>
	import File from '$lib/components/icons/File.svelte';
	import ContactInfo from '$lib/components/ui/ContactInfo.svelte';
</script>

<div class="flex flex-col justify-between">
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
</div>
