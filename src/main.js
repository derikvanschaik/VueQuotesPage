import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router' 
import App from './App.vue'

import Home from './components/Home.vue' 
import Authors from './components/Authors.vue' 
import Author from './components/Author.vue' 
const router = createRouter({
    routes: [
        {path: '/', component: Home }, 
        {path: '/authors', component: Authors},
        {path:'/authors/:author', component: Author}
    ], 
    history: createWebHistory() 
})

const app = createApp(App)
app.use(router) 
app.mount('#app')
