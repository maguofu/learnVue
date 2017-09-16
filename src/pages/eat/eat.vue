<template>
	<div>
		<read></read>
		<eatNav></eatNav>
		<tab-bar></tab-bar>
	</div>
</template> 

<script>
	import read from '../../components/eat/eat_read'
	import eatNav from '../../components/eat/nav'
	import tabBar from '../../components/home/tabbar'
	export default{
		components : {
			read,
			eatNav,
			tabBar
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>