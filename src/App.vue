<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import Footer from './components/Footer.vue';
</script>

<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar/>
    <Carousel/>
    <router-view />
    <Footer></Footer>
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

