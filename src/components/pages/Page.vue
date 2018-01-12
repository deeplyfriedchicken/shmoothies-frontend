<template>
  <section class="contents-container">
    <div class="container">
        <div class="row">
            <ul id="action-buttons">
              <li @click="toggleFull"><i class="fa fa-2x fa-arrows-alt"></i></li>
            </ul>
            <div class="" v-bind:class="{ 'col-md-8' : !full, 'col-md-12' : full }">
              <transition name="blink" mode="out-in" appear>
                <router-view :key="$route.fullPath" :full="full"></router-view>
              </transition>
            </div><!-- /col-md-8 -->
            <div class="col-md-4" v-if="!full">
                <body-sidebar></body-sidebar>
            </div><!-- /col-md-4 -->
        </div><!-- /row -->
    </div><!-- /container -->
  </section>
</template>

<script>
import BodySidebar from '../elements/BodySidebar.vue'

export default {
  name: 'Page',
  components: {
    'body-sidebar': BodySidebar
  },
  data () {
    return {
      full: false
    }
  },
  methods: {
    toggleFull () {
      this.full = !this.full
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 991px) {
  #action-buttons {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  #action-buttons {
    position: fixed;
    right: 20px;
    bottom: 20px;
    list-style: none;
    z-index: 25;
  }
  #action-buttons li {
    margin-bottom: 5px;
    cursor: pointer;
  }
  #action-buttons li i:hover {
    background: rgb(253, 183, 33);
  }
  #action-buttons li i {
    background: rgba(253, 183, 33, 0.5);
    padding: 11px;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    width: 50px;
    height: 50px;
  }
}
</style>
