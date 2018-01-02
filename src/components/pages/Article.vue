<template>
  <transition name="fade">
    <section class="contents-container">
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                  <div class="contents-inner clearfix">
                      <article class="blog-post col-md-12">
                          <header>
                              <h3><a href="#">Vintage Supply Co. Unveils All New 2016 Spring / Summer Collection At The Los Angeles Fashion Expo</a></h3>
                              <div class="meta">
                                  <span><time datetime="2015-09-03">July 03, 2015</time></span>
                                  <span>6052 Views</span>
                                  <span><a href="#">8 Comments</a></span>
                              </div><!-- /meta -->
                              <figure>
                                  <img src="src/assets/img/blog/single-post.jpg" alt="Maverick Blog">
                              </figure>
                          </header>
                          <div class="post-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus nibh et congue aliquam. Fusce ipsum tellus, pellentesque a consequat eget, luctus eget nisi. Maecenas tellus elit, mattis eget luctus vitae, mollis quis metus. Ut quis turpis vel quam varius eleifend id id augue. Vestibulum eu arcu feugiat, sodales orci ut, dictum mauris. </p>
                              <h4>Lorem Ipsum Dolor</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing</a> elit. In cursus nibh et congue aliquam. Fusce ipsum tellus, pellentesque a consequat eget, luctus eget nisi. Maecenas tellus elit, mattis eget luctus vitae, mollis quis metus. Ut quis turpis vel quam varius eleifend id id augue. Vestibulum eu arcu feugiat, sodales orci ut, dictum mauris. Aenean tempus ipsum at nibh tempor feugiat. Nam aliquet velit sit amet cursus et ultricies. Vestibulum ante ipsum primis in faucibus efficitur turpis.</p>
                              <blockquote>
                                  <p>
                                      Fusce pellentesque, leo nec dignissim condimentum, leo dui elementum felis, sit amet sodales velit est vitae sapien.
                                  </p>
                              </blockquote>
                              <p>Vivamus gravida, eros nec volutpat aliquam, neque lacus mollis dolor, nec pretium mauris ante vitae risus. Duis rutrum odio vel accumsan imperdiet. Nulla ac posuere lacus. Quisque sed ipsum vel nisl gravida vulputate. Sed pretium non magna malesuada convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales porta gravida. Fusce pellentesque, leo nec dignissim condimentum, leo dui elementum felis, sit amet sodales velit est vitae sapien. Sed blandit tellus vel nisl porta ultricies. Sed at erat at dolor maximus suscipit vitae ut lacus. In bibendum ullamcorper feugiat. Maecenas enim felis, fermentum non ultrices at, pellentesque ut ipsum. </p>
                          </div><!-- /post-content -->
                          <div class="post-share clearfix">
                              <p class="counter"><span>53</span>Shares</p>
                              <ul class="social-icons style2">
                                  <li><a href="#"><i class="fa fa-facebook"></i>Like</a></li>
                                  <li><a href="#"><i class="fa fa-twitter"></i>Tweet</a></li>
                                  <li><a href="#"><i class="fa fa-reddit"></i>Submit</a></li>
                                  <li><a href="#"><i class="fa fa-pinterest"></i>Pin It</a></li>
                                  <li><a href="#"><i class="fa fa-envelope-o"></i>Email</a></li>
                                  <li><a href="#"><i class="fa fa-link"></i>link</a></li>
                              </ul>
                          </div><!-- /post-share -->
                          <div class="post-meta">
                              <p class="author">By: <a href="#">John Doe</a></p>
                              <div class="post-tags">
                                  Tags:
                                  <ul>
                                      <li>Travel</li>
                                      <li>Fashion</li>
                                      <li>Lifestyle</li>
                                  </ul>
                              </div><!-- /post-tags -->
                          </div><!-- /post-meta -->
                          <div class="post-author">
                              <figure class="avatar">
                                  <img src="src/assets/img/misc/author.png" alt="Maverick Author">
                              </figure>
                              <div class="author-details">
                                  <h2>John Doe</h2>
                                  <p>This is a description of the author. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae accumsan nisl. Donec at laoreet sapien, eget facilisis velit.</p>
                                  <ul class="social-icons small">
                                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                      <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                      <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                  </ul>
                              </div><!-- /author-details -->
                          </div><!-- /post-author -->
                          <related-posts></related-posts>
                          <comments></comments>
                      </article>
                  </div><!-- /contents-inner -->
              </div><!-- /col-md-8 -->
              <div class="col-md-4">
                  <body-sidebar></body-sidebar>
              </div><!-- /col-md-4 -->
          </div><!-- /row -->
      </div><!-- /container -->
    </section>
  </transition>
</template>

<script>
import BodySidebar from '../elements/BodySidebar.vue'
import RelatedPosts from '../elements/RelatedPosts.vue'
import Comments from '../elements/Comments.vue'
import axios from 'axios'

export default {
  name: 'Article',
  components: {
    'body-sidebar': BodySidebar,
    'related-posts': RelatedPosts,
    'comments': Comments
  },
  created () {
    axios.get('http://localhost:8000/api/articles')
      .then(res => {
        console.log(res)
        const data = res.data
        this.articles = data
        console.log(this.articles)
      })
      .catch(error => console.log(error))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
