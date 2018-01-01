<template>
  <div class="sidebar">
    <div class="widget widget_search">
        <form role="search" class="search-form" action="#">
            <input type="search" class="search-field" name="s" title="Search for:" placeholder="Search…">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div><!-- /widget -->
    <div class="widget widget_socials">
        <h5>Social Media</h5>
        <ul class="social-icons small">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
            <li><a href="#"><i class="fa fa-vine"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-envelope-o"></i></a></li>
        </ul>
    </div><!-- /widget -->
    <latest-posts-widget></latest-posts-widget>
    <categories-widget></categories-widget>
    <tag-cloud-widget></tag-cloud-widget>
    <basic-text-widget></basic-text-widget>
  </div><!-- /sidebar -->
</template>

<script>
import CategoriesWidget from './widgets/CategoriesWidget.vue'
import LatestPostsWidget from './widgets/LatestPostsWidget.vue'
import TagCloudWidget from './widgets/TagCloudWidget.vue'
import BasicTextWidget from './widgets/BasicTextWidget.vue'

export default {
  name: 'BodySidebar',
  components: {
    'categories-widget': CategoriesWidget,
    'latest-posts-widget': LatestPostsWidget,
    'tag-cloud-widget': TagCloudWidget,
    'basic-text-widget': BasicTextWidget
  }
}
</script>

<style scoped>
  .widget_search form button {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 0;
    background: transparent;
    border: none;
    transform: translateY(-50%)
  }
</style>
