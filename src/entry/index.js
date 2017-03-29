import Vue from 'vue'
import VueRouter from 'vue-router'
import Swiper from '../../static/js/swiper-3.3.1.min.js'
import '../scss/common.scss'
import '../../static/css/swiper.min.scss'

import home from '../vue/home.vue' //容器
import product from '../vue/product.vue' //产品
import solution from '../vue/solution.vue' //解决方案
import apps from '../vue/apps.vue' //APP
import about from '../vue/about.vue' //关于
import newslist from '../vue/newslist.vue' //新闻列表
import news from '../vue/news.vue' //新闻

Vue.use(VueRouter);
const routes = [{
		path: '/',
		component: home,
    	name:'home'
	},{
		path: '/product',
		component: product,
    	name:'product'
	},{
		path: '/solution',
		component: solution,
    	name:'solution'
	},{
		path: '/apps',
		component: apps,
    	name:'apps'
	},{
		path: '/about',
		component: about,
    	name:'about'
	},{
		path: '/newslist',
		component: newslist,
    	name:'newslist'
	},{
		path: '/news/:id',
		component: news,
    	name:'news'
	}
];

const router = new VueRouter({
	routes: routes, // short for routes: routes
	linkActiveClass: 'active', //router-link的选中状态的class，也有一个默认的值
});
const app = new Vue({
	router
}).$mount('#app');
