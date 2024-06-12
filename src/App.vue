<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import { store } from './store';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      store,
      project: []
    }
  },
  methods: {
    getAllProject() {
      axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
        console.log(res.data)
      })
    }
  },
  mounted() {
    this.getAllProject()
  }
}
</script>

<style lang="scss" scoped></style>