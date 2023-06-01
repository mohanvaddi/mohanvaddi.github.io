<script lang="ts">
	import Icon from '$src/components/Icon.svelte';
	import { onMount } from 'svelte';
	import socialLinks from '$data/social-links';
	import projects from '$data/projects';

	onMount(() => {
		const links = document.querySelectorAll('nav ul li a');
		const fabLinks = document.querySelectorAll('.quick-actions-list li a');

		const smoothScroll = (event: any) => {
			event.preventDefault();
			const targetId = event.target.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth'
				});
			}
		};

		links.forEach((link) => {
			link.addEventListener('click', smoothScroll);
		});

		fabLinks.forEach((link) => {
			link.addEventListener('click', smoothScroll);
		});
	});
</script>

<div class="flex-grow p-0 m-0 text-white bg-dark">
	<div class="cust-container mx-auto">
		<div class="left px-4 md:px-8 lg:px-8">
			<div class="container lg:mx-auto lg:mt-20 mt-14">
				<p class="text-4xl lg:text-4xl font-montserrat mt-2 mb-0 uppercase name">Mohan Vaddi</p>
				<p class="text-lg font-montserrat dark:text-white mt-1 mb-2 text-gray-300">
					SDE @ PointMotion Inc.
				</p>
				<p class="text-lg font-inter text-gray-300 w-4/5">
					I build accessible, inclusive products and digital experiences for the web. If you're
					interested in learning more about me, check out my LinkedIn Profile and feel free to
					connect with me there.
				</p>
			</div>

			<div class="mt-6 lg:mt-8">
				<a
					href="assets/Mohan Vaddi - SDE.pdf"
					class="button primary-outline !px-[0.4rem] !py-[0.3rem] fill-down"
					target="_blank"
				>
					<Icon icon="doc-download-solid" type="solid" />
					Resume
				</a>
			</div>

			<nav class="mt-8 hidden lg:block">
				<ul>
					<li>
						<a class=" custom-underline-effect" href="#about">About</a>
					</li>
					<li>
						<a class=" custom-underline-effect" href="#experience">Experience</a>
					</li>
					<li>
						<a class=" custom-underline-effect" href="#education">Education</a>
					</li>
					<li>
						<a class=" custom-underline-effect" href="#projects">Projects</a>
					</li>
					<li>
						<a class=" custom-underline-effect" href="#contact-me">Get In Touch</a>
					</li>
				</ul>
			</nav>

			<div class="absolute bottom-12 hidden lg:block">
				<div class="grid grid-cols-4 m-2">
					<div>
						<a
							target="_blank"
							rel="noreferrer"
							data-sound-hover="pop"
							data-sound-click="click"
							href={socialLinks.github}
						>
							<Icon
								class="m-3 hover:scale-[1.1] active:scale-[0.95]"
								type="solid"
								icon="github"
								height="32px"
								width="32px"
							/></a
						>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer"
							data-sound-hover="pop"
							data-sound-click="click"
							href={socialLinks.linkedIn}
						>
							<Icon
								class="m-3 hover:scale-[1.1] active:scale-[0.95]"
								type="solid"
								icon="linkedIn"
								height="32px"
								width="32px"
							/></a
						>
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer"
							data-sound-hover="pop"
							data-sound-click="click"
							href={socialLinks.twitter}
						>
							<Icon
								class="m-3 hover:scale-[1.1] active:scale-[0.95]"
								type="solid"
								icon="twitter"
								height="32px"
								width="32px"
							/></a
						>
					</div>
				</div>
			</div>
		</div>

		<div class="right text-black d-flex px-4 md:px-8 lg:mt-12">
			<section id="about" class="mt-2 py-8">
				<p class="text-lg text-gray-400">
					As an SDE working in an early-stage startup, I possess a broad skill set that allows me to
					contribute to all aspects of product development. My commitment to ongoing learning
					enables me to remain up-to-date with emerging industry trends and advancements. I am a
					dedicated team player who is always willing to take on new challenges and adapt to
					evolving project requirements.
				</p>
			</section>

			<div class="separator" />

			<section id="experience" class="py-8">
				<h2 class="text-2xl font-bold text-primary uppercase">Experience</h2>
				<div class="mt-4">
					<div class="text-xl text-primary">PointMotion Inc.</div>
					<div class="grid grid-rows-1 grid-flow-col">
						<div class="text-lg text-gray-200">Software Development Engineer</div>
						<div class="text-md font-bold text-right date px-4 text-gray-200">
							August 2022 - Present
						</div>
					</div>
					<div class="grid grid-rows-1 grid-flow-col">
						<div class="text-lg text-gray-200">SDE Intern</div>
						<div class="text-md font-bold text-right date px-4 text-gray-200">
							April 2022 - july 2022
						</div>
					</div>
					<div class="description">
						<div class="job-responsibilities mt-2 px-2">
							<ul class="text-gray-400 text-md">
								<li>
									Developing <span class="text-white"
										>"<a href="https://pointmotion.us/sound-health/" class="custom-underline-effect"
											>Sound Health</a
										>"</span
									>, a product that leverages motion-capture technology to analyze users' adherence
									and cognition by incorporating games and music to improve quality of life.
								</li>
								<li>
									Responsible for building and maintaining APIs for Object overlay games, including
									APIs for Animations, Game logic, Collision detection and Music, contributing to
									seamless game-play experiences.
								</li>
								<li>
									Designed and developed a user-friendly mobile application that can be used as a
									remote control to manipulate the games, which helped in improving the efficiency
									and effectiveness of testing processes.
								</li>
								<li>
									Contributed to the development of a chrome extension for user testers to easily
									record and share videos.
								</li>
								<li>
									Contributed to the development of a desktop application to automate system
									accuracy testing and eliminated the need for manual testing efforts.
								</li>
								<li>
									Worked on planning and Implementation of the back-end infrastructure for Stripe
									payment systems for the entire platform that encompass various functionalities
									such as subscription plans, automated payments, and coupon systems.
								</li>
								<li>
									Worked on the back-end implementation of diverse systems, including
									authentication, analytics, and rewards systems.
								</li>
								<li>
									Translated various product designs to responsive UI using Angular, Bootstrap, and
									SCSS on the front-end.
								</li>
								<li>
									Created comprehensive technical documentation and videos outlining the
									functionality of select features.
								</li>
								<li>
									Extensively collaborated with design, product, and business teams to understand
									their needs and develop successful features.
								</li>
								<li>
									Skills: Angular, Bootstrap, Phaser3, PostgreSQL, GraphQL, Hasura, NestJS, Ionic,
									Tauri, Rust, AWS Cloud Services (S3, SNS, Pinpoint), Novu, Stripe, Google
									Analytics, Mediapipe.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="mt-4">
					<div class="text-xl text-primary">CodeTantra</div>
					<div class="grid grid-rows-1 grid-flow-col">
						<div class="text-lg text-gray-200">Intern</div>
						<div class="text-md font-bold text-right date px-4 text-gray-200">
							May 2021 - August 2021
						</div>
					</div>
					<div class="description">
						<div class="job-responsibilities mt-2 px-2">
							<ul class="text-gray-400">
								<li>
									Contributed to the development of a platform that helped various educational
									institutions across India in facilitating online classes, exams, courses, and
									performance reports.
								</li>
								<li>Contributed to the development of automated and manual proctoring systems.</li>
								<li>
									Responsible for back-end implementation and maintenance of diverse systems,
									including Attendance management, Reports, Question banks and certificate systems.
								</li>
								<li>Translated various product designs to responsive UI.</li>
								<li>Skills: ReactJs, Spring Boot, Java, MongoDB, Docker</li>
							</ul>
						</div>
						<!-- Add more timeline items as needed -->
					</div>
				</div>
			</section>

			<div class="separator" />

			<section id="education" class="py-8">
				<h2 class="text-2xl font-bold text-primary uppercase">Education</h2>

				<div class="mt-4">
					<div class="text-xl text-primary">RGUKT-IIIT, Srikakulam</div>
					<div class="grid grid-rows-1 grid-flow-col">
						<div class="text-lg text-gray-200">B.Tech in Computer Science and Engineering</div>
						<div class="text-md font-bold text-right date px-4 text-gray-200">
							june 2018 - may 2022
						</div>
					</div>
					<div class="description">
						<div class="job-responsibilities mt-2 px-2">
							<ul class="text-gray-400">
								<li>
									Relevant Coursework: Data Structures and Algorithms, Structured Programming
									Approach, Database Management System, Computer Networks, Software Engineering,
									Compiler Design, DAA
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<div class="separator" />

			<section id="projects" class="py-8">
				<h2 class="text-2xl font-bold text-primary mb-6 uppercase">Projects</h2>
				<div class="project-list text-gray-300">
					{#each projects as { name, description, github, demo }, i}
						<div class="project-card bg-gray-800">
							<h3 class="project-title">{name}</h3>
							<p class="project-description text-gray-400">
								{description}
							</p>
							<div class="project-links">
								{#if github}
									<a
										class="primary-outline button !px-[0.4rem] !py-[0.3rem] !bg-gray-800 github-links"
										href={github}
										target="_blank"
										rel="noopener noreferrer">GitHub</a
									>
								{/if}
								{#if demo}
									<a
										class="primary-outline button !px-[0.4rem] !py-[0.3rem] !bg-gray-800"
										href={demo}
										target="_blank"
										rel="noopener noreferrer">Demo</a
									>
								{/if}
							</div>
						</div>
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
						href="mailto:mohan.vsnvm@gmail.com"
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

<!-- <div class="quick-actions-wrapper">
	<Icon icon="user-cicle-solid" class="absolute z-10 right-[50%] bottom-[50%]" type="solid" />
	<input type="checkbox" name="quick-actions-toggle" class="quick-actions-toggle" />
	<a class="quick-actions-button" href="#!"><i class="fas fa-bolt" /></a>
	<ul class="quick-actions-list">
		<li><a href="#about">About</a></li>
		<li><a href="#experience">Experience</a></li>
		<li><a href="#education">Education</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact-me">Contact Me</a></li>
	</ul>
</div> -->

<style lang="scss">
	/* Modify the scrollbar track */
	::-webkit-scrollbar {
		height: 0px;
		width: 1px; /* Set the width of the scrollbar */
	}

	/* Customize the scrollbar thumb */
	::-webkit-scrollbar-thumb {
		background: $primary; /* Set the gradient colors for the thumb */
		border-radius: 5px; /* Set the border radius of the thumb */
	}

	/* Customize the scrollbar track */
	::-webkit-scrollbar-track {
		background: $dark; /* Set the background color of the track */
	}

	.primary-outline {
		// box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
		@apply text-white border-2 border-primary;
	}
	.fill-down:hover {
		transition: 550ms;
		box-shadow: inset 0 3.25rem 0 0 rgba($color: $primary, $alpha: 0.5);
	}
	.button {
		@apply px-4 py-2 font-semibold dark:bg-dark hover:scale-[1.05] duration-500 active:scale-[0.98] rounded-md hover:drop-shadow-2xl;
	}

	.name {
		letter-spacing: -1px; /* Adjust the value to reduce the space between characters */
	}

	.cust-container {
		display: grid;
		height: 100vh;
		background-color: #0f172a;
		@apply sm:w-[100vw] md:w-[100vw] lg:w-[80vw] lg:grid-cols-[0.75fr_1fr] overflow-auto;
	}

	nav {
		ul {
			li {
				margin: 6px 0px;
				a {
					text-decoration: none;
					color: $primary;
				}
			}
		}
	}

	.left {
		// position: sticky;
		// top: 0;
		// height: 100%;
		// overflow: auto;
		// padding: 1rem;

		@apply lg:sticky lg:h-full lg:top-0 lg:p-4;
	}

	.right {
		// overflow: auto;
		// padding: 1rem;
		section {
			position: relative;
			z-index: 1;
		}
		@apply lg:overflow-auto lg:p-4;
	}

	.date {
		text-transform: uppercase;
	}

	#experience {
		flex: 1;
		overflow-y: auto;
	}

	.job-responsibilities {
		ul {
			list-style-type: circle;
			padding-left: 16px;

			li {
				list-style: disc;
			}
		}
	}

	#education {
		flex: 1;
		overflow-y: auto;
	}

	.breadcrumb {
		display: flex;
		flex-direction: column;
	}

	.breadcrumb-item {
		padding-bottom: 1rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid #ccc;
	}

	.breadcrumb-item:last-child {
		padding-bottom: 0;
		margin-bottom: 0;
		border-bottom: none;
	}

	h3 {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	p {
		margin: 0.25rem 0;
	}

	.separator {
		position: relative;
		z-index: 2;
		height: 2px;
		// background-color: #ddd;
		@apply bg-gray-400;
	}

	#projects {
		flex: 1;
		overflow-y: auto;
	}

	.project-list {
		display: grid;
		// grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		@apply md:grid-cols-[repeat(2,1fr)];
	}

	.project-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		max-width: 750px;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.project-title {
		font-weight: bold;
		font-size: 18px;
		margin-bottom: 8px;
		// color: #fff;
	}

	.project-description {
		margin-bottom: 20px;
	}

	.project-links {
		margin-top: auto;
	}

	.project-links a {
		display: inline-block;
		margin-right: 10px;
	}
	project-card {
		border-radius: 4px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
	}

	.project-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.project-description {
		margin-bottom: 1rem;
	}

	.project-links {
		display: flex;
		justify-content: space-between;
	}

	.active {
		font-weight: bold;
		color: #ff0000 !important; /* Update with your desired active link color */
	}
</style>
