<script>
  import { current_component } from "svelte/internal";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Bulma from '../node_modules/bulma/css/bulma.css'
</script>

<main>
  <div>

  <div class="container">
    <Navbar />
    <Counter />
    
  </div>
  <div class="columns">
    <div class="column">
      First column
    </div>
    <div class="column">
      Second column
    </div>
    <div class="column">
      Third column
    </div>
    <div class="column">
      Fourth column
    </div>
  </div>



</main>

<style>

</style>
