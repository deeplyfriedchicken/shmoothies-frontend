<template>
  <div>
    <div class="blog-post-slider">
      <slick ref="slick">
        <article class="blog-post" v-for="article in articles">
          <header>
              <router-link :to="`category/${ article.category.name.toLowerCase()}/${ article.slug }`">
                <figure class="slick" :style="`background-image: url(${ article.cover_photo.url })`">
                </figure>
              </router-link>
              <ul class="categories">
                  <li><router-link :to="`category/${ article.category.name.toLowerCase() }`">{{ article.category.name }}</router-link></li>
              </ul>
              <h3><router-link :to="`category/${ article.category.name.toLowerCase()}/${ article.slug }`">{{ article.title }}</router-link></h3>
          </header>
          <footer>
              <div class="meta text-center">
                  <span><time :datetime="article.date_created">{{ article.date_created | moment("from", "now") }}</time></span>
                  <span>{{ article.views }} Views</span>
              </div><!-- /meta -->
          </footer>
          <div class="post-content text-center">
              <p>{{ article.blurb }}</p>
          </div><!-- /post-content -->
        </article>
      </slick>
    </div>
    <blog-tabs></blog-tabs>
  </div>
</template>

<script>
import FeaturedPosts from '../elements/FeaturedPosts.vue'
import BlogTabs from '../elements/BlogTabs.vue'
import Slick from '../elements/widgets/VueSlick.vue'

import axios from '../../axios-auth'

export default {
  name: 'Home',
  components: {
    'featured-posts': FeaturedPosts,
    'blog-tabs': BlogTabs,
    Slick
  },
  data () {
    return {
      articles: []
    }
  },
  props: ['full'],
  watch: {
    full () {
      this.reInit()
    }
  },
  methods: {
    reInit () {
      let currIndex = this.$refs.slick.currentSlide()
      this.$refs.slick.destroy()
      this.$nextTick(() => {
        this.$refs.slick.create()
        this.$refs.slick.goTo(currIndex, true)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('/api/articles/list/featured/')
      .then(res => {
        next(vm => {
          const data = res.data
          vm.articles = data.results
          vm.reInit()
        })
      })
      .catch(error => console.log(error))
  }
}
</script>

<style>
figure {
  margin-bottom: 20px;
}
figure.slick {
  height: 400px;
  background-position: 50% 50%;
  background-size: cover;
}
.slick-parent {
  min-height: 0;
  min-width: 0;
}
</style>
