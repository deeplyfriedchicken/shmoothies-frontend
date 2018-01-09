<template>
  <div>
      <div class="heading clearfix">
          <a href="#">{{ this.$route.params.category }}</a>
      </div><!-- /heading -->
      <div class="contents-inner list-view clearfix">
          <div class="text-center" v-if="!articles.length > 0">
            <h1>No Articles</h1>
          </div>
          <article class="blog-post col-md-12" v-for="article in articles">
            <aside>
              <router-link :to="`/category/${article.category.name}/${article.slug}`">
                <figure>
                    <router-link :to="`/category/${article.category.name}/${article.slug}`"><img :src="article.cover_photo.url"></router-link>
                </figure>
              </router-link>
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
      <div class="blog-navigation clearfix" v-if="more">
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
      articles: [],
      more: null
    }
  },
  methods: {
    getArticles () {
      axios.get(`/api/articles/category/${this.$route.params.category}/`)
      .then(res => {
        this.more = res.next
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
    next()
  }
}
</script>
