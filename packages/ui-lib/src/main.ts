import { App } from 'vue';
import './style.css';

import MBtn from './components/MBtn/MBtn.vue'

export { MBtn };

export default {
	install: (app: App) => {
		app.component('MBtn', MBtn);
	},
};
