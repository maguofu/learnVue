<template>
	<div class="home_header">
		<header>
			<div class="search" @click="gosearch">
				<img src="../../../static/imgs/home/icon_search.png" alt="">
			</div>
		</header>
		<nav>
			<ul class="nav">
				<li v-for="(item, index) in navList" :class="{ home_active : currentIndex == index }" @click="changePage(item.name, index)">
				 	<p class="nav_content">
				 		{{ item.title }}
				 		<img :src="item.image_url" alt="" v-if="item.title == ''">
				 	</p>
				</li>
			</ul>
		</nav>
		<div class="content">
			
		</div>
	</div>
</template>

<script>
	export default{
		name: 'homeHeader',
		props: [''],
		data () {
			return {
				currentIndex: 0, 
				navList:[]
			}
		},
		methods: {
			changePage (item, index) {
				this.currentIndex = index;
				this.$router.replace({
					path: item
				})
				// this.$http.get('../../../static/data/beCherry/'+item+'.json')
			},
			gosearch () {
				// console.log(this.$router)
				this.$router.replace({
					path: '/search'
				})
			}
		},
		created () {
			this.$http.get('../../../static/data/beCherry/nav.json')
			.then(res=> {
				//console.log(res.data.result_data.list)
				this.navList = res.data.result_data.list
			})
		}
	}
</script>

<style type="text/css">
	
	.home_header header{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 1.0869rem;
		line-height: 1.0869rem;
		background-color: #fff;
		background-image: url(../../../static/imgs/home/icon_logo.png);
		background-repeat: no-repeat;
		background-size: 15%;
		background-position: center center;
		padding: 0 0.3rem;
		z-index: 99;
	}

	.home_header .search{
		display: block;
		width: 0.6038rem;
		float: right;
		height: 1.0869rem;
		padding-top: 0.2rem;
	}
	.home_header .search img{
		width: 100%;
		height: auto;
		
	}
	.home_header .nav{
		position: fixed;
		top: 1.0869rem;
		left: 0;
		right: 0;
		display: flex;
		font-size: 0.34rem;
		width: 100%;
		overflow-x: auto;
		white-space: nowrap;
		height: 1rem;
		line-height: 1rem;
		z-index: 99;
		background-color: #fff;
		border-bottom: 1px solid rgb(240, 240, 240)
	}
	.home_header .nav li{
		border-top-width: 2px;
		border-top-style: solid;
		border-top-color: rgb(239, 240, 240);
	}
	.home_header .nav .nav_content{
		width: 2.1rem;
		height: 100%;
		text-align: center;
	}
	.home_header .nav_content img{
		width: 100%;
		height: 1rem;
	}
	.home_header .nav .home_active{
		color: #FF5742;
		border-top: 2px solid #FF5843;
	}
</style>

 