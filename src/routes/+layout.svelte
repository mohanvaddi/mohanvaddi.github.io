<script lang="ts">
	import '$src/styles/_variables.scss';
	import '$src/styles/app.scss';
	import '@fontsource/montserrat/800.css';
	import '@fontsource/inter';
</script>

<html
	lang="en"
	class="dark scroll-smooth dark:selection:bg-primary dark:selection:text-gray-800 dark:antialiased bg-dark"
>
	<slot />
</html>
