<script>
	import LogoText from "./LogoText.svelte";
	import Image from "./Image.svelte";
	import Counter from "./Counter.svelte";

	let name = "Johan Liebert"
	let image = {
		 src : "https://c.tenor.com/FK0lBjWUL90AAAAC/johan-liebert-monster.gif",
		 alt : "liebert",
		 title: "liebert",
		 height:400,
		 width:400
	}
</script>

<main>
	<Image image={image}/>
	<LogoText name={name}/>
	<Counter/>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>