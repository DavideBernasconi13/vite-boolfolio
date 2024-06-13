<template>
    <div>
        <h1>Lista progetti</h1>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <h1>{{ project.title }}</h1>
                <img :src="store.imgBasePath + project.image" :alt="project.title">
                <p v-html="project.description"></p>
                <p class="badge bg-primary" v-if="project.category">{{ project.category.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'ProjectList',
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

<style lang="sass" scoped>
img
    width: 500px

</style>