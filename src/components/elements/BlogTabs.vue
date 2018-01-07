<template>
<div>
  <div class="blog-tabs clearfix">
      <a href="#latest-posts" class="active" v-on:click.prevent="toggleTabs">Latest Stories</a>
      <a href="#popular-posts" v-on:click.prevent="toggleTabs">Popular Stories</a>
  </div><!-- /page-titlebar -->
  <div id="latest-posts" class="tab-contents" v-bind:class="{ 'active' : isLatest }">
    <div class="contents-inner grid-view clearfix">
      <div class="row" v-for="i in Math.ceil(latest.length / 2)">
        <article class="blog-post col-md-6 col-sm-6" v-for="article in latest.slice((i - 1) * 2, i * 2)">
            <header>
                <figure :style="`background-image: url(${ article.cover_photo.url })`">
                </figure>
                <ul class="categories">
                    <li><router-link :to="`/category/${article.category.name}`">{{ article.category.name }}</router-link></li>
                </ul>
                <h3><router-link :to="`/category/${article.category.name}/${article.slug}`">{{ article.slug }}</router-link></h3>
                <div class="meta">
                    <span><time :datetime="article.date_created">{{ article.date_created | moment("from", "now") }}</time></span>
                    <span>{{ article.views }} Views</span>
                </div><!-- /meta -->
            </header>
            <div class="post-content text-center">
                <p>{{ article.blurb }}</p>
            </div><!-- /post-content -->
        </article>
      </div>
    </div><!-- /blog-latest-posts -->
  </div>
  <div id="popular-posts" class="tab-contents" v-bind:class="{ 'active' : isPopular }">
    <div class="contents-inner grid-view clearfix">
      <div class="row" v-for="i in Math.ceil(popular.length / 2)">
        <article class="blog-post col-md-6 col-sm-6" v-for="article in popular.slice((i - 1) * 2, i * 2)">
            <header>
                <figure :style="`background-image: url(${ article.cover_photo.url })`">
                </figure>
                <ul class="categories">
                    <li><router-link :to="`/category/${article.category.name}`">{{ article.category.name }}</router-link></li>
                </ul>
                <h3><router-link :to="`/category/${article.category.name}/${article.slug}`">{{ article.slug }}</router-link></h3>
                <div class="meta">
                    <span><time :datetime="article.date_created">{{ article.date_created | moment("from", "now") }}</time></span>
                    <span>{{ article.views }} Views</span>
                </div><!-- /meta -->
            </header>
            <div class="post-content text-center">
                <p>{{ article.blurb }}</p>
            </div><!-- /post-content -->
        </article>
      </div>
    </div><!-- /blog-latest-posts -->
  </div><!-- /blog-popular-posts -->
  <div class="blog-navigation clearfix">
      <a href="#" class="ajax-load-more">Load More</a>
  </div><!-- /blog-navigation -->
</div>
</template>

<script>
import axios from '../../axios-auth'

export default {
  name: 'BlogTabs',
  data () {
    return {
      latest: [],
      popular: [],
      isLatest: true,
      isPopular: false
    }
  },
  methods: {
    toggleTabs (e) {
      e.target.classList.add('active')
      let sibling = e.target.nextElementSibling
      if (sibling) {
        this.isLatest = true
        this.isPopular = false
      } else {
        sibling = e.target.previousElementSibling
        this.isLatest = false
        this.isPopular = true
      }
      sibling.classList.remove('active')
    },
    getArticles (type) {
      const key = type === 'published' ? 'latest' : 'popular'
      axios.get(`/api/articles/list/${type}/?limit=10`)
        .then(res => {
          this[key] = res.data.results
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.getArticles('published')
    this.getArticles('popular')
  }
}
</script>

<style scoped>
.row {
  margin: 0;
}
figure {
  height: 216px;
  width: 310px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
