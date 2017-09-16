<template>
	<div class="mine_main">
			<!-- 头部 -->
		<div class="top">
			<!-- 第一部分 -->
			<div class="mine_top">
				<div class="mine_img">
					<img src="../../../static/imgs/none_head.png">
				</div>
				<p class="mine_login" @click='test'>登录/注册></p>
			</div>
			<!-- 第二部分 -->
			<div class="mine_second">
				<a href="" class="wd">
					<p class="wd1">0</p>
					<p class="wd1">味豆</p>
				</a>
				<a href="" class="yhq">
					<p class="yhq1">0</p>
					<p class="yhq1">优惠券</p>
				</a>
			</div>
		</div>

		
		<!-- 第三部分 -->
		<div class="mine_middle">
			<div class="item_list">
				<a href="">
					<p class="my_order">我的订单</p>
					<span class="look_order">查看全部订单></span>
				</a>
			</div>
			<div class="order_list">
				<a href="" class="link_li">
					<img src="../../../static/imgs/payment.png" height="96" width="96">
					<p>待付款</p>
				</a>
				<a href="" class="link_li">
					<img src="../../../static/imgs/delivery.png" height="96" width="96">
					<p>待发货</p>
				</a>
				<a href="" class="link_li">
					<img src="../../../static/imgs/receive.png" height="96" width="96">
					<p>待收货</p>
				</a>
				<a href="" class="link_li">
					<img src="../../../static/imgs/Evaluation.png" height="96" width="96">
					<p>待评价</p>
				</a>
				<a href="" class="link_li">
					<img src="../../../static/imgs/Refunds.png" height="96" width="96">
					<p>退款/售后</p>
				</a>
			</div>
		</div>
		<!-- 底部 -->
		<div class="mine_bottom">
			<div class="bottom_list">
				<div class="item_box">
					<p class="application">常用功能</p>
				</div>
			</div>
			<div class="bottom_order">
				<a href="" class="bottom_link">
					<img src="../../../static/imgs/member.png" height="96" width="96">
					<p>会员中心</p>
				</a>
				<a href="" class="bottom_link">
					<img src="../../../static/imgs/shop.png" height="96" width="96">
					<p>味豆商城</p>
				</a>
				<a href="" class="bottom_link">
					<img src="../../../static/imgs/Positioning.png" height="96" width="96">
					<p>地址管理</p>
				</a>
				<a href="" class="bottom_link">
					<img src="../../../static/imgs/start.png" height="96" width="96">
					<p>收藏</p>
				</a>
				<a href="" class="bottom_link">
					<img src="../../../static/imgs/service.png" height="96" width="96">
					<p>帮助中心</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		methods:{
			test () {
				this.$router.push({path : 'test'})
			}
		}
	}
</script>

<style>
	.mine_main{
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.top{
	    background: url('../../../static/imgs/u_bg.png') no-repeat;
	    background-size: 100% auto;
	    height: 4.5rem;
	}
	.mine_top{
		width: 90%;
		height: 1.666667rem;
		display: flex;
		position: fixed;
		left: 9%;
		top:5%;
	}
	.mine_img{
	    width: 1.666667rem;
	    height: 1.666667rem;
	    border-radius: 50%;
	    overflow: hidden;
	    left: 1rem;
		
	}
	.mine_img>img{
		width: 1.666667rem;
		height: 1.666667rem;
		vertical-align: center;

	}
	.mine_login{
		display: inline-block;
		    flex: 1;
	    color: #fff;
	    line-height: 0.8rem;
	    font-size: 0.4rem;
	    margin-left: 0.6rem;
	}
	.mine_second{
	    padding: 0.277778rem 0;
	    width: 92%;
	    margin: 0 auto;
	    border-radius: 0.277778rem;
	    background: #fff;
	    z-index: 3;
	    display: flex;
	    position: fixed;
	    top:3.3rem;
	    left: 4%;
	}
	.mine_second .wd{
		text-align: center;
		width: 46%;
	}
	.mine_second .wd .wd1 {
		font-size: 0.4rem;
	    line-height: 0.65rem;
	    color: #666;
	}
	.mine_second .yhq{
		text-align: center;
		width: 50%;
	}
	.mine_second .yhq .yhq1{
		font-size: 0.4rem;
	    line-height: 0.65rem;
	    color: #666;
	}
	.mine_middle{
	    width: 92%;
	    margin: 0.277778rem auto 0;
	    border-radius: 0.277778rem;
	    overflow: hidden;
	    background: #fff;
	    position: fixed;
	    top:5.1rem;
	    left: 4%;
	}
	.item_list{
	    border-bottom: 1px solid #ededed;
	    background: #fff;
	    padding: 0 4%;
	    height: 1.25rem;
	    line-height: 1.25rem;
	}
	.my_order{
		width: 37%;
		display: inline-block;
	    flex: 1;
	    color: #333;
	    font-size: 0.42rem;
	}
	.look_order{
		display: inline-block;
	    color: #999;
	    font-size: 0.4rem;
	    width: 55%;
	    text-align: right;
	}
	.order_list{
	    height: 1.555556rem;
	    line-height: 0.694444rem;
	    background: #fff;
	    padding: 0.416667rem 0;
	}
	.link_li{
		display: inline-block;
	    text-align: center;
	    position: relative;
	    float: left;
	    width: 20%;
	}
	.link_li>img{
		width: 0.583333rem;
		height: 0.583333rem
	}
	.link_li>p{
		color: #666;
	}
	.mine_bottom{
	    width: 92%;
	    margin: 0.277778rem auto 0;
	    border-radius: 0.277778rem;
	    overflow: hidden;
	    background: #fff;
	    position: fixed;
	    top:9rem;
	    left: 4%;
	}
	.bottom_list{
	    border-bottom: 1px solid #ededed;
	    background: #fff;
	    padding: 0 4%;
	    height: 1.25rem;
	    line-height: 1.25rem;
	}
	.application{
		font-size: 0.42rem;
	}
	.bottom_order{
		padding: 0.416667rem 0 0.027778rem;
	}
	.bottom_link{
		width: 25%;
   		margin-bottom: 0.416667rem;
	    display: block;
	    text-align: center;
	    position: relative;
	    float: left;
	}
	.bottom_link>img{
		width: 0.944444rem;
		height: 0.972222rem;
	}
	.bottom_link>p{
		color:#666;
	}

</style>