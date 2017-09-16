import Vue from 'vue' 
import Router from 'vue-router'


Vue.use(Router)
//一级路由
import Home from '../pages/home/home'
import Class from '../pages/class/class'
import Eat from '../pages/eat/eat.vue'
import Cart from '../pages/cart/cart'
// import Mine from '../pages/mine/mine'
//home页路由
import Bogof from '../components/home/navPages/bogof'
import Candy from '../components/home/navPages/candy'
import Driedtofu from '../components/home/navPages/driedtofu'
import Import from '../components/home/navPages/import'
import Nut from '../components/home/navPages/nut'
// import Recommend from '../components/home/navPages/recommend'
import Seafood from '../components/home/navPages/seafood'
import Sweetmeat from '../components/home/navPages/sweetmeat'

//eat页路由
import Choose from '../pages/eat/choose'
import Dalay from '../pages/eat/dalay'
import Knowledge from '../pages/eat/knowledge'
//详情页路由
import Detail from '../components/eat/detail'
import DetailClassify from '../components/class/detail'
import Search from '../components/home/search'

import SelectionDetail from '../pages/home/selectionDetail'


import Member_center from '../pages/home/member_center'
import Daily_sign from '../components/home/daily_sign'
import Dou_shop from '../components/home/dou_shop'
import Postage from '../components/home/postage'


// vux学习测试
import Test from '../components/mine/my'

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
		 	component: Home,
		},
    	{
			path: '/home',
			name: 'home',
		 	component: Home
		},
		{
			path: '/class',
			name: 'class',
		 	component: Class,
		},
		{
			path: '/eat',
			name: 'eat',
		 	component: Eat
		},
		{
			path: '/cart',
			name: 'cart',
		 	component: Cart,
		},
		// {
		// 	path: '/mine',
		// 	name: 'mine',
		//  	component: Mine,
		// },
		{
	        path: '/detail',
			name: 'Detail',
		 	component: Detail,
	    },
	    {
	        path: '/member_center',
			name: 'Member_center',
		 	component: Member_center,
	    },
	    {
	        path: '/daily_sign',
			name: 'Daily_sign',
		 	component: Daily_sign,
		},
	    { 
	    	path: '/search', 
	    	name: 'searct', 
	    	component: Search 
		 },
		 {
	        path: '/detailclassify',
			name: 'DetailClassify',
		 	component: DetailClassify,
	    },
	     {
	        path: '/dou_shop',
			name: 'Dou_shop',
		 	component: Dou_shop,
	    },
	    { 
	        path: '/postage',
			name: 'Postage',
		 	component: Postage,
	    },
	    {
	        path: '/selectionDetail',
			name: 'SelectionDetail',
		 	component: SelectionDetail
	    },
	    {
	    	path: '/test',
	    	name: 'test',
	    	component: Test
	    },
	    { path: '/bogof', name: 'bogof', component: Bogof },
 		{ path: '/candy', name: 'candy', component: Candy },
 		{ path: '/driedtofu', name: 'driedtofu', component: Driedtofu },
 		{ path: '/import', name: 'import', component: Import },
 		{ path: '/nut', name: 'nut', component: Nut },
 		// { path: '/recommend', name: 'recommend', component: Recommend },
 		{ path: '/seafood', name: 'seafood', component: Seafood },
 		{ path: '/sweetmeat', name: 'sweetmeat', component: Sweetmeat },

	]
})
