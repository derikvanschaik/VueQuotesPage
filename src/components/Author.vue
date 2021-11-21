<template>
    <div>
        <h1>{{author}}</h1>
        <ul class="quotes-list-container">
            <li v-for="quote, idx in quotes" :key="quote" class="quote-container">
                <h3>{{idx + 1}}. {{quote}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.author = this.$route.params.author.split("-").join(" "); 
        const allQuotes = JSON.parse(localStorage.getItem('quotes')); 
        this.quotes = allQuotes[this.author]; 
    }, 
    data(){
        return{
            quotes: [], 
            author: '' 
        }
    }, 
    methods:{
    }
}
</script>
<style scoped>
.quote-container{
    list-style-type: none;
}
.quotes-list-container{
    overflow-y: scroll;
    height: 20em; 
    border: 1px solid; 
    border-radius: 0.5em;
    text-align: left; 
}
</style>