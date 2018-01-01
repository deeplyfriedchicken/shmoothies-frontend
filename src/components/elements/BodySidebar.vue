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
    <div class="widget widget_latest_posts_entries">
        <h5>Latest Posts</h5>
        <ul>
            <li>
                <div class="featured-image">
                    <img src="src/assets/img/blog/thumb-1.jpg" alt="Maverik Sidebar">
                </div>
                <div class="post-content">
                    <p class="post-title"><a href="#">Great Outdoor Travel Tips For Beginners</a></p>
                    <span class="category">Travel</span>
                    <span class="post-date">August 5, 2015</span>
                </div>
            </li>
            <li>
                <div class="featured-image">
                    <img src="src/assets/img/blog/thumb-2.jpg" alt="Maverik Sidebar">
                </div>
                <div class="post-content">
                    <p class="post-title"><a href="#">Denim 2015 Fall Exclusives</a></p>
                    <span class="category">Fashio</span>
                    <span class="post-date">July 27, 2015</span>
                </div>
            </li>
            <li>
                <div class="featured-image">
                    <img src="src/assets/img/blog/thumb-3.jpg" alt="Maverik Sidebar">
                </div>
                <div class="post-content">
                    <p class="post-title"><a href="#">Pacific Goods New Arrivals</a></p>
                    <span class="category">Fashio</span>
                    <span class="post-date">July 11, 2015</span>
                </div>
            </li>
        </ul>
    </div><!-- /widget -->
    <div class="widget widget_categories">
        <h5>Categories</h5>
        <ul>
            <li><a href="#">Category</a> (3)</li>
            <li><a href="#">Category</a> (10)</li>
            <li><a href="#">Category</a> (6)</li>
            <li><a href="#">Category</a> (2)</li>
            <li><a href="#">Category</a> (15)</li>
        </ul>
    </div><!-- /widget -->
    <div class="widget widget_tag_cloud">
        <h5>Tag Cloud</h5>
        <div class="tagcloud">
            <a href="#">Travel</a>
            <a href="#">Fashion</a>
            <a href="#">Automative</a>
            <a href="#">Music</a>
            <a href="#">Music</a>
            <a href="#">Automative</a>
            <a href="#">Fashion</a>
            <a href="#">Travel</a>
            <a href="#">Travel</a>
            <a href="#">Fashion</a>
            <a href="#">Automative</a>
            <a href="#">Music</a>
        </div>
    </div><!-- /widget -->
    <div class="widget widget_text">
        <h5>Basic Text</h5>
        <div class="textwidget">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div><!-- /widget -->
  </div><!-- /sidebar -->
</template>

<script>
export default {
  name: 'BodySidebar'
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
