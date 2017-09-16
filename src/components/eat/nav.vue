<template> 
	<div>
		<ul class="eat_nav">
			<li v-for="(item,index) in list" @click="changeContent(item.type,index)" :class="currentIndex==index?'active':''">
				<img :src="item.image_logo" alt="">
				<p>{{item.title}}</p>
			</li>
		</ul>
		<div class="daily">
			<div v-for="i in daily">
			<!-- <div v-for="i in daily" @click="goto(i.eat_id)"> -->
				<router-link :to="{name:'Detail',query:{id:i.eat_id}}">
					<!-- 用query传参的好处是刷新页面是页面还在，参数还在 -->
					<h3>{{i.title}}</h3>
					<p class="des">{{i.description}}</p>
					<img v-lazy="i.imageUrl" alt="" class="lazy">
				
					<p class="itemContainer">
						<img :src="i.auther.avatar" alt="" class="auther_pic">
						<span class="auther">{{i.auther.nickname}}</span>
						<img :src="i.zanImg" height="20" width="22" alt="" class="zan" @click.prevent="dianzan(i)">
						<span class="praise_count">{{i.comment_count}}</span>
						<img src="../../../static/images/pinlun.png" height="21" width="20" alt="" class="pinlun">
						<span class="comment_count">{{i.praise_count}}</span>
					</p>
				</router-link>
				<!-- </div> -->
			</div>
		</div>
	</div>
</template>
<script> 
	export default {
		data () {
			return {
				list : [],
				daily : [],
				currentIndex : 0,
			}
		},
		methods : {
			// 获取导航栏的数据

			getData : function(){
				this.$http.get('../../../static/eatPageData/head_nav.json').then(res => {
					this.list = res.data.result_data.list;
				})
			},

			// 获取日常数据（默认展示）
			getEveryData : function(){
				this.$http.get('../../../static/eatPageData/data1.json').then(res=>{
					this.daily = res.data.result_data.list;
					for (var i = 0; i < this.daily.length; i++) {
						this.daily[i].zanImg = '../../../static/images/zan.png';
					}
				})
			},

			// 点击导航切换下面对应数据
			changeContent : function(type,index){
				this.$http.get('../../../static/eatPageData/data'+type+'.json').then(res=>{
					this.daily = res.data.result_data.list;
					// console.log(this.daily);
					for (var i = 0; i < this.daily.length; i++) {
						this.daily[i].zanImg = '../../../static/images/zan.png';
					};
				});
				this.currentIndex = index;
			},

			goto : function(id){
				this.$router.push({name : 'Detail',query:{id : id}})
			},
			dianzan : function(item){
				item.zanImg = '../../../static/images/zan2.png';
				item.praise_count++;
			},

		},
		created : function (){
			this.getData();
			this.getEveryData();
		}
	}
</script>
<style>
		/*导航栏*/
	.eat_nav{
		height: 1.388889rem;
		position: fixed;
		top: 1.388889rem;
		left: 0;
		right: 0;
		background-color: #F4F7FB;
		z-index: 23;
	}
	/*导航栏各项*/
	.eat_nav li{
		float: left;
		width: 33.333%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}
	/*导航栏各项里面的图片*/
	.eat_nav li img{
		width: 0.555556rem;
	}
	/*导航栏各项里面的标题*/
	.eat_nav li p{
		line-height: 0.555556rem;
		font-size: 0.444444rem;
	}
	/*划过各项的效果*/
	.active{
		background-color: #DCECFF;
	}
	/*主体内容各项*/
	.daily{
		margin-top: 2.777778rem;
		margin-bottom: 1.7rem;
		background-color: #EDEDED;
		/*font-size: 0.5rem;*/
	}
	.daily a:active{
    	 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	.daily>div{
		margin-bottom: 10px;
		background-color: #fff;
		padding: 10px;
	}
	.daily>div a{
		color: black;
		text-decoration: none;
	}
	/*主体各项标题*/
	.daily>div h3{
		text-indent: -4px;
		margin: 10px 0;
		font-size: 0.46rem;
		color: #4A4A4A;
	}
	/*标题下面的描述*/
	.daily .des{
		font-size: 0.333333rem;
		margin-bottom: 0.25rem;
		color: #666666;
	}
	/*懒加载图片*/
	.lazy{
		-webkit-transition:all 1s;
		-o-transition: all 1s;
		transition: all 1s;
	}
	.lazy[lazy=loading]{
		opacity: 0;
	}
	.lazy[lazy=error]{

	}
	.lazy[lazy=loaded]{
		opacity: 1;
	}
	/*发帖人头像*/
	.daily .auther_pic{
		width: 0.555556rem;
		display: inline-block;
		border-radius: 50%;
		position: absolute;
		top: 2px;
		left: 2px;
	}
	/*发帖人id*/
	.daily .auther{
		font-size: 0.388889rem;
		color: #BEBEBE;
		position: absolute;
		left: 0.833333rem;
		top: 2px;
	}
	/*各项主体最下面的内容*/
	.daily .itemContainer{
		margin: 5px 0;
		position: relative;
		height: 0.5rem;
	}
	/*详情图片*/
	.daily img{
		width: 100%;
		display: block;

	}
	/*点赞图标*/
	.daily .zan{
		width:0.555556rem;
		display: inline-block;
		position: absolute;
		right: 2.622222rem;
	}
	.daily .comment_count{
		position: absolute;
		right: 1.466667rem;
		font-size: 0.444444rem;
		color: #5E6467;
	}
	/*评论图标*/
	.daily .pinlun{
		width: 0.555556rem;
		display: inline-block;
		position: absolute;
		right: 0.694444rem;

	}
	.daily .praise_count{
		position: absolute;
		right: 2px;
		font-size: 0.444444rem;
		color: #5E6467;
	}
</style>