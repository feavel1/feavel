import { isBrowser } from '../utils.js';
import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';

export const createLocalStorageStore = <T>(key: string, initialValue: T) => {
	const store = writable<T>();
	store.set(
		isBrowser() && localStorage.getItem(key)
			? JSON.parse(localStorage.getItem(key) as string)
			: initialValue
	);
	onDestroy(
		store.subscribe((v) => {
			if (!isBrowser()) return;
			localStorage.setItem(key, JSON.stringify(v));
		})
	);

	return store;
};
