require('./bootstrap');

import { createApp } from 'vue'
import router from './vue/router'
import store from './vue/store/index'
import App from './vue/app.vue'

createApp({
    components: { App }
})
.use(router)
.use(store)
.mount('#app')