<template>
  <div id="app">
    <router-link v-if="!authenticated" to="/login" id="login" class="nav-icons"><i class="fa fa-github-alt"></i></router-link>
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
              <router-link :to="`/category/${route}`" tag="li" active-class="active" v-for="route in routes" v-bind:data="route" v-bind:key="route" exact><a>{{ route }}</a></router-link>
              <li class="has-children">
                  <a href="#">More</a>
                  <ul>
                    <router-link :to="`/category/${route}`" tag="li" active-class="active" v-for="route in moreRoutes" v-bind:data="route" v-bind:key="route" exact><a>{{ route }}</a></router-link>
                  </ul>
              </li>
          </ul>
          <div class="search-container" v-bind:class="{ 'form-is-showing' : showSearch }">
              <a href="#" class="trigger" v-on:click.prevent="toggleSearch">
                  <i class="fa fa-search"></i>
              </a>
              <form action="#" class="header-search-form" v-on:submit.prevent="search">
                <div class="input-container">
                  <input type="search" placeholder="Search..." v-model="query">
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
                            <li><router-link to="/"><i class="fa fa-home"></i></router-link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                        <div class="search-container" v-bind:class="{ 'form-is-showing' : showSearch }">
                            <a href="#" class="trigger" v-on:click.prevent="toggleSearch">
                                <i class="fa fa-search"></i>
                            </a>
                            <form action="#" class="header-search-form" v-on:submit.prevent="search">
                              <div class="input-container">
                                <input type="search" placeholder="Search..." v-model="query">
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
                                <router-link v-if="authenticated" to="/admin">
                                    <img id="logo" src="/src/assets/shmoothies-logo.png" alt="Shmoothies Logo">
                                </router-link>
                                  <img id="logo" v-if="!authenticated" src="/src/assets/shmoothies-logo.png" alt="Shmoothies Logo">
                            </div><!-- /logo-wrapper -->
                            <div class="search-container" v-bind:class="{ 'form-is-showing' : showSearch }">
                                <a href="#" class="trigger" v-on:click.prevent="toggleSearch">
                                    <i class="fa fa-search"></i>
                                </a>
                                <form action="#" class="header-search-form" v-on:submit.prevent="search">
                                  <div class="input-container">
                                    <input type="search" placeholder="Search..." v-model="query">
                                  </div>
                                </form>
                            </div><!-- /search-container -->
                            <ul class="main-nav-items" v-bind:class="{ 'show-sub' : showMobileNav }">
                                <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                                <router-link :to="`/category/${route}`" tag="li" active-class="active" v-for="route in routes" v-bind:data="route" v-bind:key="route" exact><a>{{ route }}</a></router-link>
                                <li class="has-children" v-on:click.prevent="showMore" v-bind:class="{ 'show-sub' : showMoreNav }">
                                  <a href="#">More</a>
                                  <ul>
                                    <router-link :to="`/category/${route}`" tag="li" active-class="active" v-for="route in moreRoutes" v-bind:data="route" v-bind:key="route" exact><a>{{ route }}</a></router-link>
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
        <transition name="blink">
          <router-view></router-view>
        </transition>
        <footer id="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="widget widget_text">
                            <h5>About Us</h5>
                            <div class="textwidget">
                                <img src="/src/assets/img/logo/shmoothies-light.png" alt="Shmoothies.com">
                                <p>Welcome to Shmoothies where we talk about anything and everything relatable!</p>
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
            <p class="copyright">Copyright © 2017 Shmoothies</p>
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
      showAdminNav: false,
      showMoreNav: false,
      showSearch: false,
      query: null,
      routes: [
        'smoothies',
        'desserts',
        'restaurants',
        'netflix',
        'music',
        'college'
      ],
      moreRoutes: [
        'technology',
        'anime',
        'sports'
      ]
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    mainHeader () {
      const main = this.$refs.mainHeader
      return main.offsetTop + main.offsetHeight
    },
    setHeader () {
      this.headerOffset = this.mainHeader()
    },
    onScroll (e) {
      window.scrollY >= this.headerOffset ? this.scrolled = true : this.scrolled = false
    },
    showSidebar () {
      document.querySelector('body').classList.add('sideheader-is-visible')
    },
    toggleMobileNav () {
      this.showMobileNav = !this.showMobileNav
    },
    showMore () {
      this.showMoreNav = !this.showMoreNav
    },
    toggleSearch () {
      this.showSearch = !this.showSearch
    },
    search () {
      if (this.query) {
        this.$router.push(`/search/${this.query.replace(/ /g, '+')}`)
      }
    },
    toggleAdminNav () {
      this.showAdminNav = !this.showAdminNav
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
.blink-enter-active {
  transition: opacity 1s ease;
}

.blink-enter, .blink-leave-to {
  opacity: 0
}

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

.nav-icons {
  color: transparent;
  position: absolute;
  z-index: 21;
}

.nav-icons:hover {
  color: black;
}

.nav-icons i {
  font-size: 30px;
}

#login {
  color: transparent;
}

#login:hover {
  color: black;
}

#logout {
  color: black;
}
#logout:hover {
  color: peru;
}

#login, #logout {
  right: 20px;
  top: 15px;
}

@media only screen and (min-width: 991px) and (max-width: 1080px) {
  #login, #logout {
    top: 60px;
    right: 10px;
  }
}
</style>
