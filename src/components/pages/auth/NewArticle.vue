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
              <input id="cover" type="file" accept="image/*" ref="cover" @change="setImage($event.target.files)">
              <label for="cover" class="upload" v-if="!article.cover_photo">
                <i class="fa fa-file-image-o mb-25"></i>
              </label>
            </form>
            <div v-if="article.cover_photo">
              <img :src="article.cover_photo.url" :alt="article.cover_photo.caption">
              <div class="text-center">
                <button class="btn btn-primary" @click="showModal = true">Recrop</button>
                <button class="btn btn-success" @click="$refs.cover.click()">Change Photo</button>
              </div>
            </div>
            <div class="modal text-center" v-if="showModal">
              <div class="modal-container">
                <div class="modal-actions">
                  <button class="btn btn-default float-right" @click="showModal = false"><i class="fa fa-close"></i></button>
                </div>
                <vue-cropper
                  class="mb-20"
                  ref="cropper"
                  :zoomable="false"
                  :aspect-ratio="16/9"
                  :toggleDragModeOnDblclick="false"
                  v-if="imgSrc"
                  :src="imgSrc">
                </vue-cropper>
                <button class="btn btn-primary crop-btn" @click="cropPhoto">Crop</button>
              </div>
            </div>
          </figure>
          <div class="text-left mb-25" @click="isSaved = false">
            <h2>Tags</h2>
            <v-select
              :close-on-select="false"
              :on-search="getTags"
              v-model="article.tags"
              multiple
              taggable
              :options="tags"
              placeholder="Add tags here!"></v-select>
          </div>
        </header>
        <div class="post-content" @click="isSaved = false">
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
            <button v-if="!editing" class="btn btn-primary" v-bind:class="{ 'disabled' : isSaved }" @click.prevent="submitArticle">Add Article!</button>
            <button v-if="editing" class="btn btn-primary" v-bind:class="{ 'disabled' : isSaved }" @click.prevent="updateArticle">Update!</button>
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
import VueCropper from 'vue-cropperjs'
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
    Picker,
    VueCropper
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$route.params.slug) {
        axios.get('/api/articles/' + vm.$route.params.slug + '/', vm.$store.getters.authorizationHeader)
        .then(res => {
          vm.article = res.data
          vm.article.image = vm.article.cover_photo.id
          vm.imgName = vm.article.cover_photo.url.split('media/images/')[1]
          vm.imgSrc = vm.article.cover_photo.url
        })
        .catch(error => console.log(error))
        vm.editing = true
      }
      next()
    })
  },
  beforeRouteLeave (to, from, next) {
    if (!this.isSaved) {
      const answer = window.confirm('Do you really want to leave? You may have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
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
      isSaved: true,
      editing: false, // determines if the user sees the update or the create button
      emojis: false,
      showModal: false,
      imgSrc: null,
      imgName: null,
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
  watch: {
    // whenever question changes, this function will run
    showModal: function (newShowModal, oldShowModal) {
      let bodyStyle = document.querySelector('body').style
      this.showModal ? bodyStyle.overflowY = 'hidden' : bodyStyle.overflowY = ''
    }
  },
  methods: {
    cropPhoto () {
      this.$refs.cropper.getCroppedCanvas().toBlob(blob => {
        let file = new File([blob], this.imgName, {type: blob.type, lastModified: Date.now()})
        const formData = new FormData()
        formData.append('url', file)
        formData.append('caption', '')
        axios.post('/api/images/', formData, this.$store.getters.authorizationHeader)
        .then(res => {
          const data = res.data
          this.showModal = false
          this.article.image = data.id
          this.article.cover_photo = data
          this.isSaved = false
        })
        .catch(err => console.log(err))
      })
    },
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
      this.isSaved = false
    },
    showEmojis () {
      this.emojis = !this.emojis
    },
    addEmoji (emoji) {
      const quill = this.$refs.editor.quill
      quill.focus()
      let range = quill.getSelection()
      quill.insertText(range.index, emoji.native)
      this.isSaved = false
    },
    modifyTags (tags) {
      const modified = []
      tags.forEach(tag => {
        if (tag.label) {
          modified.push({
            'label': tag.label
          })
        } else {
          modified.push({
            'label': tag
          })
        }
      })
      return modified
    },
    updateArticle () {
      this.article.tags = this.modifyTags(this.article.tags)
      axios.patch(`/api/articles/${this.article.slug}/`, this.article, this.$store.getters.authorizationHeader)
        .then(res => {
          this.article = res.data
          this.article.image = this.article.cover_photo.id
          this.$notify({
            group: 'admin',
            title: `Success!`,
            text: `${this.article.title} has been updated!`
          })
          this.isSaved = true
          this.$router.push(`/admin/edit/${res.data.slug}`)
        })
        .catch(err => console.log(err))
    },
    submitArticle () {
      this.article.tags = this.modifyTags(this.article.tags)
      axios.post('/api/articles/', this.article, this.$store.getters.authorizationHeader)
        .then(res => {
          this.$notify({
            group: 'admin',
            title: `Success!`,
            text: `${this.article.title} has been created! Publish it from your dashboard!`
          })
          this.isSaved = true
          this.$router.push(`/admin/edit/${res.data.slug}`)
        })
        .catch(err => console.log(err))
    },
    embedImageSource () {
      const quill = this.$refs.editor.quill
      quill.focus()
      let range = quill.getSelection()
      let src = prompt('Paste image link here!')
      quill.insertEmbed(range.index, 'image', src)
      this.isSaved = false
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
          this.isSaved = false
        })
        .catch(err => console.log(err))
    },
    setImage (files) {
      const file = files[0]
      this.showModal = true
      this.imgName = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.imgSrc = event.target.result

          // rebuild cropperjs with the updated source
          if (this.$refs.cropper) {
            this.$refs.cropper.replace(event.target.result)
          }
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
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
.disabled {
  background-color: gray;
}
.post-content .no-emoji-mart {
  display: none;
}

</style>

<style>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: block;
  transition: opacity .3s ease;
}

.modal-container {
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  max-width: 700px;
  margin: 25px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-actions {
  height: 30px;
}

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

.post-content .emoji-mart {
  position: absolute;
  left: 50%;
  z-index: 25;
}
</style>
