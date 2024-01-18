import { createApp } from 'vue'
import App from './App.vue'
// import sensenUi from '../modules/sensen-ui'
import tranfers from '../modules/sensen-ui/transfer/index.js';

createApp(App).use(tranfers).mount('#app')
