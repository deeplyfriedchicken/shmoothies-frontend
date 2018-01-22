<template>
<section class="contents-container">
  <div class="container">
    <div class="row">
      <div class="contents-inner clearfix">
        <article class="blog-post col-md-12" v-if="article">
            <header>
                <h3>{{ article.title }}</h3>
                <div class="meta">
                    <span><time :datetime="article.date_created">{{ article.date_created | moment("from", "now") }}</time></span>
                    <span>{{ article.views }} Views</span>
                </div><!-- /meta -->
                <figure v-if="article.cover_photo">
                  <img :src="article.cover_photo.url" :alt="article.cover_photo.caption">
                </figure>
            </header>
            <div class="ql-editor" v-html="article.content">
            </div><!-- /post-content -->
            <div class="post-share clearfix">
                <p class="counter"><span>{{ article.views }}</span>Views</p>
                <ul class="social-icons style2">
                    <li><a href="#"><i class="fa fa-facebook"></i>Like</a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i>Tweet</a></li>
                    <li><a href="#"><i class="fa fa-reddit"></i>Submit</a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i>Pin It</a></li>
                    <li><a href="#"><i class="fa fa-envelope-o"></i>Email</a></li>
                    <li><a href="#"><i class="fa fa-link"></i>link</a></li>
                </ul>
            </div><!-- /post-share -->
            <div class="post-meta" v-if="article.author">
                <p class="author">By: <a href="#">{{ article.author.first_name + ' ' + article.author.last_name }}</a></p>
                <div class="post-tags">
                    Tags:
                    <ul>
                      <li v-for="tag in article.tags">{{ tag.label }}</li>
                    </ul>
                </div><!-- /post-tags -->
            </div><!-- /post-meta -->
            <div class="post-author" v-if="article.author">
                <figure class="avatar">
                    <img src="/static/assets/img/misc/author.png" :alt="`article.author.first_name }} {{ article.author.last_name`">
                </figure>
                <div class="author-details">
                    <h2>{{ article.author.first_name + ' ' + article.author.last_name }}</h2>
                    <p>This is a description of the author. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae accumsan nisl. Donec at laoreet sapien, eget facilisis velit.</p>
                    <ul class="social-icons small">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    </ul>
                </div><!-- /author-details -->
            </div><!-- /post-author -->
            <related-posts :current="article.id"></related-posts>
          </article>
        </div><!-- /contents-inner -->
      </div><!-- /row -->
    </div><!-- /container -->
  </section>
</template>

<script>
import BodySidebar from '../elements/BodySidebar.vue'
import RelatedPosts from '../elements/RelatedPosts.vue'
import Comments from '../elements/Comments.vue'
import axios from '../../axios-auth'

export default {
  name: 'Article',
  components: {
    'body-sidebar': BodySidebar,
    'related-posts': RelatedPosts,
    'comments': Comments
  },
  data () {
    return {
      article: null
    }
  },
  methods: {
    getArticle () {
      axios.get('/api/articles/' + this.$route.params.article + '/', this.$store.getters.authorizationHeader)
        .then(res => {
          const data = res.data
          this.article = data
        })
        .catch(error => console.log(error))
    },
    getNextArticle (param) {
      axios.get('/api/articles/' + param + '/', this.$store.getters.authorizationHeader)
        .then(res => {
          const data = res.data
          this.article = data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.getArticle()
  },
  beforeRouteUpdate (to, from, next) {
    this.getNextArticle(to.params.article)
    next()
  }
  // mounted () {
  //   this.getArticle()
  // },
  // updated () {
  //   this.getArticle()
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../../node_modules/quill/dist/quill.core.css';
@import '../../../node_modules/quill/dist/quill.snow.css';
@import '../../../node_modules/quill/dist/quill.bubble.css';
</style>
