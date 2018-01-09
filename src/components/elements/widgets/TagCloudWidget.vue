<template>
  <div class="widget widget_tag_cloud">
    <h5>Tag Cloud</h5>
    <div class="tagcloud">
        <router-link v-for="tag in tags" v-bind:key="tag.id" :to="`/search/${tag.label}`">{{ tag.label }}</router-link>
    </div>
  </div><!-- /widget -->
</template>

<script>
import axios from '../../../axios-auth'
export default {
  name: 'TagCloudWidget',
  data () {
    return {
      tags: []
    }
  },
  created () {
    axios.get('/api/tags/')
      .then(res => {
        this.tags = res.data.results
      })
  }
}
</script>
