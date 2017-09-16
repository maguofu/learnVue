<template>
	<div class="classDetailPage">
		<div class="classDetailHead"><b @click="back">&lt</b><span>{{titleHead}}</span></div>
		<ul>
			<li v-for="(i,index) in navList" :class="currentIndex==index?'navItem':''" @click="change(index)">{{i.title}}</li>
		</ul>
		<div class="goodsContainer">
			<router-link :to="{name:'cart'}">
				<div class="gotoCart">
					<img src="../../../static/images/huicart.png" height="22" width="23" alt="">
					<div v-show="goodsArr.length>0">{{getNumber}}</div>
				</div>
			</router-link>
			<div v-for="item in classifyDataList" class="good">
				<img :src="item.goods_icon" alt="">
				<div class="goodDesContainer">
					<p class="goodDes">{{item.goods_title}}</p>
					<p class="goodPrice">￥{{item.shop_price}}</p>
					<div @click="addGood(item)" class="fade">
						<img src="../../../static/images/icon_cart3_white.png" height="72" width="72" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="addedGood">加入购物车成功</div>
	</div>
</template>
<script src="../../../static/jquery-1.11.2.min.js"></script>
<script>
	export default {
		data () {
			return {
				id : '',
				classifyDataList : [],
				navList : [{title : '销量'},{title : '新品'},{title : '价格'}],
				currentIndex : 0,
				titleHead : '',
				goodsArr : [],
				number : 0
			} 
		},
		computed : {
			getNumber : function(){
				var number = 0;
				this.$store.getters.getGoodsList.forEach(i=>{
					number += i.num;
				})
				return number; 
			}
		},
		methods : {
			// 获取数据
			getClassifyDataDetail : function(){
				this.$http.get('../../../static/data/classify_detail/detail'+(this.id)+'.json').then(res=>{
					this.classifyDataList = res.data.result_data.list;
				})
			},
			// 导航tab切换
			change : function(index){
				this.currentIndex = index;
			},
			// 返回按钮
			back : function(){
				history.back();
			},
			// 添加商品
			addGood :function(item){
				this.$store.dispatch('addGoods',item);
				//addGoods是store.js中action中的addGoods函数
			},
		},
		created () {
			this.id = this.$route.query.id;
			this.titleHead = this.$route.params.title;
			this.getClassifyDataDetail(); 
			this.goodsArr = this.$store.getters.getGoodsList;
		},
	}
</script>
<style>
	/*加入购物车成功*/
	.addedGood{
		width: 3.777778rem;
		line-height: 1.666667rem;
		position: fixed;
		top: 45%;
		left: 32%;
		background-color: #999;
		text-align: center;
		border-radius: 0.355556rem;
		color: #fff;
		font-size: 0.4rem;
		/*opacity: 0;*/
		display: none;
	}
	@keyframes fade{
		25%{
			opacity: 0.5
		}
		50%{
			opacity: 1
		}
		75%{
			opacity: 0.5
		}
		100%{
			opacity: 0;
		}
	}
	/*整个详情页*/
	.classDetailPage{
		background-color: #EDEDED;
	}
	/*头部*/
	.classDetailHead{
		line-height: 1.388889rem;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		font-size: 0.5rem;
		padding: 0 9px;
		z-index: 34;
	}
	.classDetailHead span{
		position: absolute;
		left: 40%;
	}
	/*导航*/
	.classDetailPage ul{
		position: fixed;
		top: 1.444444rem;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 23;
	}
	.classDetailPage ul li{
		float: left;
		line-height: 0.888889rem;
		width: 33.333%;
		text-align: center;
		font-size: 0.4rem;
		position: relative;
	}
	.navItem:after{
		content: "";
		display: inline-block;
		width: 70%;
		height: 2px;
		background-color: red;
		position: absolute;
		bottom: 0;
		left: 15%;
	}
	/*所有商品容器*/
	.goodsContainer{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 2.277778rem;
	}
	/*每个商品容器*/
	.good{
		width: 49.3%;
		background-color: pink;
		background-color: #fff;
		margin-top: 0.277778rem;
	}
	/*每个商品图片*/
	.good img{
		width: 100%;
	}
	/*商品信息容器*/
	.goodDesContainer{
		height: 2.2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	.goodDesContainer>p{
		font-size: 0.388889rem;
		text-indent: 0.138889rem;
		line-height: 0.555556rem;
	}
	/*商品价格*/
	.goodPrice{
		color: #FF4E53;
		margin-bottom: 0.277778rem;
	}
	/*添加购物车图标*/
	.goodDesContainer>div{
		width: 1.25rem;
		height: 0.694444rem;
		border-radius: 0.416667rem;
		background-color: #FF4F39;
		position: absolute;
		right: 0.277778rem;
		bottom: 0.277778rem;
	}
	.goodDesContainer>div>img{
		width: .6rem;
		height: .6rem;
		position: absolute;
		left: 20%;
		top: 0.083333rem;
	}

	/*点击跳转到购物车页面*/
	.gotoCart{
		width: 1.666667rem;
		height: 1.666667rem;
		position: fixed;
		bottom: 0.833333rem;
		right: 15px;
		border: 1px solid #E3E3E3;
		border-radius: 50%;
		background-color: #fff;
		z-index: 34;
	}
	.gotoCart>img{
		position: absolute;
		top: 30%;
		left: 30%;
	}
	.gotoCart>div{
		width: 0.555556rem;
		height: 0.555556rem;
		text-align: center;
		line-height: 0.555556rem;
		background-color: #FF4348;
		border-radius: 50%;
		position: absolute;
		z-index: 23;
		color: #fff;
		left: 55%;
		top: 10%;
	}
</style>