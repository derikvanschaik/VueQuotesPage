<template>
<div>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  async created(){
    // put all data into local storage that we load into from api. 
    const data = await this.fetchQuotes();
    data.forEach(obj =>{
      let author = obj.author? obj.author: 'Unknown'; 
      if (this.quotes[author]){
        this.quotes[author].push(obj.text); 
      }else{
        this.quotes[author] = [obj.text]; 
        this.authors.push(author); 
      }
      localStorage.setItem('authors', JSON.stringify(this.authors)); 
      localStorage.setItem('quotes', JSON.stringify(this.quotes)); 
    })
  }, 
  data(){
    return{
      quotes: {}, 
      authors: []
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
