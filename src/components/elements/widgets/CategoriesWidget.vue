<template>
  <div class="widget widget_categories">
    <h5>Categories</h5>
    <ul>
        <li v-if="category.count > 0" v-for="category in categories">
          <router-link :to="`/category/${category.name}`">{{ category.name | capitalize }}</router-link> ({{ category.count }})
        </li>
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
      .catch(error => console.log(error))
  }
}
</script>
