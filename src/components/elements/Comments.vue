<template>
  <div class="post-comments">
    <h6>2 Comments</h6>
    <ul class="comments-list">
        <li class="comment">
            <div class="comment-body">
                <figure>
                    <img src="/src/assets/img/misc/comment-avatar.png" alt="Maverick">
                </figure>
                <div class="comment-content">
                    <h4 class="comment-author"><a href="#">John Doe</a></h4>
                    <div class="comment-meta">
                        <time datetime="2015-03-05 16:20">March 5, 2015 at 4:20pm</time>
                        <a href="#" class="reply-link">Reply</a>
                    </div><!-- /comment-meta -->
                    <p>This is a comment made by someone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae accumsan nisl. Donec at laoreet sapien, eget facilisis velit.</p>
                </div><!-- /comment-content -->
            </div><!-- /comment-body -->
        </li>
        <li class="comment">
            <div class="comment-body">
                <figure>
                    <img src="/src/assets/img/misc/comment-avatar.png" alt="Maverick">
                </figure>
                <div class="comment-content">
                    <h4 class="comment-author"><a href="#">John Doe</a></h4>
                    <div class="comment-meta">
                        <time datetime="2015-03-05 16:20">March 5, 2015 at 4:20pm</time>
                        <a href="#" class="reply-link">Reply</a>
                    </div><!-- /comment-meta -->
                    <p>This is a comment made by someone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae accumsan nisl. Donec at laoreet sapien, eget facilisis velit.</p>
                </div><!-- /comment-content -->
            </div><!-- /comment-body -->
        </li>
    </ul>
    <div class="comment-form-container">
        <h6>Leave A Reply</h6>
        <form action="#" class="comment-form maverick-form">
            <div class="row">
                <div class="col-md-4">
                    <label for="comment-name">Name</label>
                    <input type="text" name="comment-name" id="comment-name" required>
                </div><!-- /col-md-4 -->
                <div class="col-md-4">
                    <label for="comment-email">Email</label>
                    <input type="email" name="comment-email" id="comment-email" required>
                </div><!-- /col-md-4 -->
                <div class="col-md-4">
                    <label for="comment-website">Website</label>
                    <input type="url" name="comment-website" id="comment-website">
                </div><!-- /col-md-4 -->
                <div class="col-md-12">
                    <label for="comment-message">Comment</label>
                    <textarea name="comment-message" id="comment-message" rows="7" required></textarea>
                </div><!-- /col-md-12 -->
                <div class="col-md-12">
                    <input type="submit" value="Post Comment">
                </div><!-- /col-md-12 -->
            </div><!-- /row -->
        </form>
    </div><!-- comment-form-container -->
  </div><!-- /post-comments -->
</template>

<script>
export default {
  name: 'Comments'
}
</script>
