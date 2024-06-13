<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
  <button @click="getAllProject()" class="btn btn-primary">Cambia pagina</button>

  <ul>
    <li v-for="project in projects" :key="project.id">
      <h1>{{ project.title }}</h1>
      <img :src="store.imgBasePath + project.image" :alt="project.title">
      <p v-html="project.description"></p>
    </li>
  </ul>
</template>

<script>
import { store } from './store';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      store,
      projects: [],
      currentPage: 0,
      nextPage: 0
    }
  },
  methods: {
    getAllProject() {
      this.nextPage = this.currentPage + 1;
      axios.get(this.store.apiBaseUrl + '/projects', { params: { page: this.nextPage } }).then((res) => {
        console.log(res.data);
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
      })
    }
  },
  mounted() {
    this.getAllProject();
  }
}
</script>

<style lang="scss" scoped>
li img {
  width: 500px;
}
</style>