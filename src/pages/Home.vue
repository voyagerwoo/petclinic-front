<template>
  <div class="home">
    <markdown-contents markdown-name="home"></markdown-contents>
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
<style>
.home img {
  max-width: 100%;
  height: auto;
}
</style>
