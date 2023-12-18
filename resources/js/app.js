import './bootstrap';
import {createApp} from 'vue';
import mainapp from './components/mainapp.vue'

import router from './route.js'

const app = createApp(mainapp)

app.use(router)

app.mount('#app')