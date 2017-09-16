<template>
	<div class="class_main">
		<!-- 顶部搜索 -->
		<div class="header">
			<span>
				<em>王者农药零食专场</em>
			</span>
		</div>
	
		
		<!-- 下方分类 -->
		<div class="classfiy">
			<div class="classfiy_top">
				<ul class="clear">
					<li v-for = "item in list" @click = "changeContent(item)" class="bottom">
							<img :src="item.image_url" alt="">
							<p>{{item.cat_name}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'head',
		data () {
			return {
				list : []
			}
		},
		//获取下方数据
		created(){
			this.$http.get('../../../static/data/class.json').then(res=>{
				// console.log(res.data.result_data.bottom);
				// this.list = res.data.result_data;
				// console.log(res.data.result_data.bottom);
				this.list = res.data.result_data.bottom;
			})
		},
		methods : {
			changeContent : function(type){
				// console.log(type.cat_name);
				this.$router.push({
					name : 'DetailClassify',
					query:{
						id : type.cat_id,
						title : type.cat_name,
					},
				});
			}
		}
	}
</script>

<style>
	.class_main{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: white;
		height: 100%;
		width: 100%;
		overflow-y: auto;
	}
	.header{
	    background: #ff4f39;
	    border-bottom: 1px solid #efefef;
	    position: relative;
	    padding: 0.222222rem 5%;
	    display: block;
		width: 100%;
		position: fixed;
		top:0;
		left: 0;
		background-color:#ff4f39;
		height:1.5rem;

	}
	.header>span{
		width: 90%;
		display: block;
	    height: 0.944444rem;
	  /*  line-height: 1.5rem;*/
	    border-radius: 0.472222rem;
	    color: #ff4f39;
	    background-color: white;
	    /*vertical-align: baseline;
	    position: fixed;*/
	    left: 5%;
	}
	.header>span>em{
		font-style: normal;
	    display: inline-block;
	    height: 0.944444rem;
	    color: red;
	    line-height: 0.944444rem;
	    padding-left: 0.833333rem;
	    font-size: 0.35rem;
	    background: url('../../../static/imgs/icon_search_3.png') no-repeat 0.138889rem;
	    background-size: 0.555556rem;
	    position: fixed;
	    left: 5%;
    	top:0.2rem;

	}
	.classfiy{
		width: 100%;
		position: fixed;
		top: 1.5rem;
		left:0;
		overflow-y: auto;
		height: 80%;
		background-color: white;
	}
	.classfiy_top{
		margin: 0.277778rem 0 0;
	}
	.clear{
	    padding: 0.0.002778rem 0.29rem;
		overflow: hidden;
	}
	.clear>li{
	    float: left;
	    width: 25%;
	    text-align: center;
	    margin: 0 4.1% 10px;
	    max-height: 170px;
	    overflow: hidden;
	    border-radius: 5px;
		/*font-size: 0.35rem;*/
		color: #c7c7c7;
	}
	.clear>li>img{
		display: inline-block;
		width: 2.35rem;
	}
	.bottom{
		float: left;
	    width: 25%;
	    text-align: center;
	    margin: 0 4.1% 10px;
	    border-radius: 5px;
	    list-style: none;
	}
</style>