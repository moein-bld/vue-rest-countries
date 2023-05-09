import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLazyload, {
    lazyComponent: true,
	attempt: 1,
    observer: true,
	listenEvents: ['scroll'],
});

app.mount('#app');
