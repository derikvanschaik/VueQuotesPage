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
    async mounted(){
        const data = await this.fetchQuotes();
        data.forEach( quoteObj =>{
            let author = quoteObj.author ? quoteObj.author : `Unknown`; 
            if (this.quotes[author]){
                this.quotes[author].push(quoteObj.text); 
            }else{
                this.quotes[author] = [quoteObj.text];
                this.authors.push(author);  
            }
        })
    }, 
    data(){
        return{
            authors: [], 
            displayedAuthors: [], 
            quotes: {} 
        }
    },
    methods:{
        async fetchQuotes(){
            const result = await fetch('https://type.fit/api/quotes');
            const data = await result.json();
            return data; 
        }
    }
}
</script>