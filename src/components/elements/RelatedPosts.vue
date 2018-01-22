<template>
  <div class="related-posts">
    <h6>YOU MIGHT ALSO LIKE</h6>
    <div class="row">
        <article class="blog-post col-md-4" v-for="(article, i) in relatedArticles"
          v-bind:item="article"
          v-bind:index="i"
          v-bind:key="article.id">
          <header>
              <router-link :to="`/category/${ article.category.name.toLowerCase()}/${ article.slug }`">
                <figure class="bg" :style="`background-image: url(${ article.cover_photo.url })`">
                </figure>
              </router-link>
              <h3><router-link :to="`/category/${ article.category.name.toLowerCase()}/${ article.slug }`">{{ article.title }}</router-link></h3>
              <div class="meta">
                  <span>{{ article.category.name }}</span>
                  <span><time :datetime="article.date_created">{{ article.date_created | moment("from", "now") }}</time></span>
              </div><!-- /meta -->
          </header>
        </article>
    </div><!-- /row -->
  </div><!-- /related-posts -->
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: 'RelatedPosts',
  data () {
    return {
      articles: []
    }
  },
  props: ['current'],
  methods: {
    checkArticles (article, index) {
      if (article.id === this.current) {
        this.articles.splice(index, 1)
      }
    }
  },
  computed: {
    relatedArticles () {
      this.articles.forEach(this.checkArticles)
      return this.articles.slice(0, 3)
    }
  },
  created () {
    axios.get(`/api/articles/list/random/`)
      .then(res => {
        const data = res.data
        this.articles = data.results
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
figure.bg {
  height: 200px;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
