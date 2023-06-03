<script lang="ts">
	import type { Project } from '$src/types/main';

	export let project: Project;
	const { name, description, links } = project;
</script>

<div class="project-card bg-gray-800">
	<h3 class="project-title">{name}</h3>
	<p class="project-description text-gray-400">
		{description}
	</p>
	<div class="project-links">
		{#each links as { name, link }}
			<a
				class="primary-outline button !px-[0.4rem] !py-[0.3rem] !bg-gray-800 capitalize"
				href={link}
				target="_blank"
				rel="noopener noreferrer">{name}</a
			>
		{/each}
	</div>
</div>
