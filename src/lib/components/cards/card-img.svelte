<script lang="ts">
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';

	// props
	export let urlImg: any;
	export let textTitle: any;
	export let textDescription: any;
	export let onClick: (arg0: any) => any = () => {};
</script>

<div
	class="w-[340px] h-[462px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
>
	<div class=" mt-4 px-2 mx-auto h-[140px] flex justify-center">
		<img class="rounded-t-lg h-full" src={urlImg} alt="" />
	</div>

	<div class="p-5 h-full">
		<h5 class="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
			{textTitle}
		</h5>

		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{textDescription}
		</p>
	</div>
	<div>
		<div
			class="mb-4 mx-4 text-2xl font-bold flex justify-center items-center space-x-2 cursor-pointer rounded-lg border-2 border-yellow-400 px-3 py-2 text-yellow-400
            hover:bg-yellow-400 hover:text-white"
			on:click={onClick}
		>
			<span>Ver Producto </span>
			<div class="w-5">
				<FaArrowRight />
			</div>
		</div>
	</div>
</div>
