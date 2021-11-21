<template>
    <div>
        <h1>{{author}}</h1>
        <ul>
            <li v-for="quote in quotes" :key="quote">
                <h3>{{quote}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async created(){
        this.author = this.$route.params.author.split("-").join(" "); 
        await this.getQuotesByAuthor();
        console.log(this.quotes); 
    }, 
    data(){
        return{
            quotes: [], 
            author: '' 
        }
    }, 
    methods:{
        async fetchQuotes(){
            const result = await fetch('https://type.fit/api/quotes'); 
            const data = await result.json(); 
            return data; 
        }, 
        async getQuotesByAuthor(){
            const quotes = await this.fetchQuotes();
            console.log("fetching quotes for this author: ", this.author); 
            quotes.forEach(quote =>{
                if (quote.author === this.author){
                    console.log("quote author", quote.author, "this author", this.author); 
                    this.quotes.push(quote.text); 
                }
            });

        }
    }
}
</script>