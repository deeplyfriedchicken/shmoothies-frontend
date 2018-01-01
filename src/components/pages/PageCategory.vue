<template>
  <div>
      <div class="heading clearfix">
          <a href="#">{{ this.$route.params.category }}</a>
      </div><!-- /heading -->
      <div class="contents-inner list-view clearfix">
          <article class="blog-post col-md-12">
              <aside>
                  <figure>
                      <img src="http://placehold.it/330x230">
                  </figure>
              </aside>
              <div class="contents">
                  <header>
                      <ul class="categories">
                          <li><a href="#">Fashion</a></li>
                      </ul>
                      <h3><a href="#">Tres Bella Introduces The All New Low Cut Boot Collection</a></h3>
                      <div class="meta">
                          <span><time datetime="2015-09-03">July 03, 2015</time></span>
                          <span>6052 Views</span>
                          <span><a href="#">8 Comments</a></span>
                      </div><!-- /meta -->
                  </header>
                  <div class="post-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                  </div><!-- /post-content -->
              </div>
          </article>
          <article class="blog-post col-md-12">
              <aside>
                  <figure>
                      <img src="http://placehold.it/330x230">
                  </figure>
              </aside>
              <div class="contents">
                  <header>
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
              </div>
          </article>
          <article class="blog-post col-md-12">
              <aside>
                  <figure>
                      <img src="http://placehold.it/330x230">
                  </figure>
              </aside>
              <div class="contents">
                  <header>
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
              </div>
          </article>
      </div><!-- /contents-inner -->
      <div class="blog-navigation clearfix">
          <a href="#" class="ajax-load-more">Load More</a>
      </div><!-- /blog-navigation -->
  </div><!-- /col-md-8 -->
</template>

<script>
import BodySidebar from '../elements/BodySidebar.vue'

export default {
  name: 'PageCategory',
  components: {
    'body-sidebar': BodySidebar
  }
}
</script>
