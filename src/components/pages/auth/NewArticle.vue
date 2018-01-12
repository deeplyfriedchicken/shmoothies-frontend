<template>
  <div>
    <div class="contents-inner clearfix mb-230">
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
                  <i class="fa fa-upload mb-25" v-if="!imageUploaded"></i>
                  <img v-if="article.cover_photo" :src="article.cover_photo.url" >
                </label>
              </form>
            </figure>
            <div class="text-left mb-25">
              <h2>Tags</h2>
              <v-select :close-on-select="false" :on-change="updateTags" :on-search="getTags" v-model="articleTags" multiple :taggable="true" :options="tags" placeholder="Add tags here!"></v-select>
            </div>
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
              <button id="embed-image" @click="embedImageSource"><i class="fa fa-external-link"></i></button>
              <button @click="showEmojis"><i class="fa fa-smile-o"></i></button>
              </span>
              <span class="ql-formats">
              <button class="ql-clean"></button>
              </span>
            </div>
            <picker ref="emojis" v-bind:class="{ 'no-emoji-mart': !emojis }" @click="addEmoji"></picker>
            <input type="file" id="quill-image" class="hide-input" ref="image" @change="quillUpload($event.target)">
            <quill-editor ref="editor" :options="editorOption" v-model="article.content"></quill-editor>
            <div class="text-center mt-25">
              <button v-if="!editing" class="btn btn-primary" @click.prevent="submitArticle">Add Article!</button>
              <button v-if="editing" class="btn btn-primary" @click.prevent="updateArticle">Update!</button>
            </div>
          </div><!-- /post-content -->
        </article>
    </div><!-- /contents-inner -->
  </div>
</template>

<script>
import axios from '../../../axios-auth'
import vSelect from 'vue-select'
import { Picker } from 'emoji-mart-vue'
// require styles
import '../../../../node_modules/quill/dist/quill.core.css'
import '../../../../node_modules/quill/dist/quill.snow.css'
import '../../../../node_modules/quill/dist/quill.bubble.css'

import { quillEditor, Quill } from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageResize', ImageResize)

const BaseImageFormat = Quill.import('formats/image')
const ImageFormatAttributesList = [
  'alt',
  'height',
  'width',
  'style'
]

class ImageFormat extends BaseImageFormat {
  static formats (domNode) {
    return ImageFormatAttributesList.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute)
      }
      return formats
    }, {})
  }
  format (name, value) {
    if (ImageFormatAttributesList.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value)
      } else {
        this.domNode.removeAttribute(name)
      }
    } else {
      super.format(name, value)
    }
  }
}

Quill.register(ImageFormat, true)

export default {
  name: 'NewArticle',
  components: {
    quillEditor,
    vSelect,
    Picker
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$route.params.slug) {
        axios.get('/api/articles/' + vm.$route.params.slug + '/', vm.$store.getters.authorizationHeader)
        .then(res => {
          vm.article = res.data
          vm.article.image = vm.article.cover_photo.id
          vm.articleTags = vm.article.tags
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
        blurb: 'Write a short blurb here.',
        category: {
          name: 'smoothies'
        }, // lowercase all
        content: null,
        title: 'Your Article Title',
        image: null, // write-only
        tags: null,
        cover_photo: null
      },
      tags: [],
      articleTags: [],
      editing: false,
      emojis: false,
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
    getTags (search, loading) {
      axios.get(`/api/tags/?search=${search}`)
        .then(res => {
          this.tags = res.data.results
        })
        .catch(err => console.log(err))
    },
    updateInput (key) {
      if (key === 'category') {
        this.article.category.name = this.$refs[key].innerText.toLowerCase()
      } else {
        this.article[key] = this.$refs[key].innerText
      }
    },
    updateTags (val) {
      this.article.tags = []
      val.forEach(tag => {
        if (tag['label']) {
          this.article.tags.push(tag)
        } else {
          this.article.tags.push({
            label: tag
          })
        }
      })
    },
    showEmojis () {
      this.emojis = !this.emojis
    },
    addEmoji (emoji) {
      const quill = this.$refs.editor.quill
      quill.focus()
      let range = quill.getSelection()
      quill.insertText(range.index, emoji.native)
    },
    updateArticle () {
      axios.patch(`/api/articles/${this.article.slug}/`, this.article, this.$store.getters.authorizationHeader)
        .then(res => {
          this.article = res.data
          this.article.image = this.article.cover_photo.id
          this.$router.push(`/admin/edit/${res.data.slug}`)
        })
        .catch(err => console.log(err))
    },
    submitArticle () {
      axios.post('/api/articles/', this.article, this.$store.getters.authorizationHeader)
        .then(res => {
          this.$router.push(`/admin/edit/${res.data.slug}`)
        })
        .catch(err => console.log(err))
    },
    embedImageSource () {
      const quill = this.$refs.editor.quill
      quill.focus()
      let range = quill.getSelection()
      console.log(range)
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
          quill.focus()
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
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.blog-post header .categories li a:hover {
  border: 1px solid #777777;
  color: #806C8F;
  background: white;
}
</style>

<style>
#cover {
  display: none;
}
.upload i {
  font-size: 40px;
  cursor: pointer;
}
.hide-input {
  display: none;
}
.post-content .no-emoji-mart {
  display: none;
}

.post-content .emoji-mart {
  position: absolute;
  left: 50%;
  z-index: 25;
}
</style>
