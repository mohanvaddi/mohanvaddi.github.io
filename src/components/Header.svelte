<script lang="ts">
	import type { Nav, UserPreferences } from '$lib/types';
	import { sound } from '$src/utils/sound';
	import Icon from './Icon.svelte';
	import { browser } from '$app/environment';
	import { setUserPreferences, getUserPreferences } from '$utils/userPreferences';
	import { debounce } from '$utils/helper';

	export let nav: Nav;

	let isSoundEnabled: boolean;
	if (browser) {
		const userPreferences = getUserPreferences();
		if (userPreferences.hasOwnProperty('sound')) {
			sound.mute(!userPreferences.sound!);
			isSoundEnabled = userPreferences.sound!;
		} else {
			// fallback to true if userpreference for sound is not set.
			isSoundEnabled = true;
		}
	}

	const muteHandler = () => {
		isSoundEnabled = false;

		sound.mute(true);
		browser &&
			setUserPreferences({
				sound: false
			});
		console.log('sound::muted');
	};

	const unmuteHandler = () => {
		isSoundEnabled = true;

		sound.mute(false);
		browser &&
			setUserPreferences({
				sound: true
			});
		console.log('sound::unmuted');
	};

	const debouncedMuteHandler = debounce(muteHandler, 500);
	const debouncedUnMuteHandler = debounce(unmuteHandler, 500);
</script>

<div class="fixed w-full h-auto dark:bg-dark dark:text-white">
	<div class="flex flex-row px-2 py-4 mx-4 md:p-3 md:mx-6">
		<div class="basis-1/6 flex justify-center items-center">
			<a href="/" data-sound-hover="pop" data-sound-click="click">
				<ul class="list-none table text-center cursor-pointer">
					<li class="table-cell relative dark:text-primary font-montserrat text-3xl font-extrabold">
						M
					</li>
					<li class="table-cell relative dark:text-white font-montserrat text-3xl font-extrabold">
						V
					</li>
				</ul>
			</a>
		</div>
		<div class="basis-3/6" />
		<div class="hidden md:basis-2/6 sm:flex items-center justify-around">
			{#each nav as { name, route }, idx}
				<a
					class="dark:text-white font-inter font-extrabold relative custom-underline-effect"
					href={route}
				>
					<span class="dark:text-primary font-roboto-mono">{'0' + (idx + 1) + '.'}</span> {name}</a
				>
			{/each}

			<Icon class="cursor-pointer" icon="moon" type="solid" />

			{#if isSoundEnabled}
				<div
					data-sound-click="click"
					data-sound-hover="pop"
					on:click={debouncedMuteHandler}
					on:keydown={debouncedMuteHandler}
				>
					<Icon
						class="hover:scale-[1.2] active:scale-[0.9] cursor-pointer"
						icon={'volume-on'}
						type="solid"
					/>
				</div>
			{:else}
				<div
					data-sound-click="click"
					data-sound-hover="pop"
					on:click={debouncedUnMuteHandler}
					on:keydown={debouncedUnMuteHandler}
				>
					<Icon
						class="hover:scale-[1.2] active:scale-[0.9] cursor-pointer"
						icon={'volume-off'}
						type="solid"
					/>
				</div>
			{/if}
		</div>
	</div>
</div>
