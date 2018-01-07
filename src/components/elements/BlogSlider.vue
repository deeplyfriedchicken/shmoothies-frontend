<template>
  <div class="blog-post-slider">
    <slick ref="slick">
      <slot></slot>
    </slick>
  </div><!-- /slider -->
</template>

<script>
import Slick from './widgets/VueSlick.vue'

export default {
  name: 'BlogSlider',
  components: {
    Slick
  },
  // All slick methods can be used too, example here
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // let currIndex = this.$refs.slick.currentSlide()
      // this.$refs.slick.destroy()
      this.$nextTick(() => {
          this.$refs.slick.create()
          // this.$refs.slick.goTo(currIndex, true)
      })
    }
  },
  mounted () {
    this.reInit()
  },
}
</script>

<style scoped>
figure {
  height: 400px;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
