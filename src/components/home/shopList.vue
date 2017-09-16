<template>
	<div class="shop_list">
		<div class="postage_main" id="gototop">
			<div class="postage_head">
				<img src="../../../static/imgs/post.jpg" height="360" width="750">
			</div>
			<div class="postage_bottom">
				<div>
					<ul>
						<li v-for = "item in shoplist">
							<img :src="item.goods_img">
							<p class="goods_name">{{item.goods_name}}</p>
							<p class="goods_direction">{{item.goods_subtitle}}</p>
							<p class="goods_price">￥{{item.shop_price}}&nbsp&nbsp<span>￥{{item.market_price}}</span></p>
							<div class="cart">
								<img src="../../../static/imgs/cart-img2.jpg" @click = "addGood(item)">
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="fixed_cart">
				<img src="../../../static/imgs/icon_cart3.png">
			</div>
			<div class="goTop" id="goTop">
				<a href="javascript:scroll(0,50)"><img src="../../../static/imgs/icon_goTop.png"></a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'shopList',
		props: ['shoplist'],
		data (){
			return {
				// list : [],
			}
		},
		methods: {
			addGood :function(item){
				console.log(item);
				this.$store.dispatch('addGoods',item);
			}
		}

	}

</script>

<style>
	.shop_list{
		width: 100%;
		height: 100%;
		padding: 2.1378rem 0 .5rem 0;

	}
	.postage_head>img{
	    display: inline-block;
	    width: 100%;
	    height: 5.0rem;
	    vertical-align: middle;
	}
	.postage_bottom{
		width: 100%;
		height:100%;
	}
	.postage_botto>div{
		width: 100%;
		height: 100%;
	}
	.postage_bottom>div>ul{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #fff;
	}
	.postage_bottom>div>ul>li{
	    float: left;
	    width: 42%;
	    margin: 0.277778rem 4% 0;
	    padding: 0 0 0.277778rem 0;
	    position: relative;
	    background: #fff;
	    border-radius: 0.138889rem;
	    overflow: hidden;

	}
	.postage_bottom>div>ul>li>img{
		width: 4.388889rem;
		height: 4.388889rem;
	}
	.goods_name{
		height: 0.4rem;
	    overflow: hidden;
	    line-height: 0.4rem;
	    margin-top: 0.222222rem;
	    font-size: 0.4rem;
	}
	.goods_direction{
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
        color: #999;
	    margin: 0 0 0.222222rem;
	    height: 0.4rem;
	    font-size: 0.3rem;
	    line-height: 0.4rem;
	    margin-top: 0.3rem;
	}
	.goods_price{
		display: inline-block;
	    font-size: 0.4rem;
		color: #ff4f39;
	}
	.goods_price>span{
		color: #999;
		font-size: 0.2rem;
		text-decoration: line-through;
	}
	.cart{
	    right: 0.055rem;
	    bottom: 0.277778rem;
	    width: 30%;
	    height: 0.666667rem;
	    display: inline-block;
	    position: absolute;
	}
	.cart>img{
		width: 1.305556rem;
		height: 0.666667rem;
		
	}
	.fixed_cart{
		bottom: 1.805556rem;
	    background: rgba(255,255,255,1);
    	border: solid 0.027778rem #c5c5c5;
	    position: fixed;
	    width: 0.694444rem;
	    height: 0.694444rem;
	    padding: 0.25rem;
	    border-radius: 0.694444rem;
	    right: 5%;
	    text-align: center;
	    line-height: 0.75rem;
	    z-index: 888;
	}
	.fixed_cart>img{
		width: 0.694444rem;
		height: 0.694444rem;
	}
	.goTop{
		width: 0.694444rem;
	    height: 0.694444rem;
		display: block;
	    background: rgba(255,255,255,1);
    	border: solid 0.027778rem #c5c5c5;
	    position: fixed;
	    padding: 0.25rem;
	    border-radius: 0.694444rem;
	    right: 5%;
	    text-align: center;
	    line-height: 0.75rem;
	    z-index: 888;
        bottom: 0.277778rem;
        display: none;
	}
	.goTop>a>img{
		width: 0.694444rem;
		height: 0.694444rem; 
	}
</style>



