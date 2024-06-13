<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>

  <ul>
    <li v-for="project in projects" :key="project.id">
      <h1>{{ project.title }}</h1>
      <img :src="store.imgBasePath + project.image" :alt="project.title">
      <p v-html="project.description"></p>
      <p class="badge bg-primary" v-if="project.category">{{ project.category.name }}</p>
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
      projects: []
    }
  },
  methods: {
    getAllProject() {
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res.data);
        this.projects = res.data.results;
        //se paginato uso questo, più params -> { params: { page: this.nextPage } }
        //this.projects = res.data.results.data;
        //this.currentPage = res.data.results.current_page;
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