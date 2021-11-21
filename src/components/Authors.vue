<template>
    <div>
        <header>
            <h1>This is Authors Page</h1>
            <navigation></navigation>
        </header>

        <ul v-if="authors.length > 0 ">
            <li 
                v-for="author, idx in authors"
                :key="idx"
                >
                <h1>{{author}}</h1>
                <router-link :to="'/authors/'+author.split(' ').join('-')">View Quotes from {{author}}</router-link> 
            </li>
        </ul>

    </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
    components:{Navigation},
    created(){
        this.authors = JSON.parse(localStorage.getItem('authors')); 
    }, 
    data(){
        return{
            authors: [], 
        }
    },

}
</script>