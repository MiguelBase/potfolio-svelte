<script>
    import {current_nav_titles} from '../webContent'
</script>
<section class="section-profile container">
  <div class="">
    <div class="profile-image">
      <figure class="image is-2by5">
        <img class="is-rounded" src="public\profile.jfif" />
      </figure>
    </div>
    <div class="profile-name">Miguel Victor Huayllas Choque</div>
    <hr/>
    <div class="profile-about">
{$current_nav_titles.about_me}
    </div>
  </div>
</section>

<style>
  .section-profile {
    min-height: 80vh;
    background-color: rgb(209, 207, 207);;
    border-radius: 10px;
    margin: 10px 0 10px 0;
    padding: 5px;
  }
  .profile-image {
    width: 40%;
    margin: 0 auto;
    border-radius: 240px;
    border: 5px solid white;
    
  }
  .profile-name{
    font-size: larger;
    font-weight: 700;
    letter-spacing: 1.2px;
    
  }
  .profile-about{
    padding: 0 20px ;
    margin-top: 20px;
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
