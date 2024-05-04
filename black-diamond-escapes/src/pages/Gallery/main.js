import './assets/main.css'
import Vue from 'vue';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import EnlargeableImage from '@diracleo/vue-enlargeable-image';


const app = createApp(App)


new Vue({
    el: 'body',
    components: {
      App, Gallery
    },
  });
Vue.use(EnlargeableImage);
app.use(createPinia())
app.use(router)

app.mount('#app')