<template>
  <div class="widget widget_categories">
    <h5>Categories</h5>
    <ul>
        <li v-for="category in categories"><a href="#">{{ category.name }}</a></li>
    </ul>
  </div><!-- /widget -->
</template>

<script>
import axios from '../../../axios-auth'

export default {
  name: 'CategoriesWidget',
  data () {
    return {
      categories: []
    }
  },
  created () {
    axios.get('/api/category/')
      .then(res => {
        this.categories = res.data.results
      })
  }
}
</script>
