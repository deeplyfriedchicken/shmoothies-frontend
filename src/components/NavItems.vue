<template>
  <ul class="main-nav-items">
    <li><a href="#">Popular</a></li>
    <li><a href="#">Fashion</a></li>
    <li class="active"><a href="#">Lifestyle</a></li>
    <li><a href="#">Arts</a></li>
    <li><a href="#">Design</a></li>
    <li><a href="#">Music</a></li>
    <li><a href="#">Entertainment</a></li>
    <li class="has-children">
        <a href="#">More</a>
        <ul>
            <li><a href="#">Travel</a></li>
            <li>
                <a href="#">Gadgets</a>
                <ul>
                    <li>
                        <a href="#">Smartphones</a>
                        <ul>
                            <li><a href="#">Apple</a></li>
                            <li><a href="#">Microsoft</a></li>
                            <li><a href="#">GLX!</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Tablet</a></li>
                    <li><a href="#">Desktop</a></li>
                </ul>
            </li>
            <li><a href="#">Food</a></li>
        </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavItems'
}
</script>
