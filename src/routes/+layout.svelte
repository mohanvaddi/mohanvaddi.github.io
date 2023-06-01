<script lang="ts">
	import '$src/styles/app.scss';

	import '@fontsource/montserrat/800.css';
	import '@fontsource/inter';

	import { onMount } from 'svelte';
</script>

<html
	lang="en"
	class="dark scroll-smooth dark:selection:bg-primary dark:selection:text-gray-700 dark:antialiased"
>
	<!-- <Header {nav} /> -->
	<slot />
	<!-- <Footer {footerLinks} /> -->
</html>
