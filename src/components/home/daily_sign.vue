<template>
	<div class="daily_sign_main">
		<div class="sign_box">
			<div class="top_box">
				<div class="top_header">
					<p class="header_img">
						<img src="../../../static/imgs/default_header1.png">
					</p>
						<p class="header_name">18341324973</p>
					<p class="sign_dou">
						<img src="../../../static/imgs/sign-dou.png">&nbsp&nbsp&nbsp&nbsp我的味豆:<em style="color:red;font-size:normal">100</em>

					</p>
				</div>
				<div class="top_btn">
					<div class="btn1">今日签到+5</div>
					<div class="btn2">今日任务<em style="color:red;font-size:normal">0</em>/6</div>
				</div>
			</div>
			<p class="mood">
				 (•̀ᴗ•́)و ̑̑ 与你在一起的<em style="color:red;font-size:normal">2</em>天<em style="color:red;font-size:normal">2017/07/18</em>
			</p>
			<!-- 每日寄语 -->
			<div class="swiper_mood">
				<div class="swier_box">
					<ul>
						<li v-for = "item in list">
							<img :src="item.content_img">
							<div v-html = "item.content"></div>
						</li>
					</ul>
				</div>
				<div class="direct">
					<img src="../../../static/imgs/jt_right.png">
				</div>
			</div>

			<!-- 每日爆款 -->
			<div class="bk">
				<img src="../../../static/imgs/pro_title.png">
				<ul>
					<li v-for = "item in lists">
						<div>
							<img :src="item.goods_img">
						</div>
						<p class="goodsName">{{item.goods_name}}</p>
						<p class="goodsPrice">￥{{(item.shop_price-0)/100}}<span>￥{{(item.market_price-0)/100}}</span></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'head',
		data(){
			return {
				list : [],
				lists : [],
			}
		},
		created(){
			this.$http.get('../../../static/data/daily_mood.json').then(res=>{
				// console.log(res.data.result_data.everyInfo);
				this.list = res.data.result_data.everyInfo;

			}),
			this.$http.get('../../../static/data/day_sign.json').then(res=>{
				console.log(res.data.result_data.good_double_id[0].goods);
				this.lists = res.data.result_data.good_double_id[0].goods;
			})
		}

	}
</script>

<style>
	.top_box{
	    padding-top: 0.833333rem;
	    background: url('../../../static/imgs/sign-bg.png') no-repeat;
	    background-size: 100% 100%;
	    height: 4.7rem;
	}
	.top_header{
	    padding: 0 5%;
	}
	.header_img>img{
		width: 1.833333rem;
		height: 1.833333rem;
	}
	.header_img{
	    width: 1.944444rem;
	    height: 1.944444rem;
	    float: left;
	    border: 0.055556rem solid #fff;
	    border-radius: 0.972222rem;
	    margin-right: 0.277778rem;
	    overflow: hidden;
	}
	.header_name{
		color: #333;
	    font-size: 0.4rem;
	    font-weight: 700;
	    /*height: 3rem;*/
	    line-height: 0.4rem;
	    padding-top: 0.5rem;
	}
	.sign_dou{
	    height: 1rem;
    	line-height: 1rem;
	}
	.sign_dou>img{
		position: absolute;
		top:2rem;
		left:2.6rem;
		width: 0.5rem;
		height: 0.5rem;
		vertical-align: center;
	}
	.top_btn{
	    padding: 0.833333rem 0;
	}
	.top_btn>.btn1{
	    width: 35%;
	    float: left;
	    height: 1.111111rem;
	    line-height: 1.111111rem;
	    background: #ff872f;
	    color: #fff;
	    margin-left: 10%;
	    text-align: center;
	    border-radius: 20px;
	    font-size: 0.4rem;
	}
	.top_btn>.btn2{
	    width: 35%;
	    float: left;
	    height: 1.111111rem;
	    line-height: 1.111111rem;
        background: #ff9e2f;
	    color: #fff;
	    margin-left: 10%;
	    text-align: center;
	    border-radius: 0.555556rem;
	    font-size: 0.4rem;
	}
	.mood{
	    padding: 0.222222rem 3%;
	    background: #ffdb7d;
	    color: #ff872f;
	}
	.mood>em:nth-of-type(2){
		float: right;
		font-weight: 400;
	}
	.swiper_mood{
		padding: 0.277778rem 3% 0.277778rem 8%; 
		position: relative;
	}
	.swiper_mood .swier_box{
	    width: 100%;
		background: #fff;
		padding:0.277778rem; 
	}
	.swiper_mood .swier_box{

	}
	.swiper_mood .swier_box>ul{
		width: 100%;
		display: flex;
		white-space: nowrap;
	    overflow-x: auto;
	    overflow-y: hidden;
	}
	
	.swiper_mood .swier_box>ul>li{
		width: 100%;
		height: 3.444444rem;
		position: relative;
		margin-left: 0.35rem;
	}
	.swiper_mood .swier_box>ul>li>img{
		display: inline-block;
		width: 4.611111rem;
		height: 3.444444rem;
	}
	.swiper_mood .swier_box>ul>li>div{
		top:-1rem;
		left: 0.3rem;
		display: inline-block;
		color: #333;
    	line-height: 0.7rem;
    	position: relative;
	}
	.direct{
		position: absolute;
	    width: 5%;
	    top: 50%;
	    left: 3%;
	    transform: translateY(-50%);
	}
	.direct>img{
	    display: inline-block;
	    width: 100%;
	    vertical-align: middle;
	    width: 0.527778rem;
	    height: 1.083333rem;
	}
	.bk>ul{
		width: 100%;
		height: 100%;
		background-color: white;
		position: absolute;
		left: 0;
	}
	.bk>img{
		display: inline-block;
	    vertical-align: middle;
	    width: 10.416667rem;
	    height: 1.194444rem;
	}
	.bk>ul>li{
		float: left;
	    width: 42%;
	    height: 6.666667rem;
	    margin: 0.416667rem 4% 0;
	    padding: 0 0 0.277778rem;
	    position: relative;
	    background: #fff;
	    border-radius: 0.138889rem;
	    overflow: hidden;
	}
	.bk>ul>li>div>img{
		width: 4.388889rem;
		height: 4.388889rem;
	}
	.bk>ul>li>p{
		font-size: 0.4rem;
		line-height: 0.55rem;
	}
	.goodsPrice{
		color: #ff4f39;
	}
	.goodsPrice>span{
		color: #aaa;
		text-decoration: line-through;
	}
</style>