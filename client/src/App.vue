<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

export default {
  name: 'app'
}
</script>

<style>
html {
  margin: 0;
  scroll-behavior: smooth;
}

#app {
  overflow-x: hidden;
  width: 100%;
}
</style>
