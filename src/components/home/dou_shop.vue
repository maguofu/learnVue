<template>
	<div class="dou_main">
		<!-- 引入轮播图组件 -->
		<swiper :swiperPic="pic">
		</swiper>

		<div class="dou_container">
			<div class="dou_header">
				<div class="direc">
					<img src="../../../static/imgs/left.png">
				</div>味豆商城
			</div>
			<div class="dou_bottom">
				<div class="mall_nav">
					<ul>
						<li>
							<a href="">
								<img src="../../../static/imgs/wd_icon1.png" height="40" width="40">味豆&nbsp&nbsp<i style="font-style:normal;color:red">0</i>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../../../static/imgs/wd_icon2.png" height="40" width="40">兑换记录
							</a>
						</li>
					</ul>
				</div>
				<div class="mall_icon_nav">
					<ul>
						<li v-for = "item in items">
							<img :src="item.image_url">
							<p>{{item.nav_name}}</p>
						</li>
					</ul>
				</div>
				<div class="level_tab">
					<div>v0-v4</div>
					<div>v1-v4</div>
					<div>v2-v4</div>
					<div>v3-v4</div>
					<div>v4专享</div>
				</div>
				<div class="level_icon_tab">
					<ul>
						<li v-for = "item in lists">
							<img :src="item.goods_img">
							<p class="goods_names">{{item.goods_name}}</p>
							<p style="color:red">{{item.integration_number}}<i style="font-style:normal;color:#999">&nbsp&nbsp味豆</i></p>
							<p class="dou_change" href = "../../components/home/duihuan.vue">兑换</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入
	import swiper from './swiper'

	export default{
		name :'head',
		components : {
			swiper
		},
		data () {
			return {
				pic : [],
				items : [],
				lists : [],
			}
		},
		created(){
			this.$http.get('../../../static/data/dou_shop_banner.json').then(res=>{
				// console.log(res.data.result_data.banner_list)
				//pic是轮播图插件的数组，不可更改
				this.pic = res.data.result_data.banner_list;
				this.items = res.data.result_data.nav_list;
			}),
			this.$http.get('../../../static/data/dou_shop.json').then(res=>{
				this.lists = res.data.result_data.goods_list;
			})
		}
	}
</script>

<style>
	.dou_container{
		margin-top: 0;
	}
	.dou_header{
	    border-bottom: 1px solid #ccc;
	    width: 100%;
	    height: 1.388889rem;
	    background-color: #fff;
	    position: fixed;
	    top: 0;
	    left: 0;
	    text-align: center;
	    font-size: 0.4rem;
	    line-height: 1.388889rem;
	    z-index: 99;
	    color: #3c4347;
	}
	.direc{
	    position: absolute;
	    left: 0;
	    top: 0.2rem;
	    display: inline-block;
	    padding-left: 2%;
	    text-align: left;
	}
	.direc>img{
		width: 0.777778rem;
		height: 0.805556rem;
	}
	.dou_bottom{
	    /*margin-top: 1.388889rem;*/
    	background-color: #eee
	}
	.dou_flash{
	    position: relative;
    	overflow: hidden;
	}
	.dou_flash>img{
		width: 10.416667rem;
		height: 4.166667rem;
	}
	.mall_nav{
		width: 100%;
		height: 1.111111rem;
		background: #fff;
    	margin-bottom: 0.194444rem;
	}

	.mall_nav>ul>li{
	    width: 50%;
	    float: left;
	    padding: 0.277778rem 0;
	    text-align: center;
	    height: auto;
	    line-height: normal;
	}
	.mall_nav>ul>li>a{
		display: block;
	    color: #3c4347;
	    height: 0.555556rem;
	    line-height: 0.555556rem;
	    border-right: 0.027778rem solid #bababa;
	}
	.mall_nav>ul>li>a>img{
		width: 0.444444rem;
		height: 0.444444rem;
		margin-right: 0.138889rem;
	}
	.mall_icon_nav>ul{
	    display: flex;
   	 	background: #fff;
	}
	.mall_icon_nav>ul>li{
	    -webkit-box-flex: 1;
	    flex: 1;
	    text-align: center;
	    padding: 0.416667rem 0;
	}
	.mall_icon_nav>ul>li>img{
		width: 1.194444rem;
		height: 1.222222rem;
	}
	.level_tab{
	    background: #fff;
    	margin: 0.194444rem auto 0;
    	width: 100%;
    	height: 1.111111rem;
	}
	.level_tab>div{
	    float: left;
	    width: 2rem;
	    text-align: center;
	    height: 40px;
	    line-height: 40px;
	}
	.level_tab>div:nth-of-type(1){
		border-bottom: 0.027778rem solid red;
		color: red;
	}
	.level_icon_tab{
		width: 100%;
		padding-bottom: 0.277778rem;
	}
	.level_icon_tab>ul>li{
	    width: 39%;
	    float: left;
	    padding: 0.277778rem;
	    margin: 0.277778rem 3% 0;
	    background: #fff;
	    margin-right: 1.5%;
	    display: inline-block;
	}
	.level_icon_tab>ul>li>img{
		width: 4.194444rem;
		height: 4.194444rem;
	}
	.goods_names{
	    color: #333;
	    height: 1.1rem;
	    line-height: 1.1rem;
	    overflow: hidden;
	    margin: 0.138889rem 0 0;
	}
	.dou_change{
		font-size: 0.4rem;
		width: 60%;
	    height: 1rem;
	    line-height: 1rem;
	    border-radius: 0.5rem;
	    background: #ff4f38;
	    color: #fff;
	    margin: 0.138889rem auto 0;
	    text-align: center;
	}
</style>