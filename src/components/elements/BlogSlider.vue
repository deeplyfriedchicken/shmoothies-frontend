<template>
  <div class="blog-post-slider">
    <slick ref="slick">
      <article class="blog-post" v-for="article in articles">
          <header>
              <figure>
                  <img src="http://placehold.it/690x460">
              </figure>
              <ul class="categories">
                  <li><a href="#">{{ article.category }}</a></li>
              </ul>
              <h3><a href="#">{{ article.title }}</a></h3>
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
import axios from 'axios'

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
  created () {
    axios.get('http://localhost:8000/api/articles')
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
        this.$refs.slick.destroy();
    }
  },
  updated () {
      if (this.$refs.slick && !this.$refs.slick.$el.classList.contains('slick-initialized')) {
          this.$refs.slick.create();
      }
  },

}
</script>
