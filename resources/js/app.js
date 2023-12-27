import './bootstrap';
import {createApp} from 'vue';
import mainapp from './components/mainapp.vue'

import router from './route.js'
import Common from './common.js'

const app = createApp(mainapp)

app.use(router)

app.mount('#app')
app.mixin(Common)