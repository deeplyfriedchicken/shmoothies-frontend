<template>
  <aside id="sideheader" ref="sideheader">
    <header>
        <div class="logo-container">
            <a href="#"><img src="/src/assets/shmoothies-logo.png" alt="Shmoothies Logo"></a>
        </div><!-- /logo-container -->
        <a href="#" class="sideheader-close-btn" v-on:click.prevent="toggleSidebar">
            <span></span>
            <span></span>
        </a>
    </header>
    <div class="widget widget_nav_menu">
        <ul>
          <li v-for="category in categories"><router-link :to="`/category/${category.name}`">{{ category.name | capitalize }}</router-link></li>
        </ul>
    </div>
    <div class="widget widget_nav_menu">
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms</a></li>
        </ul>
    </div>
    <div class="widget widget_socials">
        <ul class="social-icons small">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
            <li><a href="#"><i class="fa fa-envelope-o"></i></a></li>
        </ul>
    </div>
    <p class="copyright">Copyright © 2017 Shmoothies.</p>
  </aside><!-- /sideheader -->
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import axios from '../../axios-auth'

export default {
  name: 'Sidebar',
  methods: {
    toggleSidebar: function () {
      document.querySelector('body').classList.remove('sideheader-is-visible')
    }
  },
  data () {
    return {
      categories: []
    }
  },
  created () {
    axios.get('/api/category/')
      .then(res => {
        this.categories = res.data.results
      })
  },
  mounted: function () {
    let sideheader = this.$refs.sideheader
    const sidebar = new PerfectScrollbar(sideheader)
    sidebar.update()
  }
}
</script>
