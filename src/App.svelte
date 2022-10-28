<script>
  import { current_component } from "svelte/internal";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Bulma from '../node_modules/bulma/css/bulma.css'
</script>

<main>
  

  <div>
    <Navbar />
    <Counter />
    
  </div>

</main>

<style>

</style>
