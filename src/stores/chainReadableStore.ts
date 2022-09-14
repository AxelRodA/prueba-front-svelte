import { derived, readable } from 'svelte/store';
export const chainReadableStore = (initialStores, createChainedStore, defaultValues) => {
	/* Create a readable store, that will change values according to listeners */

	return readable(defaultValues, (set) => {
		let unsubscribeChainedStore;
		// We subscribe to the initialStores, that can be an array
		const unsubscribeInitialStore = derived(initialStores, (values) => values).subscribe(
			(values) => {
				// Whenever the listener is triggered, it means that the value from the initial stores
				// has changed: the previous chained store becomes invalid.
				if (unsubscribeChainedStore) {
					unsubscribeChainedStore();
					unsubscribeChainedStore = undefined;
				}
				if (values === undefined) {
					// It is important to still notify when the value is undefined,
					// because otherwise we would miss the transition `filled` => `undefined`.
					// But we return early, because the chained stores do not exist by definition
					// if the initial stores yield undefined.
					set(defaultValues);
					return;
				}
				unsubscribeChainedStore = createChainedStore(values).subscribe((chainedValues) => {
					if (chainedValues === undefined) {
						// It is important to still notify when the value is undefined,
						// because otherwise we would miss the transition `filled` => `undefined`
						// (ex of symptom: a banner not disappearing)
						set(defaultValues);
						return;
					}
					set(chainedValues);
				});
			}
		);
		return () => {
			unsubscribeInitialStore();
			if (unsubscribeChainedStore) {
				unsubscribeChainedStore();
				unsubscribeChainedStore = undefined;
			}
		};
	});
};
