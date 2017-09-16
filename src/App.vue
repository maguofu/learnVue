<template>
	<div>
		<router-view></router-view>
	    <tab-bar></tab-bar>
	</div>
</template>

<script>
import tabBar from './components/home/tabbar'
export default {
    name: 'app',
    components: {
    	tabBar
    }
}
</script>

<style>
*{
	padding:0;
	margin:0
}

.tab_bar{
  list-style: none;
  display: flex;
  align-items: center;
  position: fixed;
  line-height: 46px;
  background-color: #dfdfdf;
  bottom:0;
  left:0;
  right:0
}
.tab_bar>li{
  width:25%;
  text-align: center;
}

</style>
