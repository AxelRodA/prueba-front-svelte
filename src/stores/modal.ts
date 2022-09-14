import { writable } from 'svelte/store';

export const isOpenModalStore = writable<boolean>(false);
export const isOpenModalOrders = writable<boolean>(false);
