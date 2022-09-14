/// <reference types="@sveltejs/kit" />
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface PageError {}
	// interface Platform {}
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_API_URL: string;
	readonly VITE_API_KEY: string;
	readonly VITE_API_TOKEN: string;
}

export declare global {
	interface Window {
		handleCaptchaCallback: (token: string) => Promise<void>;
		resetCaptcha: () => void;
		handleCaptchaError: () => void;
	}
}
