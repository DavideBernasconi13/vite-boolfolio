<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
  <main class="container">
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import { store } from './store';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    FooterComponent
  }
}

</script>

<style lang="scss" scoped></style>