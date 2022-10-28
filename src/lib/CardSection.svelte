<script>
    export let titleCard;
    export let colorCard;


</script>
<section style:background-color={colorCard} class="section container">

      <div class="title-text">{titleCard}</div>
      <hr/>


  </section>

  <style>
      .section {
    min-height: 80vh;
    background-color: rgb(209, 207, 207);
    border-radius: 10px;
    margin: 10px 0 10px 0;
    padding: 5px;
  }
  .title-text{
    font-size: larger;
    font-weight: 700;
    letter-spacing: 1.2px;
  }
  hr {
    width: 80%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid rgb(104, 104, 104);
    margin: 1em auto;
    padding: 0;
}
  </style>