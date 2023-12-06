<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from 'components/HelloWorld.vue';

const BASE_URL = import.meta.env.BASE_URL
console.log("🚀 ~ file: App.vue:5 ~ BASE_URL:", BASE_URL)
import.meta.env.VITE_LWJ
console.log("🚀 ~ file: App.vue:7 ~ import.meta.env.VITE_LWJ:", import.meta.env.VITE_LWJ)

// 雷猴
const viteSvg = `${BASE_URL}vite.svg` // 雷猴

const v = __APP_VERSION__

const obj = {}


/**
 * 
 */
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img :src="viteSvg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <p>{{ v }}</p>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
