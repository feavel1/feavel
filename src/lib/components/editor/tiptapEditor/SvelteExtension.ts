import { Node, mergeAttributes } from '@tiptap/core';
import { SvelteNodeViewRenderer } from 'svelte-tiptap';

import { Extension } from '@tiptap/core';
import Editable from './Editable.svelte';

export const DraggableItem = Node.create({
	name: 'draggableItem',

	group: 'block',

	content: 'block+',

	draggable: true,

	parseHTML() {
		return [
			{
				tag: 'div[data-type="draggable-item"]'
			}
		];
	},

	renderHTML({ HTMLAttributes }) {
		return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'draggable-item' }), 0];
	},

	addNodeView() {
		return SvelteNodeViewRenderer(Editable);
	}
});

export const GlobalTextAlign = Extension.create({
	addGlobalAttributes() {
		return [
			{
				// Extend the following extensions
				types: ['heading', 'paragraph'],
				// … with those attributes
				attributes: {
					textAlign: {
						default: 'left',
						renderHTML({ HTMLAttributes }) {
							return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'draggable-item' }), 0];
						},
						parseHTML() {
							return [
								{
									tag: 'div[data-type="draggable-item"]'
								}
							];
						}
					}
				}
			}
		];
	}
});
