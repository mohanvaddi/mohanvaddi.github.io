<script lang="ts">
	import { insertHtml } from '$lib/functions/helpers';
	import type { Experience } from '$src/types/main';

	export let experience: Experience;

	const { companyName, roles, description } = experience;
</script>

<div class="text-xl text-primary">{companyName}</div>
{#each roles as { role, period }}
	<div class="grid grid-rows-1 grid-flow-col">
		<div class="text-lg text-gray-200">{role}</div>
		<div class="text-md font-bold text-right date px-4 text-gray-200">
			{period}
		</div>
	</div>
{/each}
<div class="description">
	<div class="job-responsibilities mt-2 px-2">
		<ul class="text-gray-400 text-md">
			{#each description as line}
				<li>{@html insertHtml(line)}</li>
			{/each}
		</ul>
	</div>
</div>
