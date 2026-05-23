import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker'

// main.js
import '@vuepic/vue-datepicker/dist/main.css'
import '@/assets/styles/main.scss'

createApp(App).use(router).use(VueDatePicker).mount('#app')
