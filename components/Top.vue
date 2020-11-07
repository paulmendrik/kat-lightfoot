<template>
<div class="columns is-centered">
<div class="column main">


<nav class="level">
<div class="level-left">
<div class="level-item">
<nuxt-link to="/"><img src="@/assets/img/logo.svg" /></nuxt-link>
</div>
</div>
<div class="level-right">
<div class="level-item">
<a  @click="toggleClass()"  :class="[ isActive ? '': 'is-active']"   class="hamburger">
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
</a>
</div>
</div>
</nav>



<transition name="slide">
<div class="columns is-vcentered menu"  v-if="show">
<ul class="menu-list">
<li  @click="toggleClass()"><router-link to="/" style="--animation-order: 1;" >Home</router-link></li>
<li  @click="toggleClass()"><router-link to="/about" style="--animation-order: 2;" >About</router-link></li>
<li  @click="toggleClass()"><router-link to="/gallery" style="--animation-order: 3;" >Gallery</router-link></li>
<li  @click="toggleClass()"><router-link to="/giclee" style="--animation-order: 4;" >Giclee Prints</router-link></li>
<li  @click="toggleClass()"><router-link to="/canvas" style="--animation-order: 5;" >Canvas Prints</router-link></li>
<li  @click="toggleClass()"><router-link to="/exhibitions" style="--animation-order: 6;" >Exhibitions</router-link></li>
<li  @click="toggleClass()"><router-link to="/press" style="--animation-order: 7;" >Press</router-link></li>
<li  @click="toggleClass()"><router-link to="/contact" style="--animation-order: 8;" >Contact</router-link></li>
</ul>
</div>
</transition>

</div>
</div>
</template>

<script>
export default {
  name: "Top",
  data () {
    return {
      show: false,
      isActive: true,
    }
  },
  methods: {
    toggleClass: function (e) {
      this.show = !this.show;
     this.isActive = !this.isActive;
    }
  }

}
</script>
