<template>
	<div>
		<swiper class='swiper' :options="swiperOption">
			<swiper-slide v-for="(swiper,index) in swiperImgs">
				<img :src="swiper">
			</swiper-slide>
		</swiper>
		<div class="detailPrice">
			<div>￥{{data.shop_price}}</div>
			<div>{{data.goods_name}}</div>
			<div>{{data.goods_subtitle}}</div>
		</div>
		<div class="freePost">
			<span>{{data.activityIco}}</span>
			<div>{{data.goods_sale_plan}}</div>
		</div>
		<div class="divPic">
			<div>
				购物赚味
			</div>
			<div>
				闪电发货
			</div>
			<div>
				正品保障
			</div>
			<div>
				优质服务
			</div>
		</div>
		<div class="recommandedCollocation">
			<div>
				搭配推荐
			</div>
			<div class="swiper1">
				<div v-for="(swiper1,index) in swiperData1">
					<dl>
						<dt>
							<img :src="swiper1.goods_img">
						</dt>
						<dd>
							<div>
								{{swiper1.goods_subtitle}}
							</div>
							<div>
								￥{{swiper1.shop_price}}
							</div>
						</dd>
					</dl>
					
				</div>
			</div>
		</div>
		<div class="foodieSay">
			<div>

			</div>
		</div>
		<div class="datailPic" v-for="(pic,index) in detailPic">
			<img :src="pic"/>
		</div>
		<div class="datailPic" v-for="(pic,index) in detailPic">
			<img :src="pic"/>
		</div>
	</div>
</template>

<script>
	
	export default{
		data () {
			return {
				list:"",
				data:[],
				swiperImgs:[],
				swiperOption: {
			        autoplay: 1500,
			        setWrapperSize :true,
			        pagination : '.swiper-pagination',
			        paginationClickable :true,
			        mousewheelControl : true,
		            observeParents:true,
		            loop : true,
		            autoplayDisableOnInteraction : false,
		        },
		        swiperData1:[],
		        detailPic:[]
			}
		},
		methods:{
			getSelectionDetailData:function(index){
				var $this=this;
				this.$http.get("../../../static/data/selectionDetail"+parseInt(this.list)+".json").then(function(res){
					console.log(JSON.parse(res.request.response).result_data)
					$this.data=JSON.parse(res.request.response).result_data;
					$this.swiperImgs=$this.data.goods_imgs;
					$this.swiperData1=$this.data.recommend_goods;
					$this.detailPic=$this.data.goods_imgs;
					console.log($this.detailPic)
				})
			}
		},
		created () {
			this.list = this.$route.params.data;
			console.log(this.$route.params.data)
			this.getSelectionDetailData(this.list);
		},
	}

</script>

<style>
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	.swiper{
		width:100%;
	}
	.swiper img{
		width:100%;
	}
	.detailPrice{
		width:100%;
		border-bottom:10px solid #EDEDED
	}
	.detailPrice div:nth-of-type(1){
		color:red;
		font-size:20px;
	}
	.detailPrice div:nth-of-type(2){
		color:#444;
		font-size:14px;
		font-weight:bold;
		margin-top:10px;
	}
	.detailPrice div:nth-of-type(3){
		color:#999;
		font-size:14px;
		margin-top:5px;
	}
	.freePost{
		width:100%;
		margin-top:10px;
		height:29px;
		padding-bottom:10px;
		border-bottom:2px solid #EDEDED;
	}
	.freePost span{
		margin-top:2px;
		margin-left:5%;
		width:15%;
		float:left;
		font-size:16px;
		color:red;
		text-align:center;
		height:20px;
		line-height:20px;
		border:1px solid red;
		border-radius:10%;
	}
	.freePost div{
		width:70%;
		float:right;
		color:#777;
		height:24px;
		line-height:24px;
	}
	.divPic{
		width:100%;
		height:60px;
		padding-top:10px;
		border-bottom: 10px solid #EDEDED;
	}
	.divPic div{
		width:25%;
		float:left;
		height:20px;
		lin-height:20px;
		text-align:center;
		color:#666;
		background-image:url(../../../static/data/img/r_icon.png);
		background-repeat:no-repeat;
		background-size:15px 15px;
		margin-top:10px;
		margin-bottom:10px;
	}
	.recommandedCollocation{
		width:100%;
	}
	.recommandedCollocation div{
		font-size:16px;
		margin-top:6px;
		margin-bottom:6px;
	}
	.swiper1{
		width:100%;
		overflow-x:auto;
	}
	.swiper1 div{
		width:200%;

	}
	.swiper1 dl{
		width:16%;
		float:left;
	}
	.swiper1 dl div:first-of-type{
		width:100%;
		overflow: hidden; 
	    text-overflow: ellipsis;
		height:30px;
		font-size:12px;		
	}
	.swiper1 dl div:last-of-type{
		width:100%;
		height:14px;
		font-size:14px;
		color:red;		
	}
	.swiper1 img{
		width:100%;
	}
	.swiper1 dd div:nth-of-type(2){
		background-image:url(../../../static/data/img/shopCartIcon.png);
		background-repeat:no-repeat;
		background-size:30px 14px;
		background-position:60px 0px;
	}
	.datailPic{
		width:100%;
	}
	.datailPic img{
		width:100%;
	}
</style>
