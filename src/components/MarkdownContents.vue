<template>
  <div class="markdown-wrap">
    <vue-markdown v-if="source">{{source}}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'

function readMarkdown (name) {
  return axios.get(`/static/markdowns/${name}.md`).then(r => r.data)
}

export default {
  name: 'MDContents',
  data: function () {
    return {
      source: ''
    }
  },
  components: {
    VueMarkdown
  },
  props: {
    markdownName: String
  },
  created () {
    readMarkdown(this.markdownName).then(r => {
      this.source = r
      return r
    })
  }
}
</script>

<style>
.markdown-wrap {
  padding: 1em;
}
.markdown-wrap ul {
  list-style-position: inside;
  padding: 0;
}
.markdown-wrap a {
  text-decoration: none;
}
</style>
