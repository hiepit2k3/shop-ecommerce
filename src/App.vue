<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
// import Footer from './components/Footer.vue';
import Loaddata from './components/data.vue'
import slide from './components/slide.vue'
</script>

<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- <div
      class="Agora page-smooth-mode-transition bg-white text-[#06021F] dark:bg-[#0C0B21] dark:text-white font-ttFirsNeue font-semibold leading-tight w-screen overflow-hidden"> -->
      <Navbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
nav {
  margin-bottom: 1em;
}
</style>
