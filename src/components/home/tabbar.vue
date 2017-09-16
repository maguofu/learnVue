<template>
	<nav class="home_nav">
		<ul class="tabbar">
			<li v-for="(item,index) in nav_list" @click="changePage(item.path, index)">
				<span >
					<img :src="currentIndex == index ? item.image_url_select : item.image_url" alt="">
					<span :style="currentIndex == index ? {'color': '#FF4F39'} : {'color': '#9DA1A3'}">{{ item.nav_name }}</span>
				</span>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		// name: 'homeNav',
		//props: ['tabbar'],
		data () {
			return {
				nav_list: [],
				currentIndex: 0
			}
		},
		created () {
			//获取数据
			this.$http.get('../../../static/data/tabbar.json').then(res=>{
				// console.log(res.data.result_data.banner)
				this.nav_list = res.data.result_data.banner
			})
		},
		methods: {
			changePage (data,index) {
				this.$router.push({//编程式导航 vue生态router中
					path:data
				}),
				this.currentIndex = index;
			}
		}
	}
</script>

<style>
	.home_nav .tabbar{
		list-style: none;
		display: flex;
		align-items: center;
		position: fixed;
		line-height: 0.5rem;
		background-color: #fff;
		bottom:0;
		left:0;
		right:0;
		z-index: 34;
	}
	.home_nav .tabbar>li{
		width:25%;
		text-align: center;
	}
	.home_nav .tabbar>li img{
		width: 0.65rem;
	}
	.home_nav .tabbar>li span{
		display: block;
	}
</style>







 <!-- <template>
 	<div>
 		<ul class="daohanglan">
 			<li v-for="item,index in list" @click="change(item,index)">
 				<img :src="currentIndex==index?item.image_url_select:item.image_url" alt="">
 				<span :style="currentIndex==index?{'color':'red'}:{'color':'#ccc'}">{{item.nav_name}}</span>
 			</li>
 		</ul>
 	</div>
 </template>
 <script>
 	export default {
 		data () {
 			return {
 				list : [],
 				currentIndex : 0,
 			}
 		},
 		methods : {
 			change : function(item,index){
 				this.$router.replace({
 					path : item.path
 				})
 				this.currentIndex = index;
 			}
 		},
 		created () {
			this.$http.get("../../../static/data/tabbar.json").then(res=>{
				console.log(res.data.result_data.banner);
				this.list = res.data.result_data.banner;
			})
		},
 	}
 </script>
 <style>
 	.daohanglan{
 		position: fixed;
 		bottom: 0;
 		left: 0;
 		right: 0;
 		z-index: 23;
 		background-color: #fff;
 	}
 	.daohanglan li{
 		height: 1.388889rem;
 		float: left;
 		width: 20%;
 		display: flex;
 		flex-direction: column;
 		justify-content: center;
 		align-items: center;
 	}
 	.daohanglan li img{
 		height: 0.555556rem;
 		width: 0.555556rem;
 	}
 </style> -->