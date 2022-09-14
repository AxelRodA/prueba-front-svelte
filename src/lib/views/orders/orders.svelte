<script lang="ts">
	import { getOrders, getDataOrder } from '$stores/orders';
	import { isOpenModalOrders } from '$stores/modal';
	import ModalOrders from '$lib/components/modales/modalOrders.svelte';
	import { onMount } from 'svelte';

	$: showModalOrders = $isOpenModalOrders;

	let listOrders = [];
	let dataOrder = {};

	const productDetails = async (id) => {
		dataOrder = {};
		dataOrder = await getDataOrder(id);
	};

	const createList = async () => {
		listOrders = await getOrders();
	};

	const close = () => {
		showModalOrders = !showModalOrders;
		isOpenModalOrders.set(showModalOrders);
	};

	onMount(() => {
		createList();
	});
</script>

<div class="container-fluid flex justify-center items-center h-full overflow-auto lg:pt-10 pb-10">
	<div
		class="container tablaOrdenes h-[90%] md:h-[100%] pb-8 lg:py-8 px-8 flex-col justify-center items-center overflow-auto space-y-4 bg-black/60 rounded-lg"
	>
		<div class="py-4">
			<h3 class="text-4xl text-center text-yellow-400">Ordenes Generadas</h3>
		</div>
		<div>
			<div class="overflow-auto">
				<table class="w-full text-md text-left text-gray-500 dark:text-gray-400">
					<thead
						class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th scope="col" class="py-3 px-6"> Id </th>
							<th scope="col" class="py-3 px-6"> Id Usuario </th>
							<th scope="col" class="py-3 px-6"> Telefono </th>
							<th scope="col" class="py-3 px-6"> Direcion </th>
							<th scope="col" class="py-3 px-6"> Ciudad </th>
							<th scope="col" class="py-3 px-6"> Descuento </th>
							<th scope="col" class="py-3 px-6"> Subtotal</th>
							<th scope="col" class="py-3 px-6"> Total</th>
							<th scope="col" class="py-3 px-6"> Estatus</th>
							<th scope="col" class="py-3 px-6"> Detalles</th>
						</tr>
					</thead>
					<tbody>
						{#each listOrders as order}
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{order.id}
								</th>
								<td class="py-4 px-6"> {order.user_id} </td>
								<td class="py-4 px-6"> {order.phone} </td>
								<td class="py-4 px-6"> {order.address} </td>
								<td class="py-4 px-6"> {order.city} </td>
								<td class="py-4 px-6"> {order.discount} </td>
								<td class="py-4 px-6"> {order.subtotal} </td>
								<td class="py-4 px-6"> {order.total} </td>
								<td class="py-4 px-6"> {order.paid} </td>
								<td class="py-4 px-6">
									<span
										class="py-2 px-3 rounded-lg border-yellow-400 text-yellow-400 cursor-pointer"
										on:click={() => {
											productDetails(order.id);
											showModalOrders = !showModalOrders;
										}}
									>
										Mas Detalles</span
									></td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

{#if showModalOrders && dataOrder != undefined}
	<div
		tabindex="-1"
		aria-hidden="true"
		class="h-screen flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full bg-black/70 py-20"
	>
		<ModalOrders
			id_order={dataOrder.id}
			id_user={dataOrder.user_id}
			phone={dataOrder.phone}
			address={dataOrder.address}
			city={dataOrder.city}
			state={dataOrder.state}
			street_name={dataOrder.street_name}
			zip_code={dataOrder.zip_code}
			order_code={dataOrder.order_code}
			subtotal={dataOrder.subtotal}
			discount={dataOrder.discount}
			total={dataOrder.total}
			paid={dataOrder.paid}
			create_date={dataOrder.create_date}
			last_update={dataOrder.last_update}
		/>
	</div>
{/if}

<style>
	.tablaOrdenes {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
		overflow-y: scroll;
	}

	.tablaOrdenes::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}
</style>
