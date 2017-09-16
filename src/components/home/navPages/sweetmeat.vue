<template>
	<div class="by_one">
		<homeheader></homeheader>
		<shoplist :shoplist="list"></shoplist>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import homeheader from '../homeHeader.vue'
	import shoplist from '../shopList.vue'
	import tabbar from '../tabbar.vue'
	export default{
		data () {
			return{
				list: []
			}
		},
		created(){
			this.$http.get('../../../static/data/beCherry/sweetmeat.json').then(res=>{
				// console.log(res.data.result_data.list)
				this.list = res.data.result_data.list;
			})
		},
		components:{
			shoplist, tabbar, homeheader
		}
	}
</script>

<style>
	.by_one_cotainer{
		width: 100%;
		height: 100%;
	}
	.one_header{
		width: 100%;
		height: 3.888889rem;
	}
	.bottom{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.bottom>ul{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #fff;
	}
	.bottom>ul>li{
	    float: left;
	    width: 42%;
	    margin: 0.277778rem 4% 0;
	    padding: 0 0 0.277778rem 0;
	    position: relative;
	    background: #fff;
	    border-radius: 0.138889rem;
	    overflow: hidden;
	}
	
</style>