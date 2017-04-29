<template>
	<ul class="nav">
		<li><router-link to="/">商品</router-link></li>
		<li><router-link to="/comment">评论</router-link></li>
		<li><router-link to="/userinfo">我的</router-link></li>
	</ul>
</template>

<style scoped>
	.nav{
		position:fixed;
		bottom:0;
		width:100%;
		background-color: #ff0;
		display: flex;
	}
	.nav li{
		list-style: none;
		height:50px;
		float: left;
		flex:1;
		text-align: center;
		line-height: 50px;
		border:1px solid red;
	}
	.nav li a{
		text-decoration: none;
		display: block;
		width:100%;
		height:100%;
	}
</style>