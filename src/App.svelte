<script>
  import { current_component } from "svelte/internal";
  import {current_nav_titles} from './webContent.js'
  import {color_primary_1, color_secondary_1, color_terciary_1, color_complement_1} from './colorsContent'

  import Navbar from "./lib/Navbar.svelte";
  import Profile from "./lib/Profile.svelte";
  import BackTotop from "./lib/BackTotop.svelte"; 
  import CardSection from "./lib/CardSection.svelte";
  import Bulma from '../node_modules/bulma/css/bulma.css';



</script>

<main>
  
    <Navbar />
    <Profile/>
    <CardSection titleCard={$current_nav_titles.projects} colorCard={$color_primary_1}/>
    <CardSection titleCard={$current_nav_titles.tecnologies} colorCard={$color_secondary_1}/>
    <CardSection titleCard={$current_nav_titles.social} colorCard={$color_terciary_1}/>
    <CardSection titleCard={$current_nav_titles.contact} colorCard={$color_complement_1}/>

    <BackTotop/>

</main>

<style>

</style>
