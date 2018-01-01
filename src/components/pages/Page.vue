<template>
  <section class="contents-container">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <router-view></router-view>
            </div><!-- /col-md-8 -->
            <div class="col-md-4">
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
  }
}
</script>
