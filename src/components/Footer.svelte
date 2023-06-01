<script lang="ts">
	import { goto } from '$app/navigation';
	import type { FooterLinks } from '$lib/types';

	import Icon from './Icon.svelte';

	export let footerLinks: FooterLinks;
</script>

<div class="hidden sm:block w-full h-auto dark:bg-dark dark:text-white">
	<div class="md:flex md:flex-row mb-2 mx-4 p-1 md:p-2 md:mx-6">
		<div class="md:basis-1/6 sm:flex justify-center items-center">
			<span class="text-sm font-inter">Built by</span>
			<ul class="ml-2 list-none table text-center">
				<li class="table-cell relative dark:text-primary font-montserrat text-xl font-extrabold">
					Mohan
				</li>
				<li class="table-cell relative dark:text-white font-montserrat text-xl font-extrabold">
					Vaddi
				</li>
			</ul>
		</div>
		<div class="md:basis-3/6" />
		<div class="basis-1 sm:basis-2/6 flex items-center justify-around">
			{#each footerLinks as { displayName, link }}
				<a
					target="blank"
					class="dark:text-primary font-inter font-semibold relative after:underline-effect dark:after:bg-primary hover:after:underline-effect-hover-after "
					href={link}>{displayName}</a
				>
			{/each}
		</div>
	</div>
</div>

<div class="sm:hidden w-full h-auto dark:bg-dark dark:text-white border-t-2 border-t-primary">
	<div class="grid grid-cols-4 ">
		<div class="grid grid-rows-2 px-2 pb-2 pt-4">
			<div class="text-center justify-center align-middle items-center">
				<Icon width="24px" height="24px" icon="email" type="solid" />
			</div>
			<div class="text-center">
				<p class="text-sm">Contact me</p>
			</div>
		</div>
		<div class="grid grid-rows-2 px-2 pb-2 pt-4">
			<div class="text-center justify-center align-middle items-center">
				<Icon width="24px" height="24px" icon="email" type="solid" />
			</div>
			<div class="text-center ">
				<p class="text-sm">Contact me</p>
			</div>
		</div>
		<div class="grid grid-rows-2 px-2 pb-2 pt-4">
			<div class="text-center justify-center align-middle items-center">
				<Icon width="24px" height="24px" icon="email" type="solid" />
			</div>
			<div class="text-center">
				<p class="text-sm">Contact me</p>
			</div>
		</div>
		<div
			on:click={() => goto('/about-me')}
			on:keydown={() => goto('/about-me')}
			class="grid grid-rows-2 px-2 pb-2 pt-4"
		>
			<div class="text-center justify-center align-middle items-center">
				<Icon width="24px" height="24px" icon="user-cicle-outline" />
			</div>
			<div class="text-center">
				<p class="text-sm">About me</p>
			</div>
		</div>
	</div>
</div>
