import './assets/main.css'
import { createManager } from '@vue-youtube/core';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
//import VueYouTubeEmbed from 'vue-youtube-embed';


import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(createManager());
app.use(createPinia());
app.use(router);


app.mount('#app');
