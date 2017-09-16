<template>
	<div class="search">
		<div class="search_header">
			<span class="back" @click="goback"></span>
			<input type="text" placeholder="夏日新食力">
			<span class="search_right">搜索</span>
		</div>
		<div class="search_content">
			<p class="hot">热门搜索</p>
			<ul class="li">
				<li v-for="item in searchList" class="li_content" :style="{color: item.color, borderColor: item.color}">
					{{ item.word }}
				</li>
			</ul>
		</div>	</div>

</template>
	
<script>
	export default{
		name: 'search',
		data () {
			return {
				searchList: []
			}
		},
		methods: {
			goback () {
				history.back();
			}
		},
		created () {
			this.$http.get('../../../static/data/beCherry/search.json')
			.then(res=>{
				// console.log(res.data.result_data.list)
				this.searchList = res.data.result_data.list
			})
		}
	}
</script>

<style>
	.search{
		background-color: #fff;
		font-size: 14px;
	}	
	.search .search_header{
		width: 100%;
		height: 1.3rem;
		line-height: 1.3rem;
		border-bottom: 1px solid #ddd;
		padding: 
	}
	.search .search_header .back{
		/*display: inline-block;*/
		float: left;
		width: 10%;
		height: 1.3rem;
		background: url(../../../static/imgs/home/back.png) no-repeat center center;
		background-size: 70%;
	}
	.search .search_header input[type=text]{
		width: 80%;
		height: 34px;
		border: none;
		background: #eee url(http://img2.vipbcw.com/wap/svg/icon_search_3.svg) no-repeat 5px;;
		border-radius: 17px;
		background-size: 10%;
		text-indent: 11%;
		outline: none;
	}
	.search .search_content{
		clear: both;
		padding: 0 0.277778rem 0.444444rem 0;
		margin-left: 0.416667rem; 
		padding-right: 0.277778rem;
	    padding-bottom: 0.444444rem;
	    border-bottom: 1px solid #f5f5f5;
	}
	.search .hot{
		height: 1rem;
		line-height: 1rem;
		text-indent: 0.222222rem
	}
	.search .hot:before{
		content: "|";
		color: #ff4f39;
		font-weight: 700;
		margin-right: 5px;
	}
	.search .li_content{
		border: 1px solid #bbb;
		display: inline-block;
		padding: 3px 0.222222rem;
		margin: 0.277778rem 0.277778rem 0 0;
		border-radius: 0.388889rem;
	}
</style>















