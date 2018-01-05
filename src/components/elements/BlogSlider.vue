<template>
  <div class="blog-post-slider">
    <slick ref="slick">
      <article class="blog-post" v-if="articles" v-for="article in articles">
          <header>
              <figure>
                  <img src="http://placehold.it/690x460">
              </figure>
              <ul class="categories">
                  <li><router-link :to="`category/${article.category.name.toLowerCase()}`">{{ article.category.name }}</router-link></li>
              </ul>
              <h3><router-link :to="`category/${article.category.name.toLowerCase()}/${article.slug}`">{{ article.title }}</router-link></h3>
          </header>
          <footer>
              <div class="meta">
                  <span><time datetime="2015-09-03">July 03, 2015</time></span>
                  <span>{{ article.views }} Views</span>
                  <span><a href="#">{{ article.shares }} shares</a></span>
              </div><!-- /meta -->
          </footer>
          <div class="post-content">
              <p>{{ article.blurb }}</p>
          </div><!-- /post-content -->
      </article>
    </slick>
  </div><!-- /slider -->
</template>

<script>
import Slick from 'vue-slick'
import axios from '../../axios-auth'

export default {
  name: 'BlogSlider',
  components: {
    Slick
  },
  data () {
    return {
      articles: []
    }
  },
  // All slick methods can be used too, example here
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick()
    }
  },
  created () {
    axios.get('/api/articles')
      .then(res => {
        console.log(res)
        const data = res.data
        this.articles = data
        console.log(this.articles)
      })
      .catch(error => console.log(error))
  },
  beforeUpdate () {
    if (this.$refs.slick) {
      this.$refs.slick.destroy()
    }
  },
  updated () {
    if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
      this.$refs.slick.create()
    }
  }
}
</script>
