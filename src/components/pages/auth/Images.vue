<template>
  <div class="container">
    <div class="row margin-b-20" v-for="i in Math.ceil(images.length / 4)">
      <div class="col-md-3" v-for="image in images.slice((i - 1) * 4, i * 4)">
        <img class="image" :src="image.url" @click="copyImageUrl">
      </div>
    </div>
    <textarea id="clipboard" ref="clipboard"></textarea>
  </div>
</template>

<script>
import axios from '../../../axios-auth'

export default {
  name: 'Images',
  data () {
    return {
      images: []
    }
  },
  methods: {
    copyImageUrl (event) {
      this.$refs.clipboard.value = event.target.src
      this.$refs.clipboard.select()
      document.execCommand('copy')
    }
  },
  created () {
    axios.get('/api/images/')
      .then(res => {
        this.images = res.data
      })
  }
}
</script>

<style>
#clipboard {
  opacity: 0;
  cursor: initial;
}
.margin-b-20 {
  margin-bottom: 20px;
}

.image {
  cursor: copy;
}
.image:hover {
  opacity: .8;
}
</style>
