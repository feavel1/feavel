import StarterKit from '@tiptap/starter-kit';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import TiptapLink from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import TiptapUnderline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { Markdown } from 'tiptap-markdown';
import Highlight from '@tiptap/extension-highlight';
import { InputRule } from '@tiptap/core';
import SlashCommand from './slash-command.js';
import UpdatedImage from './updated-image.js';
import DragAndDrop from './drag-and-drop';
import UploadImagesPlugin from '../plugins/upload-images.js';
// import BubbleMenu from '@tiptap/extension-bubble-menu';

// import {
// 	isColorSelectorOpen,
// 	isLinkSelectorOpen,
// 	isNodeSelectorOpen
// } from '../bubble-menu/index.svelte';
// import { isBrowser } from '../../../utils.js';

export const defaultExtensions = [
	StarterKit.configure({
		bulletList: {
			HTMLAttributes: {
				class: 'list-disc list-outside leading-3 -mt-2'
			}
		},
		orderedList: {
			HTMLAttributes: {
				class: 'list-decimal list-outside leading-3 -mt-2'
			}
		},
		listItem: {
			HTMLAttributes: {
				class: 'leading-normal -mb-2'
			}
		},
		blockquote: {
			HTMLAttributes: {
				class: 'blockquote'
			}
		},
		codeBlock: {
			HTMLAttributes: {
				class:
					'rounded-sm dark:bg-stone-900 dark:text-stone-100 bg-stone-100 p-5 font-mono font-medium text-stone-800',
				spellcheck: 'false'
			}
		},
		code: {
			HTMLAttributes: {
				class: 'code',
				spellcheck: 'false'
			}
		},
		horizontalRule: false,
		dropcursor: {
			color: '#DBEAFE',
			width: 4
		},
		gapcursor: false
	}),
	// patch to fix horizontal rule bug: https://github.com/ueberdosis/tiptap/pull/3859#issuecomment-1536799740
	HorizontalRule.extend({
		addInputRules() {
			return [
				new InputRule({
					find: /^(?:---|—-|___\s|\*\*\*\s)$/,
					handler: ({ state, range }) => {
						const attributes = {};

						const { tr } = state;
						const start = range.from;
						const end = range.to;

						tr.insert(start - 1, this.type.create(attributes)).delete(
							tr.mapping.map(start),
							tr.mapping.map(end)
						);
					}
				})
			];
		}
	}).configure({
		HTMLAttributes: {
			class: 'mt-4 mb-6 border-t border-stone-300'
		}
	}),
	TiptapLink.configure({
		HTMLAttributes: {
			class: 'anchor'
		}
	}),
	TiptapImage.extend({
		addProseMirrorPlugins() {
			return [UploadImagesPlugin()];
		}
	}).configure({
		allowBase64: true,
		HTMLAttributes: {
			class: 'rounded-lg border border-stone-200'
		}
	}),
	UpdatedImage.configure({
		HTMLAttributes: {
			class: 'rounded-lg border border-stone-200'
		}
	}),
	Placeholder.configure({
		placeholder: ({ node }: any) => {
			if (node.type.name === 'heading') {
				return `Heading ${node.attrs.level}`;
			}
			return "Press '/' for commands, or '++' for AI autocomplete...";
		},
		includeChildren: true
	}),
	SlashCommand,
	TiptapUnderline,
	TextStyle,
	Color,
	Highlight.configure({
		multicolor: true
	}),
	TaskList.configure({
		HTMLAttributes: {
			class: 'not-prose pl-2'
		}
	}),
	TaskItem.configure({
		HTMLAttributes: {
			class: 'flex items-start my-4'
		},
		nested: true
	}),
	Markdown.configure({
		html: false,
		transformCopiedText: true
	}),
	DragAndDrop
];
