<!-- 首页会员中心部分 -->
<template>
	<!-- 上方 -->
	<div class="member_main">

		<div class="member_box">
		<div class="member_top">
			<div class="ab_box">
				<div class="img_box">
					<img src="../../../static/imgs/default_header1.png">
				</div>
				<div class="center_box">
					<p>18341324973<span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp成长值0/1</span></p>
					
					<div class="v-line">
					</div>
				</div>
				<div class="lever_box">
					<img src="../../../static/imgs/mem_v-1.png" height="90" width="120">
				</div>
			</div>
		</div>
		<a href="" class="wh">
			<img src="../../../static/imgs/wh.png">
		</a>
	</div>

	<div class="member_nav">
		<ul class="nav_box">
			<li>
				<img src="../../../static/imgs/new_person.png">
				<p>新人有礼</p>
			</li>
			<li>
				<img src="../../../static/imgs/bao.png" height="96" width="96">
				<p>购物赚味豆</p>
			</li>
			<li>
				<img src="../../../static/imgs/pj.png" height="96" width="96">
				<p>评价奖励</p>
			</li>
			<li>
				<img src="../../../static/imgs/sjlb.png" height="96" width="96">
				<p>升级礼包</p>
			</li>
			<li>
				<img src="../../../static/imgs/byq.png" height="64" width="64">
				<p>包邮券</p>
			</li>
			<li>
				<img src="../../../static/imgs/gift.png" height="96" width="96">
				<p>生日大礼</p>
			</li>
			<li>
				<img src="../../../static/imgs/hyj.png" height="96" width="96">
				<p>会员价</p>
			</li>
			<li>
				<img src="../../../static/imgs/sc.png" height="96" width="96">
				<p>新品试吃</p>
			</li>
		</ul>
		<p>
			<img src="../../../static/imgs/ck.png">
		</p>
	</div>

	<div class="member_banner">
		<img src="../../../static/imgs/wjs.png" height="120" width="750">
		<ul>
			<li v-for = "item in list">
				<img :src="item.image_url">
			</li>
		</ul>
	</div>
	</div>
</template> 

<script>
	export default {
		name : 'head',
		data () {
			return {
				list : []
			}
		},
		created(){
			this.$http.get('../../../static/data/member_center.json').then(res=>{
				// console.log(res.data.result_data);
				this.list =  res.data.result_data;
			})
		}
	}
</script>

<style>
	.member_box{
		width: 100%;
		height: 100%;
		overflow-y: hidden;
	}
	.member_top{
		width: 10.416667rem;
		height: 4.166667rem;
		background-image: url('../../../static/imgs/me_bg.ba2526c.png') ;
		background-size: auto 4.166667rem;
	}
	.ab_box{
	    display: flex;
    	height: 1.25rem;
	    width: 90%;
	    position: absolute;
	    top: 11%;
	    left: 50%;
	    text-align: center;
	    transform: translate(-50%,-50%);
	}
	.img_box{
		width: 1.25rem;
	    height: 1.25rem;
	    border-radius: 50%;
	    overflow: hidden;
	    margin-right: 3%;
	    vertical-align: middle;
	}
	.img_box>img{
		width: 1.25rem;
		height: 1.25rem;
	}

	.center_box>p{
	    text-align: left;
	    color: #fff;
	    line-height: 0.833333rem;
	    font-size: 0.4rem;
	}
	.center_box>p>span{
		float: right;
    	font-size: 0.4rem;
	}
	.lever_box{
	    width: 0.972222rem;
	    padding-top: 0.222222rem;
	    margin-left: 8%;
	}
	.lever_box>img{
		width: 0.972222rem;
		height: 0.722222rem;
	}
	.v-line{
		width: 100%;
	    height: 0.138889rem;
	    border-radius: 0.111111rem;
	    background: #4b20a8;
	    text-align: left;
	}
	.wh{
	    position: absolute;
	    width: 0.527778rem;
	    height: 0.527778rem;
	    top: 0.222222rem;
	    right: 3%;
	    padding: 0.222222rem;
	}
	.wh>img{
		display: inline-block;
	    width: 100%;
	    vertical-align: middle;
	}
	.member_nav{
	    margin-bottom: 0.277778rem;
    	background: #fff;
	}
	.member_nav>ul{
		height: 4.722222rem;
	    overflow: hidden;
	    transition: height .6s ease;
	}
	.member_nav>ul>li{
	    float: left;
	    width: 25%;
	    padding: 0.416667rem 0;
	    text-align: center;
	}
	.member_nav>ul>li>img{
		width: 0.75rem;
		height: 0.75rem;
	}
	.member_nav>ul>li>p{
		line-height: 0.555556rem;
	}
	.member_nav>p>img{
		width: 10.416667rem;
		height: 33px;
	}
	.member_banner>img{
		width: 10.416667rem;
		height: 1.666667rem;
	}
	.member_banner>ul>li>img{
		width: 10.416667rem;
		height: 5.277778rem;
	}
</style>