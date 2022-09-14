<script lang="ts">
	let clase = '';
	export { clase as class };
	export let onClick: (arg0: any) => any = () => {};
</script>

<button class={clase} on:click={onClick} type="button">
	<slot />
</button>
