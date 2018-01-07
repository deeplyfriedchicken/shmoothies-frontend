<template>
  <div class="widget widget_latest_posts_entries">
    <h5>Latest Posts</h5>
    <ul>
        <li v-for="article in articles">
          <div class="featured-image">
            <router-link :to="`/category/${article.category.name}/${article.slug}`"><img :src="article.cover_photo.url"></router-link>
          </div>
          <div class="post-content">
              <p class="post-title"><router-link :to="`/category/${article.category.name}/${article.slug}`">{{ article.title }}</router-link></p>
              <span class="category">{{ article.category.name | capitalize }}</span>
              <span class="post-date">{{ article.date_created | moment("from", "now") }}</span>
          </div>
        </li>
    </ul>
  </div><!-- /widget -->
</template>

<script>
import axios from '../../../axios-auth'

export default {
  name: 'LatestPostsWidget',
  data () {
    return {
      articles: []
    }
  },
  created () {
    axios.get('/api/articles/list/published/?limit=3')
      .then(res => {
        const data = res.data
        this.articles = data.results
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
.featured-image img {
  width: 90px;
}
</style>
