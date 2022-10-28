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
      <p class="title-text title-text-profile">
        {$current_nav_titles.profile}
      </p>
    </div>
    <div class="column">
      <p class="title-text title-text-projects">
        {$current_nav_titles.projects}
      </p>
    </div>
    <div class="column">
      <p class="title-text title-text-tecnologies">
        {$current_nav_titles.tecnologies}
      </p>
    </div>
    <div class="column">
      <p class="title-text title-text-social" >
        {$current_nav_titles.social}
      </p>
    </div>
    <div class="column">
      <p class="title-text title-text-contact">
        {$current_nav_titles.contact}
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <button on:click={change_nav_titles_to_english} class="">Change to English</button>
      <button on:click={change_nav_titles_to_spanish} class="">Cambiar a español</button>
    </div>

  </div>
</nav>

<style>
  nav{
    margin-bottom: 20px;
  }
  .title-text{
    font-family: Impact, Charcoal, sans-serif;
    font-size: 23px;
    letter-spacing: 1px;
    word-spacing: 0px;
    color: rgb(0, 0, 0);
    font-weight: 700;
    text-decoration: underline solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    transition: opacity 0.5s, visibility 0.5s;
  }
  .title-text-profile:hover{
    font-size: 25px;
    background-color: rgb(187, 187, 187);
    text-decoration: underline solid rgb(68, 68, 68);
  }
  .title-text-projects:hover{
    font-size: 25px;
    color :var(--color-primary-0);
    background-color: var(--color-primary-1);
    text-decoration: underline solid var(--color-primary-0);
  }
  .title-text-tecnologies:hover{
    font-size: 25px;
    color :var(--color-secondary-0);
    background-color: var(--color-secondary-1);
    text-decoration: underline solid var(--color-secondary-0);
  }
  .title-text-social:hover{
    font-size: 25px;
    color :var(--color-terciary-0);
    background-color: var(--color-terciary-1);
    text-decoration: underline solid var(--color-terciary-0);
  }
  .title-text-contact:hover{
    font-size: 25px;
    color :var(--color-complement-0);
    background-color: var(--color-complement-1);
    text-decoration: underline solid var(--color-complement-0);
  }
  button{
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: opacity 0.5s, visibility 0.5s;
  }
  button:hover{
    background-color: black;
    color: white;
    border: 2px solid white;
  }

</style>
