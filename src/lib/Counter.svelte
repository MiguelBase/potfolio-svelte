<script>
  import {es_nav_titles} from "../webContent";
  import {en_nav_titles} from "../webContent";
  import {current_nav_titles} from "../webContent";

  let count = 0;
  const increment = () => {
    count += 2;
    current_nav_titles.update(() => {return $en_nav_titles})
  };

const des = () =>{
  current_nav_titles.update(()=> {return $es_nav_titles})
}
</script>

<button on:click={increment}>
  count is {count}

</button>
<button on:click={des}>
  Change to spanish
</button>
