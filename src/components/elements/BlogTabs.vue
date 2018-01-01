<template>
<div>
  <div class="blog-tabs clearfix">
      <a href="#latest-posts" class="active" v-on:click.prevent="toggleTabs">Latest Stories</a>
      <a href="#popular-posts" v-on:click.prevent="toggleTabs">Popular Stories</a>
  </div><!-- /page-titlebar -->
  <div id="latest-posts" class="tab-contents" v-bind:class="{ 'active' : latest }">
      <div class="contents-inner grid-view clearfix">
        <div class="row">
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Fashion</a></li>
                  </ul>
                  <h3><a href="#">Vintage Supply Co. Unveils All New Fall Collection</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Travel</a></li>
                  </ul>
                  <h3><a href="#">Exploring The Great Northwest</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div><!-- /post-content -->
          </article>
        </div>
        <div class="row">
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Food</a></li>
                  </ul>
                  <h3><a href="#">The Best Eateries In New York City</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Lifestyle</a></li>
                  </ul>
                  <h3><a href="#">Exclusive Interview With Pro Skater Derrick Johnson</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
              </div><!-- /post-content -->
          </article>
        </div>
      </div><!-- /contenblog-popular-poststs-inner -->
  </div><!-- /blog-latest-posts -->
  <div id="popular-posts" class="tab-contents" v-bind:class="{ 'active' : popular }">
      <div class="contents-inner grid-view clearfix">
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Fashion</a></li>
                  </ul>
                  <h3><a href="#">BIRBTres Bella Introduces The All New Low Cut Boot Collection</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Lifestyle</a></li>
                  </ul>
                  <h3><a href="#">Exclusive Interview With Pro Skater Derrick Johnson</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Food</a></li>
                  </ul>
                  <h3><a href="#">The Best Eateries In New York City</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Desgin</a></li>
                  </ul>
                  <h3><a href="#">Innovative Standing Desk &amp; Bike Rack by Artifox</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Travel</a></li>
                  </ul>
                  <h3><a href="#">Exploring The Great Northwest</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div><!-- /post-content -->
          </article>
          <article class="blog-post col-md-6 col-sm-6">
              <header>
                  <figure>
                      <img src="http://placehold.it/310x216">
                  </figure>
                  <ul class="categories">
                      <li><a href="#">Fashion</a></li>
                  </ul>
                  <h3><a href="#">Vintage Supply Co. Unveils All New Fall Collection</a></h3>
                  <div class="meta">
                      <span><time datetime="2015-09-03">July 03, 2015</time></span>
                      <span>6052 Views</span>
                      <span><a href="#">8 Comments</a></span>
                  </div><!-- /meta -->
              </header>
              <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
              </div><!-- /post-content -->
          </article>
      </div><!-- /contents-inner -->
  </div><!-- /blog-popular-posts -->
  <div class="blog-navigation clearfix">
      <a href="#" class="ajax-load-more">Load More</a>
  </div><!-- /blog-navigation -->
</div>
</template>

<script>
export default {
  name: 'BlogTabs',
  data () {
    return{
      latest: true,
      popular: false
    }
  },
  methods: {
    toggleTabs (e) {
      e.target.classList.add('active')
      let sibling = e.target.nextElementSibling
      if (sibling) {
        this.latest = true
        this.popular = false
      }
      else {
        sibling = e.target.previousElementSibling
        this.latest = false
        this.popular = true
      }
      sibling.classList.remove('active')
      console.log(this.latest)
    }
  },
}
</script>

<style scoped>
.row {
  margin: 0;
}
</style>
