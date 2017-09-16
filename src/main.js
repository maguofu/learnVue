// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import jsonp from 'jsonp'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import lazyload from "vue-lazyload" 
import store from '../src/vuex/store'



// Vue.use(VueAwesomeSwiper)
// Vue.use(jsonp)

Vue.use(lazyload,{
	preLoad : 1.3,
	listenEvents: [ 'scroll' ],
	error: '',//加载失败
	loading: ''//正在加载
})



Vue.use(VueAwesomeSwiper)

Vue.use(lazyload)

Vue.use(lazyload, {
	preload: 1.3,
	error: '',//加载失败
	loading: ''//正在加载
})

Vue.config.productionTip = false

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
