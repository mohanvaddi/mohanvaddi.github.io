<script lang="ts">
	import Icon from '$src/lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import socialLinks from '$data/social-links';
	import projects from '$data/projects';
	import experience from '$data/experience';
	import education from '$data/education';
	import about from '$data/about';
	import type { PageData } from './$types';
	import { insertHtml, scrollIntoView } from '$src/lib/functions/helpers';
	import Experience from '$src/lib/components/portfolio/Experience.svelte';
	import ProjectCard from '$src/lib/components/portfolio/ProjectCard.svelte';
	import Fab from '$src/lib/components/Fab.svelte';
	import Education from '$src/lib/components/portfolio/Education.svelte';

	let fab: boolean = false;

	export let data: PageData;
	console.log('data::', data);

	onMount(() => {
		const smoothScroll = (event: MouseEvent) => {
			event.preventDefault();
			const targetId: string = (event.target as HTMLAnchorElement)
				.getAttribute('href')!
				.substring(1);
			scrollIntoView(targetId);
		};

		// adding smoothScroll to the links
		const links = document.querySelectorAll('nav ul li a');
		links.forEach((link) => {
			link.addEventListener('click', smoothScroll as EventListener);
		});

		const fabLinks = document.querySelectorAll('.fab-container a');
		fabLinks.forEach((link) => {
			link.addEventListener('click', smoothScroll as EventListener);
		});

		document.addEventListener('keydown', (e) => {
			if (e.code === 'KeyF') {
				fab = !fab;
			}
		});
	});

	const sections: { name: string; route: string }[] = [
		{
			name: 'About',
			route: '#about'
		},
		{
			name: 'Experience',
			route: '#experience'
		},
		{
			name: 'Education',
			route: '#education'
		},
		{
			name: 'Projects',
			route: '#projects'
		},
		{
			name: 'Contact Me',
			route: '#contact-me'
		}
	];
	const sectionsRev = sections.slice().reverse();
</script>

<div class="flex-grow p-0 m-0 text-white bg-dark">
	<div class="cust-container mx-auto">
		<div class="left px-4 md:px-8 lg:px-8">
			<div class="container lg:mx-auto lg:mt-20 mt-14">
				<p class="text-4xl lg:text-4xl font-montserrat mt-2 mb-0 uppercase name">{about.name}</p>
				<p class="text-lg font-montserrat mt-1 mb-2 text-gray-300">
					{about.subHead}
				</p>
				<p class="text-lg font-inter text-gray-300 w-4/5">
					{about.desc}
				</p>
			</div>

			<div class="mt-6 lg:mt-8">
				<a
					href={about.resumeHref}
					class="button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down"
					target="_blank"
				>
					<Icon icon="doc-download-solid" type="solid" />
					Resume
				</a>
			</div>

			<nav class="mt-8 hidden lg:block">
				<ul>
					{#each sections as { name, route }}
						<li>
							<a class="custom-underline-effect" href={route}>{name}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="absolute bottom-12 hidden lg:block">
				<div class="grid grid-cols-3">
					{#each socialLinks as { name, link }}
						<a
							target="_blank"
							rel="noreferrer"
							data-sound-hover="pop"
							data-sound-click="click"
							href={link}
						>
							<Icon
								class="mr-3 hover:scale-[1.1] active:scale-[0.95]"
								type="solid"
								icon={name}
								height="32px"
								width="32px"
							/></a
						>
					{/each}
				</div>
			</div>
		</div>

		<div class="right text-black d-flex px-4 md:px-8 lg:mt-12">
			<section id="about" class="mt-2 py-8">
				<p class="text-lg text-gray-400">
					{about.about}
				</p>
			</section>

			<div class="separator" />

			<section id="experience" class="py-8">
				<h2 class="text-2xl font-bold text-primary uppercase">Experience</h2>
				{#each experience as exp}
					<div class="mt-4">
						<Experience experience={exp} />
					</div>
				{/each}
			</section>

			<div class="separator" />

			<section id="education" class="py-8">
				<h2 class="text-2xl font-bold text-primary uppercase">Education</h2>
				{#each education as edu}
					<div class="mt-4">
						<Education education={edu} />
					</div>
				{/each}
			</section>

			<div class="separator" />

			<section id="projects" class="py-8">
				<h2 class="text-2xl font-bold text-primary mb-6 uppercase">Projects</h2>
				<div class="project-list text-gray-300 mb-8">
					{#each projects as project}
						<ProjectCard {project} />
					{/each}
				</div>
			</section>

			<div class="separator" />

			<section id="contact-me" class="py-8 mb-8 lg:mb-12">
				<h2 class="text-2xl font-bold text-primary uppercase">Get In Touch</h2>
				<p class="mt-4 text-md text-gray-400">
					My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
					best to get back to you!
				</p>

				<div class="mt-8">
					<a
						href="mailto:{about.email}"
						class="button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down"
					>
						<Icon icon="user-cicle-solid" type="solid" />
						Say Hello
					</a>
				</div>
			</section>
		</div>
	</div>
</div>

<Fab bind:fab {sectionsRev} />
