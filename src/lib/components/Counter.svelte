<script lang="ts">
	export let count: number;

	const increment = () => (count += 1);
</script>

<button class="p-2 bg-primary" on:click={increment}>
	{count}
</button>
