<script lang="ts">
	import '../app.css'
	let { children } = $props();
</script>

<svelte:head>
	<title>Weducation</title>
	<meta name="description" content="Site usado para testes" />
</svelte:head>

{@render children()}
