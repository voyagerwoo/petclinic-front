<template>
  <div class="pet-pictures">
    <div class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">펫 사진</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="header">
        <div class="media">
          <div class="media-content has-text-centered">
            <p class="title is-4">창가의 고양이</p>
            <p class="subtitle is-6">@catbrother</p>
          </div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img class="container" src="/static/images/cat.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="like-wrap has-text-centered">
            <a class="" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true" style="color:hsl(348, 100%, 61%);"></i>
                <!--<i class="far fa-heart" aria-hidden="true" style="color:hsl(348, 100%, 61%);"></i>-->
              </span>
            </a>
            <strong>32 Likes</strong>
          </div>
          <div class="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>.
            <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br>
            <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
          </div>
        </div>
      </div>
      <!--
      TODO comments
      <div class="card-footer">
        <div class="columns is-mobile">
          <div class="column is-11">
            <div class="field">
              <div class="control">
                <input class="input is-medium" type="text" placeholder="Add a comment . . .">
              </div>
            </div>
          </div>
          <div class="column has-text-centered">
            <button class="button">
              <i class="material-icons">more_horiz</i>
            </button>
          </div>
        </div>
      </div>
      -->
    </div>

    <div class="card">
      <div class="header">
        <div class="media">
          <div class="media-content has-text-centered">
            <p class="title is-4">창가의 고양이</p>
            <p class="subtitle is-6">@catbrother</p>
          </div>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img class="container" src="/static/images/cat.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="like-wrap has-text-centered">
            <a class="" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true" style="color:hsl(348, 100%, 61%);"></i>
                <!--<i class="far fa-heart" aria-hidden="true" style="color:hsl(348, 100%, 61%);"></i>-->
              </span>
            </a>
            <strong>32 Likes</strong>
          </div>
          <div class="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>.
            <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br>
            <time datetime="2018-1-1">11:09 PM - 1 Jan 2018</time>
          </div>
        </div>
      </div>
      <!--
      TODO comments
      <div class="card-footer">
        <div class="columns is-mobile">
          <div class="column is-11">
            <div class="field">
              <div class="control">
                <input class="input is-medium" type="text" placeholder="Add a comment . . .">
              </div>
            </div>
          </div>
          <div class="column has-text-centered">
            <button class="button">
              <i class="material-icons">more_horiz</i>
            </button>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
  import MarkdownContents from '../components/MarkdownContents'

  export default {
    components: {
      MarkdownContents
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media-content {
    padding: 2em 1em 1em 1em
  }

  .card-content {
    padding: 1em
  }

  .text-wrap {
    padding: 1em;
  }

  .image>img {
    max-width: 100%;
    width: auto;
    max-height: 95vh;
  }

  .card {
    margin-bottom: 3em;
  }
</style>
