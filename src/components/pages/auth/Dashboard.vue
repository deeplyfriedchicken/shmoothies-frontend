<template>
  <div>
    <h1>Your Articles</h1>
    <div class="contents-inner list-view clearfix" v-if="articles">
        <article class="blog-post col-md-12" v-for="(article, i) in articles">
          <div class="row">
          <div class="col-md-4">
            <router-link :to="`/admin/edit/${article.slug}`">
              <figure>
                  <img :src="article.cover_photo.url">
              </figure>
            </router-link>
          </div>
          <div class="col-md-4 text-center">
            <div class="contents">
                <header>
                    <ul class="categories">
                        <li><a href="#">{{ article.category.name }}</a></li>
                    </ul>
                    <h3><router-link :to="`admin/edit/${article.slug}`">{{ article.title }}</router-link></h3>
                    <div class="meta">
                        <span><time :datetime="article.date_created">{{ article.date_created | moment("MMMM, D YYYY") }}</time></span>
                        <span>{{ article.views }} Views</span>
                    </div><!-- /meta -->
                </header>
                <div class="post-content text-center">
                    <p>{{ article.blurb }}</p>
                </div><!-- /post-content -->
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="toggle">
              <toggle-button @change="togglePublished(i, article.slug)" :ref="article.id" :value="article.is_published" :labels="{checked: 'Published', unchecked: 'Unpublished'}" :width="150"/>
            </div>
            <div class="toggle">
              <toggle-button @change="toggleFeatured(i, article.slug)" :ref="article.id" :value="article.is_featured" :labels="{checked: 'Featured', unchecked: 'Not Featured'}" :width="150"/>
            </div>
            <button class="btn btn-primary"><router-link :to="`admin/edit/${article.slug}`">Edit</router-link></button>
          </div>
          </div>
        </article>
      </div><!-- /contents-inner -->
  </div>
</template>

<script>
import axios from '../../../axios-auth'

export default {
  name: 'Dashboard',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    togglePublished (index, slug) {
      this.articles[index].is_published = !this.articles[index].is_published
      const data = {
        is_published: this.articles[index].is_published
      }
      axios.patch(`/api/articles/${slug}/`, data, this.$store.getters.authorizationHeader)
        .then(res => {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    toggleFeatured (index, slug) {
      this.articles[index].is_featured = !this.articles[index].is_featured
      const data = {
        is_featured: this.articles[index].is_featured
      }
      axios.patch(`/api/articles/${slug}/`, data, this.$store.getters.authorizationHeader)
        .then(res => {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  created () {
    axios.get('api/articles/', this.$store.getters.authorizationHeader)
      .then(res => {
        this.articles = res.data.results
      })
  }
}
</script>

<style>
.toggle {
  padding-bottom: 10px;
}
.btn a {
  color: white;
}
</style>
