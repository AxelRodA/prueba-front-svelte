/// <reference types="@sveltejs/kit" />

// Environment variables
interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_PORT: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onclick_outside?: CompositionEventHandler<T>;
	}
}