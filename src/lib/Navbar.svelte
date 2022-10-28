<script>
  import { onDestroy } from "svelte/internal";
  import dataStore from "../store";
  import { es_nav_titles } from "../webContent";
  import { en_nav_titles } from "../webContent";
  import { current_nav_titles } from "../webContent";
  let time = null;
  const unsubStore = dataStore.subscribe((data) => (time = data));
  onDestroy(unsubStore);

  const change_nav_titles_to_spanish = () => {
    current_nav_titles.update(() => {
      return $es_nav_titles;
    });
  };
  const change_nav_titles_to_english = () => {
    current_nav_titles.update(() => {
      return $en_nav_titles;
    });
  };

  change_nav_titles_to_spanish();
</script>

<nav class="container is-desktop">
  <div class="columns">
    <div class="column">
      {$current_nav_titles.profile}
    </div>
    <div class="column">
      {$current_nav_titles.projects}
    </div>
    <div class="column">
      {$current_nav_titles.tecnologies}
    </div>
    <div class="column">
      {$current_nav_titles.social}
    </div>
    <div class="column">
      {$current_nav_titles.contact}
    </div>
  </div>
  <div class="columns">
    <button class="column">Change to English</button>
    <button class="column">Cambair a español</button>

  </div>
</nav>

<style>
  nav {
    background-color: rgb(148, 148, 81);
  }
</style>
