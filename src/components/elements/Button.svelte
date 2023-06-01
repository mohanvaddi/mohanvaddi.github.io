<script lang="ts">
	export let type: 'primary-filled' | 'primary-outline' = 'primary-outline';

	export let click: (
		evt: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => void;
</script>

<button
	class={`${$$props.class} button`}
	class:primary-outline={type === 'primary-outline'}
	class:primary-filled={type === 'primary-filled'}
	on:click={(event) => click(event)}
>
	<slot />
</button>

<style lang="scss">
	.button {
		@apply px-4 py-2 font-semibold dark:bg-dark hover:scale-[1.05] duration-500 active:scale-[0.98] rounded-md hover:drop-shadow-2xl;
	}

	.slide:hover {
		transition: 550ms;
		box-shadow: inset 11em 0 0 0 rgba($color: $primary, $alpha: 0.5);
	}

	.fill-up:hover {
		transition: 550ms;
		box-shadow: inset 0 -3.25em 0 0 rgba($color: $primary, $alpha: 0.5);
	}

	.fill-down:hover {
		transition: 550ms;
		box-shadow: inset 0 3.25rem 0 0 rgba($color: $primary, $alpha: 0.5);
	}

	.primary-outline {
		// box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		@apply text-white border-2 border-primary;
	}

	.primary-filled {
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		@apply bg-primary text-black;
	}
</style>
