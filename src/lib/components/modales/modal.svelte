<script lang="ts">
	import { isOpenModalStore } from '$stores/modal';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	// props
	export let titleModal = '';
	export let urlImg = '';
	export let description = '';
	export let price = '';
	export let discount = '';
	export let count = [];

	//variables reactivas
	$: showModal = $isOpenModalStore;

	//funciones
	const close = () => {
		showModal = !showModal;
		isOpenModalStore.set(showModal);
	};
</script>

<div class="relative p-4 w-full max-w-5xl h-full md:h-auto">
	<!-- Modal content -->
	<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
		<!-- Modal header -->
		<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
			<h3 class="text-xl font-semibold text-gray-900 dark:text-white">{titleModal}</h3>
			<button
				type="button"
				class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
				on:click={() => {
					close();
				}}
			>
				<div class="w-8 text-black">
					<IoIosClose />
				</div>
			</button>
		</div>
		<!-- Modal body -->
		<div class="p-6 w-full flex flex-col lg:flex-row">
			<div class="lg:w-1/2 flex justify-center items-center py-4 lg:py-0 lg:px-4">
				<img src={urlImg} alt="" />
			</div>
			<div class="lg:w-1/2 lg:px-4 flex-col py-4 lg:py-0">
				{description}
				<div class="flex space-x-8 py-4">
					<p class="uppercase text-yellow-400">precio: ${price}</p>
					{#if discount != ''}
						<p class="uppercase text-red-800">descuento: ${discount}</p>
					{/if}
				</div>
				<div>
					<label
						for="default"
						class="block mb-2 text-lg font-normal text-gray-900 dark:text-gray-400"
						>Piezas disponibles para comprar:
					</label>
					{#if count.length != 0}
						<select
							id="default"
							class="bg-gray-50 border border-gray-300 text-yellow-400 mb-6 rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:yellow-400 dark:focus:border-yellow-400 text-lg"
						>
							<option selected>Cantidad de piezas disponibles</option>
							{#each count as num}
								<option value="num">{num} pz.</option>
							{/each}
						</select>
					{:else}
						<p>No Hay Piezas disponibles</p>
					{/if}
				</div>
			</div>
		</div>
		<!-- Modal footer -->
		<div
			class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
		>
			<button
				type="button"
				class="text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
				>Agregar al Carrito</button
			>
			<button
				type="button"
				class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
				on:click={() => {
					close();
				}}>Cancelar</button
			>
		</div>
	</div>
</div>
