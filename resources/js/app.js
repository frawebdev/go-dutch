require('./bootstrap');

import { createApp } from 'vue'
import router from './vue/router'
import App from './vue/app.vue'

createApp({
    components: { App }
})
.use(router)
.mount('#app')