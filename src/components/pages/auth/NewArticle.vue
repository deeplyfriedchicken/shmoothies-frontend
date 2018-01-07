<template>
  <div>
    <div class="contents-inner clearfix">
        <article class="blog-post col-md-12">
            <header>
                <h3 contenteditable="true" ref="title" v-on:blur="updateInput('title')">{{ article.title }}</h3>
                <ul class="categories">
                  <li><a contenteditable="true" ref="category" v-on:blur="updateInput('category')">{{ article.category.name }}</a></li>
                </ul>
                <h5 contenteditable="true" ref="blurb" v-on:blur="updateInput('blurb')">{{ article.blurb }}</h5>
                <figure>
                  <form enctype="multipart/form-data" novalidate>
                    <input id="cover" name="url" type="file" accept="image/*" ref="cover" @change="uploadImage($event.target.name, $event.target.files)">
                    <label for="cover" class="upload">
                      <i class="fa fa-upload" v-if="!imageUploaded"></i>
                      <img v-if="article.cover_photo" :src="article.cover_photo.url" >
                    </label>
                  </form>
                </figure>
            </header>
            <div class="post-content">
              <div id="toolbar">
                <span class="ql-formats">
                <select class="ql-font"></select>
                <select class="ql-size"></select>
                </span>
                <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-strike"></button>
                </span>
                <span class="ql-formats">
                <select class="ql-color"></select>
                <select class="ql-background"></select>
                </span>
                <span class="ql-formats">
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
                </span>
                <span class="ql-formats">
                <select class="ql-header"></select>
                <button class="ql-blockquote"></button>
                <button class="ql-code-block"></button>
                </span>
                <span class="ql-formats">
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
                <button class="ql-indent" value="-1"></button>
                <button class="ql-indent" value="+1"></button>
                </span>
                <span class="ql-formats">
                <button class="ql-direction" value="rtl"></button>
                <select class="ql-align"></select>
                </span>
                <span class="ql-formats">
                <button class="ql-link"></button>
                <button class="ql-image"></button>
                <button class="ql-video"></button>
                <button id="custom-button" @click="embedImageSource"><i class="fa fa-external-link"></i></button>
                </span>
                <span class="ql-formats">
                <button class="ql-clean"></button>
                </span>
              </div>
              <input type="file" id="quill-image" class="hide-input" ref="image" @change="quillUpload($event.target)">
              <quill-editor ref="editor" :options="editorOption" v-model="article.content"></quill-editor>
              <button v-if="!editing" class="btn btn-primary" @click.prevent="submitArticle">Post!</button>
              <button v-if="editing" class="btn btn-primary" @click.prevent="updateArticle">Update!</button>
            </div><!-- /post-content -->
            <div class="post-meta">
                <p class="author">By: <a href="#">{{ $parent.user.first_name }} {{ $parent.user.last_name }}</a></p>
                <div class="post-tags">
                    Tags:
                    <ul>
                        <li>Travel</li>
                        <li>Fashion</li>
                        <li>Lifestyle</li>
                    </ul>
                </div><!-- /post-tags -->
            </div><!-- /post-meta -->
        </article>
    </div><!-- /contents-inner -->
  </div>
</template>

<script>
import axios from '../../../axios-auth'
// require styles
import '../../../../node_modules/quill/dist/quill.core.css'
import '../../../../node_modules/quill/dist/quill.snow.css'
import '../../../../node_modules/quill/dist/quill.bubble.css'

import { quillEditor, Quill } from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageResize', ImageResize)

export default {
  name: 'NewArticle',
  components: {
    quillEditor
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$route.params.slug) {
        axios.get('/api/articles/' + vm.$route.params.slug + '/')
        .then(res => {
          vm.article = res.data
          vm.article.image = vm.article.cover_photo.id
        })
        .catch(error => console.log(error))
        vm.editing = true
        vm.imageUploaded = true
      }
      next()
    })
  },
  data () {
    return {
      article: {
        blurb: null,
        category: {
          name: 'smoothies'
        }, // lowercase all
        content: null,
        title: null,
        image: null, // write-only
        cover_photo: null
      },
      editing: false,
      imageUploaded: false,
      editorOption: {
        modules: {
          toolbar: {
            container: '#toolbar',
            handlers: {
              'image': function () {
                let f = document.querySelector('#quill-image')
                f.click()
              }
            }
          },
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          }
        },
        placeholder: 'Start writing your Shmoothies post!'
      }
    }
  },
  methods: {
    updateInput (key) {
      if (key === 'category') {
        this.article.category.name = this.$refs[key].innerText.toLowerCase()
      } else {
        this.article[key] = this.$refs[key].innerText
      }
    },
    updateArticle () {
      console.log(this.article)
      axios.patch(`/api/articles/${this.article.slug}/`, this.article, this.$store.getters.authorizationHeader)
        .then(res => {
          this.article = res.data
          this.article.image = this.article.cover_photo.id
          this.$router.push(`/admin/edit/${res.data.slug}`)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    submitArticle () {
      console.log(this.article)
      axios.post('/api/articles/', this.article, this.$store.getters.authorizationHeader)
        .then(res => {
          this.$router.push(`/admin/edit/${res.data.slug}`)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    embedImageSource () {
      const quill = this.$refs.editor.quill
      let range = quill.getSelection()
      let src = prompt('Paste image link here!')
      quill.insertEmbed(range.index, 'image', src)
    },
    quillUpload (target) {
      const formData = new FormData()
      formData.append('url', target.files[0])
      formData.append('caption', '')
      axios.post('/api/images/', formData, this.$store.getters.authorizationHeader)
        .then(res => {
          const data = res.data
          const quill = this.$refs.editor.quill
          let range = quill.getSelection()
          quill.insertEmbed(range.index, 'image', data.url)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    uploadImage (fieldName, files) {
      const formData = new FormData()
      formData.append('url', files[0])
      formData.append('caption', '')

      axios.post('/api/images/', formData, this.$store.getters.authorizationHeader)
        .then(res => {
          const data = res.data
          this.image = data
          this.article.image = this.image.id
          this.article.cover_photo = this.image
          this.imageUploaded = true
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style>
#cover {
  display: none;
}
.upload i {
  font-size: 40px;
  cursor: pointer;
  margin-bottom: 20px;
}
.hide-input {
  display: none;
}
</style>
