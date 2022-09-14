<script lang="ts">
	import { goto } from '$app/navigation';
	import FaBell from 'svelte-icons/fa/FaBell.svelte';
	import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaStore from 'svelte-icons/fa/FaStore.svelte';
	import FaList from 'svelte-icons/fa/FaList.svelte';

	let showMenu = false;
</script>

<nav class="w-full bg-gray-700 border-gray-200 px-2 sm:px-4 py-3 dark:bg-gray-900">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<div
			class="flex items-center space-x-2 cursor-pointer"
			on:click={() => {
				goto('/');
			}}
		>
			<img src="/img/shop-logo.svg" class="w-10" alt="Logo-shop" />
			<span class="self-center text-xl font-semibold whitespace-nowrap text-white">
				Shop-Shop
			</span>
		</div>
		<button
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden text-white hover:text-yellow-500"
			on:click={() => {
				showMenu = !showMenu;
			}}
		>
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<!-- Menu Desktop -->
		<div class="hidden w-full lg:flex items-center md:w-auto space-x-4 divide-x-2">
			<div
				class="flex flex-col p-4 mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0"
			>
				<div
					class="flex gap-2 py-2 pr-4 pl-3 text-white hover:text-yellow-400 0 md:p-0 cursor-pointer"
					on:click={() => {
						goto('/');
					}}
				>
					<div class="w-5"><FaHome /></div>
					Inicio
				</div>

				<div
					class="flex gap-2 py-2 pr-4 pl-3 text-white hover:text-yellow-400 0 md:p-0 cursor-pointer"
					on:click={() => {
						goto('/productos');
					}}
				>
					<div class="w-5"><FaStore /></div>
					Productos
				</div>
				<div
					class="flex gap-2 py-2 pr-4 pl-3 text-white hover:text-yellow-400 0 md:p-0 cursor-pointer"
					on:click={() => {
						goto('/ordenes');
					}}
				>
					<div class="w-5"><FaList /></div>
					Ordenes
				</div>
			</div>

			<div class=" p-4 flex items-center space-x-2">
				<div class="w-6 text-white hover:text-yellow-500"><FaBell /></div>
				<div class="w-6 text-white hover:text-yellow-500"><FaShoppingCart /></div>
				<img
					class="w-12 rounded-full cursor-not-allowed"
					src="/img/user.jpeg"
					alt="Rounded avatar"
				/>
			</div>
		</div>
	</div>
	<!-- Menu Mobile -->
	{#if showMenu}
		<div class="flex-col z-50 w-full lg:hidden px-2 divide-y-2">
			<div class="flex-col p-4 mt-4">
				<div
					class="flex items-center py-2 text-white hover:text-yellow-400 cursor-pointer gap-2"
					on:click={() => {
						goto('/');
						showMenu = !showMenu;
					}}
				>
					<div class="w-5"><FaHome /></div>
					Inicio
				</div>
				<div
					class="flex items-center py-2 text-white hover:text-yellow-400 cursor-pointer gap-2"
					on:click={() => {
						goto('/productos');
						showMenu = !showMenu;
					}}
				>
					<div class="w-5"><FaStore /></div>
					Productos
				</div>
				<div
					class="flex items-center py-2 text-white hover:text-yellow-400 cursor-pointer gap-2"
					on:click={() => {
						goto('/ordenes');
						showMenu = !showMenu;
					}}
				>
					<div class="w-5"><FaList /></div>
					Ordenes
				</div>
			</div>
			<div class=" p-4 flex items-center space-x-2">
				<div class="w-6 text-white hover:text-yellow-500"><FaBell /></div>
				<div class="w-6 text-white hover:text-yellow-500"><FaShoppingCart /></div>
				<img
					class="w-12 rounded-full cursor-not-allowed"
					src="/img/user.jpeg"
					alt="Rounded avatar"
				/>
			</div>
		</div>
	{/if}
</nav>
