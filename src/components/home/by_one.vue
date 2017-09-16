<template>
	<div class="app">
		<div class="by_one_cotainer">
			<div class="one_header">
				<div class="bottom">
					<ul>
						<li v-for = "item in list">
							<img :src="item.goods_img">
							<p>{{item.goods_name}}</p>
							<p>{{item.goods_subtitle}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.by_one_cotainer{
		width: 100%;
		height: 100%;
	}
	.one_header{
		width: 100%;
		height: 3.888889rem;
	}
	.bottom{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.bottom>ul{
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #fff;
	}
	.bottom>ul>li{
	    float: left;
	    width: 42%;
	    margin: 0.277778rem 4% 0;
	    padding: 0 0 0.277778rem 0;
	    position: relative;
	    background: #fff;
	    border-radius: 0.138889rem;
	    overflow: hidden;
	}
	
</style>