<script>
  import { onDestroy } from "svelte/internal";
  import dataStore from "../store";
  import {es_nav_titles} from "../webContent";
  import {en_nav_titles} from "../webContent";
  import {current_nav_titles} from "../webContent";
  let time = null;
  const unsubStore = dataStore.subscribe((data) => (time = data));
  onDestroy(unsubStore);
  
  const change_nav_titles_to_spanish = () =>{ current_nav_titles.update(()=> {return $es_nav_titles})}
  const change_nav_titles_to_english = () =>{  current_nav_titles.update(() => {return $en_nav_titles})}
  
  change_nav_titles_to_spanish()


</script>

<nav class="navbar">
  <div>
    {$current_nav_titles.profile}
  </div>
  <div>
    {$current_nav_titles.projects}
  </div>
  <div>
    {$current_nav_titles.tecnologies}
  </div>
  <div>
    {$current_nav_titles.social}
    <div>
        {$current_nav_titles.contact}
    </div>
  </div>

  <button class="button is-primary">Primary</button>
</nav>
<style>
    nav {
        background-color: rgb(148, 148, 81);
        width:400px;
    }
</style>
