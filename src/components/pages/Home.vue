<template>
  <section class="contents-container">
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                <blog-slider></blog-slider>
                <blog-tabs></blog-tabs>
              </div><!-- /col-md-8 -->
              <div class="col-md-4">
                  <featured-posts></featured-posts>
                  <body-sidebar></body-sidebar>
              </div><!-- /col-md-4 -->
          </div><!-- /row -->
      </div><!-- /container -->
  </section>
</template>

<script>
import BlogSlider from '../elements/BlogSlider.vue'
import FeaturedPosts from '../elements/FeaturedPosts.vue'
import BlogTabs from '../elements/BlogTabs.vue'
import BodySidebar from '../elements/BodySidebar.vue'

export default {
  name: 'Home',
  components: {
    'blog-slider': BlogSlider,
    'featured-posts': FeaturedPosts,
    'blog-tabs': BlogTabs,
    'body-sidebar': BodySidebar
  }
}
</script>

<style>
</style>
