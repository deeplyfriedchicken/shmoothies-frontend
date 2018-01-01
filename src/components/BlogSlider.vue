<template>
  <div class="blog-post-slider">
    <slick>
    <article class="blog-post">
        <header>
            <figure>
                <img src="http://placehold.it/690x460">
            </figure>
            <ul class="categories">
                <li><a href="#">Fashion</a></li>
            </ul>
            <h3><a href="#">An Exclusive First Look At  Woodcrest &amp; Co.’s Summer Vintage Collection</a></h3>
        </header>
        <footer>
            <div class="meta">
                <span><time datetime="2015-09-03">July 03, 2015</time></span>
                <span>6052 Views</span>
                <span><a href="#">8 Comments</a></span>
            </div><!-- /meta -->
        </footer>
    </article>
    <article class="blog-post">
        <header>
            <figure>
                <img src="http://placehold.it/690x460">
            </figure>
            <ul class="categories">
                <li><a href="#">Fashion</a></li>
            </ul>
            <h3><a href="#">An Exclusive First Look At  Woodcrest &amp; Co.’s Summer Vintage Collection</a></h3>
        </header>
        <footer>
            <div class="meta">
                <span><time datetime="2015-09-03">July 03, 2015</time></span>
                <span>6052 Views</span>
                <span><a href="#">8 Comments</a></span>
            </div><!-- /meta -->
        </footer>
    </article>
    <article class="blog-post">
        <header>
            <figure>
                <img src="http://placehold.it/690x460">
            </figure>
            <ul class="categories">
                <li><a href="#">Fashion</a></li>
            </ul>
            <h3><a href="#">An Exclusive First Look At  Woodcrest &amp; Co.’s Summer Vintage Collection</a></h3>
        </header>
        <footer>
            <div class="meta">
                <span><time datetime="2015-09-03">July 03, 2015</time></span>
                <span>6052 Views</span>
                <span><a href="#">8 Comments</a></span>
            </div><!-- /meta -->
        </footer>
    </article>
    </slick>
  </div><!-- /slider -->
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'BlogSlider',
  components: {
    Slick
  }

}
</script>
