<template>
  <div>
      <div class="heading clearfix">
          <a href="#">{{ this.$route.params.category }}</a>
      </div><!-- /heading -->
      <div class="contents-inner list-view clearfix" v-if="articles">
          <article class="blog-post col-md-12" v-for="article in articles">
              <aside>
                  <figure>
                      <router-link :to="`/category/${article.category.name}/${article.slug}`"><img :src="article.cover_photo.url"></router-link>
                  </figure>
              </aside>
              <div class="contents">
                  <header>
                      <ul class="categories">
                          <li><router-link :to="`/category/${article.category.name}`">{{ article.category.name }}</router-link></li>
                      </ul>
                      <h3><router-link :to="`/category/${article.category.name}/${article.slug}`">{{ article.title }}</router-link></h3>
                      <div class="meta">
                          <span><time :datetime="article.date_created">{{ article.date_created | moment("from", "now") }}</time></span>
                          <span>{{ article.views }} Views</span>
                      </div><!-- /meta -->
                  </header>
                  <div class="post-content text-center">
                      <p>{{ article.blurb }}</p>
                  </div><!-- /post-content -->
              </div>
          </article>
      </div><!-- /contents-inner -->
      <div class="blog-navigation clearfix">
          <a href="#" class="ajax-load-more">Load More</a>
      </div><!-- /blog-navigation -->
  </div><!-- /col-md-8 -->
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: 'PageCategory',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      axios.get(`/api/articles/list/published/?search=${this.$route.params.query}`)
      .then(res => {
        const data = res.data
        this.articles = data.results
      })
      .catch(error => console.log(error))
    }
  },
  created () {
    this.getArticles()
  },
  beforeRouteUpdate (to, from, next) {
    this.articles = null
    this.getArticles()
    next()
  }
}
</script>
