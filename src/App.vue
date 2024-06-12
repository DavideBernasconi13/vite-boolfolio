<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <h1>{{ project.title }}</h1>
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
      projects: []
    }
  },
  methods: {
    getAllProject() {
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res.data);
        this.projects = res.data.results;
      })
    }
  },
  mounted() {
    this.getAllProject();
  }
}
</script>

<style lang="scss" scoped></style>