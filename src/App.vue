<template>
  <div id="app">
    <router-link v-if="!authenticated" to="/login" id="login"><i class="fa fa-github-alt"></i></router-link>
    <router-link v-if="authenticated" to="/admin" id="login"><i class="fa fa-tachometer "></i></router-link>
    <div class="sticky-nav" v-bind:class="{ 'sticky-nav-showing': scrolled }">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <a href="#" class="nav-trigger" if="sticky-is-true" v-on:click.prevent="showSidebar">
              <span class="bars sticky">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <div class="logo-container">
              <a href="#">
                <img src="/src/assets/img/logo/shmoothies-logo3.png" alt="Shmoothies Logo">
              </a>
            </div><!-- /logo-container -->
            <ul class="main-nav-items"><!-- Stick Nav Items! -->
              <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
              <router-link to="/category/smoothies/first-article" tag="li" active-class="active"><a>Smoothies</a></router-link>
              <router-link to="/admin" tag="li" active-class="active"><a>Desserts</a></router-link>
              <router-link to="/category/entrees" tag="li" active-class="active"><a>Entrées</a></router-link>
              <router-link to="/category/snacks" tag="li" active-class="active"><a>Snacks</a></router-link>
              <router-link to="/category/reviews" tag="li" active-class="active"><a>Reviews</a></router-link>
              <router-link to="/category/netflix" tag="li" active-class="active"><a>Netflix</a></router-link>
              <li class="has-children">
                  <a href="#">More</a>
                  <ul>
                      <router-link to="/category/music" tag="li" active-class="active"><a>Music</a></router-link>
                      <router-link to="/category/sports" tag="li" active-class="active"><a>Sports</a></router-link>
                      <router-link to="/category/technology" tag="li" active-class="active"><a>Technology</a></router-link>
                  </ul>
              </li>
          </ul>
          <div class="search-container" v-bind:class="{ 'form-is-showing' : showSearch }">
              <a href="#" class="trigger" v-on:click.prevent="toggleSearch">
                  <i class="fa fa-search"></i>
              </a>
              <form action="#" class="header-search-form">
                  <div class="input-container">
                      <input type="search" placeholder="Search..">
                  </div>
              </form>
          </div><!-- /search-container -->
          </div><!-- /col-md-12 -->
        </div><!-- /row -->
      </div><!-- /container -->
    </div><!-- /sticky-nav -->

    <sidebar></sidebar>

    <section id="wrapper">

      <div id="navigation">
        <div class="top-nav-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="#" class="nav-trigger" v-on:click.prevent="showSidebar">
                            <span class="bars">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <ul class="top-nav">
                            <li><a href="#"><i class="fa fa-home"></i></a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                        <div class="search-container" v-bind:class="{ 'form-is-showing' : showSearch }">
                            <a href="#" class="trigger" v-on:click.prevent="toggleSearch">
                                <i class="fa fa-search"></i>
                            </a>
                            <form action="#" class="header-search-form">
                                <div class="input-container">
                                    <input type="search" placeholder="Search..">
                                </div>
                            </form>
                        </div><!-- /search-container -->
                    </div><!-- /col-md-12 -->
                </div><!-- /row -->
            </div><!-- /container -->
        </div><!-- /top-nav-wrapper -->
        <header id="main-header" ref="mainHeader">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="main-nav clearfix">
                            <a href="#" class="mobile-nav-trigger" v-on:click.prevent="toggleMobileNav">
                                <span class="bars">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </a>
                            <div class="logo-wrapper">
                                <a href="#" class="logo">
                                    <img id="logo" src="/src/assets/shmoothies-logo.png" alt="Shmoothies Logo">
                                </a>
                            </div><!-- /logo-wrapper -->
                            <div class="search-container" v-bind:class="{ 'form-is-showing' : showSearch }">
                                <a href="#" class="trigger" v-on:click.prevent="toggleSearch">
                                    <i class="fa fa-search"></i>
                                </a>
                                <form action="#" class="header-search-form">
                                    <div class="input-container">
                                        <input type="search" placeholder="Search..">
                                    </div>
                                </form>
                            </div><!-- /search-container -->
                            <ul class="main-nav-items" v-bind:class="{ 'show-sub' : showMobileNav }">
                                <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                                <router-link to="/category/smoothies/first-article" tag="li" active-class="active"><a>Smoothies</a></router-link>
                                <router-link to="/admin" tag="li" active-class="active"><a>Desserts</a></router-link>
                                <router-link to="/category/entrees" tag="li" active-class="active"><a>Entrées</a></router-link>
                                <router-link to="/category/snacks" tag="li" active-class="active"><a>Snacks</a></router-link>
                                <router-link to="/category/reviews" tag="li" active-class="active"><a>Reviews</a></router-link>
                                <router-link to="/category/netflix" tag="li" active-class="active"><a>Netflix</a></router-link>
                                <li class="has-children" v-on:click.prevent="showMore" v-bind:class="{ 'show-sub' : showMoreNav }">
                                    <a href="#">More</a>
                                    <ul>
                                        <router-link to="/category/music" tag="li" active-class="active"><a>Music</a></router-link>
                                        <router-link to="/category/sports" tag="li" active-class="active"><a>Sports</a></router-link>
                                        <router-link to="/category/technology" tag="li" active-class="active"><a>Technology</a></router-link>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </nav>
                    </div><!-- /col-md-12 -->
                </div><!-- /row -->
            </div><!-- /container -->
        </header>
      </div>

          <router-view/>

          <footer id="main-footer">
              <div class="container">
                  <div class="row">
                      <div class="col-md-4">
                          <div class="widget widget_text">
                              <h5>About Us</h5>
                              <div class="textwidget">
                                  <img src="/src/assets/img/logo/shmoothies-light.png" alt="Shmoothies.com">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  <form  class="subscribe-form">
                                      <input type="email" class="subscribe-email" name="subscribe-email" placeholder="Sign Up For Our Newsletter">
                                      <button><i class="fa fa-envelope-o"></i></button>
                                      <label class="subscribe-form-result"></label>
                                  </form>
                              </div>
                          </div><!-- /widget -->
                      </div><!-- /col-md-4 -->
                      <div class="col-md-4">
                          <latest-posts-widget></latest-posts-widget>
                      </div><!-- /col-md-4 -->
                      <div class="col-md-4">
                          <categories-widget></categories-widget>
                      </div><!-- /col-md-4 -->
                  </div><!-- /row -->
              </div><!-- /container -->
          </footer>

          <div id="bottom-footer">
              <social-widget></social-widget>
              <p class="copyright">Copyright © 2017 Shmoothies.</p>
          </div><!-- /bottom-footer -->
      </section><!-- /wrapper -->
  </div>
</template>

<script>
import Sidebar from './components/navigation/Sidebar.vue'
import LatestPostsWidget from './components/elements/widgets/LatestPostsWidget.vue'
import CategoriesWidget from './components/elements/widgets/CategoriesWidget.vue'
import SocialWidget from './components/elements/widgets/SocialWidget.vue'

export default {
  name: 'app',
  components: {
    'sidebar': Sidebar,
    'latest-posts-widget': LatestPostsWidget,
    'categories-widget': CategoriesWidget,
    'social-widget': SocialWidget
  },
  data: function () {
    return {
      sticky: true,
      scrolled: false,
      headerOffset: 400,
      showMobileNav: false,
      showMoreNav: false,
      showSearch: false
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    mainHeader: function () {
      const main = this.$refs.mainHeader
      return main.offsetTop + main.offsetHeight
    },
    setHeader: function () {
      this.headerOffset = this.mainHeader()
    },
    onScroll: function (e) {
      window.scrollY >= this.headerOffset ? this.scrolled = true : this.scrolled = false
    },
    showSidebar: function () {
      document.querySelector('body').classList.add('sideheader-is-visible')
    },
    toggleMobileNav: function () {
      this.showMobileNav = !this.showMobileNav
    },
    showMore: function () {
      this.showMoreNav = !this.showMoreNav
    },
    toggleSearch: function () {
      this.showSearch = !this.showSearch
    }
  },
  created: function () {
    this.$store.dispatch('tryAutoLogin')
    window.addEventListener('load', this.setHeader)
    window.addEventListener('resize', this.setHeader)
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.setHeader)
  }
}
</script>

<style>
#main-footer .widget form button {
  border-color: #404040;
  background-color: rgb(40,40,40);
  color: #656565;
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
}

#login {
  position: absolute;
  z-index: 21;
  right: 20px;
  top: 15px;
  color: transparent;
}
#login:hover {
  color: black;
}
#login i {
  font-size: 30px;
}
@media only screen and (min-width: 991px) and (max-width: 1080px) {
  #login {
    top: 60px;
    right: 10px;
  }
}
</style>
