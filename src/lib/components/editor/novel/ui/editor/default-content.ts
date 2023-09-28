export const defaultEditorContent = {
	type: 'doc',
	content: [
		{
			type: 'heading',
			attrs: { level: 2 },
			content: [{ type: 'text', text: 'Introducing Novel Svelte' }]
		},
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					marks: [
						{
							type: 'link',
							attrs: {
								href: 'https://github.com/tglide/novel-svelte',
								target: '_blank',
								class:
									'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
							}
						}
					],
					text: 'Novel Svelte'
				},
				{
					type: 'text',
					text: ' is a Notion-style WYSIWYG editor with AI-powered autocompletion. Built with '
				},
				{
					type: 'text',
					marks: [
						{
							type: 'link',
							attrs: {
								href: 'https://tiptap.dev/',
								target: '_blank',
								class:
									'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
							}
						}
					],
					text: 'Tiptap'
				},
				{ type: 'text', text: ' + ' },
				{
					type: 'text',
					marks: [
						{
							type: 'link',
							attrs: {
								href: 'https://sdk.vercel.ai/docs',
								target: '_blank',
								class:
									'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
							}
						}
					],
					text: 'Vercel AI SDK'
				},
				{ type: 'text', text: ". Ported From Steven Tey's " },
				{
					type: 'text',
					marks: [
						{
							type: 'link',
							attrs: {
								href: 'https://github.com/steven-tey/novel',
								target: '_blank',
								class:
									'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
							}
						}
					],
					text: 'Novel'
				},
				{ type: 'text', text: ' project.' }
			]
		},
		{
			type: 'heading',
			attrs: { level: 3 },
			content: [{ type: 'text', text: 'Installation' }]
		},
		{
			type: 'codeBlock',
			attrs: { language: null },
			content: [{ type: 'text', text: 'npm i novel-svelte' }]
		},
		{
			type: 'heading',
			attrs: { level: 3 },
			content: [{ type: 'text', text: 'Usage' }]
		},
		{
			type: 'codeBlock',
			attrs: { language: null },
			content: [
				{
					type: 'text',
					text: '<script>\n\timport { Editor } from "novel-svelte";\n</script>\n\n<Editor />'
				}
			]
		},
		{
			type: 'heading',
			attrs: { level: 3 },
			content: [{ type: 'text', text: 'Features' }]
		},
		{
			type: 'orderedList',
			attrs: { tight: true, start: 1 },
			content: [
				{
					type: 'listItem',
					content: [
						{
							type: 'paragraph',
							content: [{ type: 'text', text: 'Slash menu & bubble menu' }]
						}
					]
				},
				{
					type: 'listItem',
					content: [
						{
							type: 'paragraph',
							content: [
								{ type: 'text', text: 'AI autocomplete (type ' },
								{ type: 'text', marks: [{ type: 'code' }], text: '++' },
								{
									type: 'text',
									text: ' to activate, or select from slash menu)'
								}
							]
						}
					]
				},
				{
					type: 'listItem',
					content: [
						{
							type: 'paragraph',
							content: [
								{
									type: 'text',
									text: 'Image uploads (drag & drop / copy & paste, or select from slash menu) '
								}
							]
						}
					]
				}
			]
		},
		{
			type: 'image',
			attrs: {
				src: 'https://public.blob.vercel-storage.com/pJrjXbdONOnAeZAZ/banner-2wQk82qTwyVgvlhTW21GIkWgqPGD2C.png',
				alt: 'banner.png',
				title: 'banner.png',
				width: null,
				height: null
			}
		},
		{ type: 'horizontalRule' },
		{
			type: 'heading',
			attrs: { level: 3 },
			content: [{ type: 'text', text: 'Learn more' }]
		},
		{
			type: 'taskList',
			content: [
				{
					type: 'taskItem',
					attrs: { checked: false },
					content: [
						{
							type: 'paragraph',
							content: [
								{ type: 'text', text: 'Star us on ' },
								{
									type: 'text',
									marks: [
										{
											type: 'link',
											attrs: {
												href: 'https://github.com/tglide/novel-svelte',
												target: '_blank',
												class:
													'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
											}
										}
									],
									text: 'GitHub'
								}
							]
						}
					]
				},
				{
					type: 'taskItem',
					attrs: { checked: false },
					content: [
						{
							type: 'paragraph',
							content: [
								{ type: 'text', text: 'Install the ' },
								{
									type: 'text',
									marks: [
										{
											type: 'link',
											attrs: {
												href: 'https://www.npmjs.com/package/novel-svelte',
												target: '_blank',
												class:
													'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
											}
										}
									],
									text: 'NPM package'
								}
							]
						}
					]
				}
			]
		}
	]
};
