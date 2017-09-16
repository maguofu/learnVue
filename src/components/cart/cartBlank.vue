<template>
	<div class="cartPage">
		<p class="cartHead">购物车</p>
		<div class="mainContainer">
			<img src="../../../static/images/bg.png" height="549" width="549" alt="" class="bg">
			<p>购物车是空的</p>
			<p>赶紧去探索属于你的百草味吧
			~</p>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {

			}
		}
	}
</script>
<style>
	.cartHead{
		line-height: 1.388889rem;
		text-align: center;
		background-color: #fff;
		font-size: 0.5rem;
	}
	.mainContainer{
		margin-top: 1.388889rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.mainContainer .bg{
		width: 3.0rem;
		height: 3.0rem;
	}
	.mainContainer p{
		margin-top: 0.416667rem;
		font-size: 0.388889rem;
		color: #4A5054;
	}
</style>