import Vue from 'vue';
import router from './router/index.js';
import store from './store/index.js';
import app from './components/app.vue';



new Vue({
	el:'#app',
	components:{app},
	store,
	router
})