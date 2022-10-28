<script>
    
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop}  class:hidden>
    Top
</div>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
    color: black;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    border: 2px solid black;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
  .back-to-top:hover {
    font-size: larger;
    border: 3px solid black;
  }
</style>
