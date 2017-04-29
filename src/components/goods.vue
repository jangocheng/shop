<template>
	<div class="clear">
		<div class="goods-pic">
			<img v-bind:src="goods.image" alt="">
		</div>
		<div class="goods-info">
			<h3>{{goods.name}}</h3>
			<p>{{goods.introduce}}</p>
			<like-counter></like-counter>
		</div>
	</div>
</template>

<style scoped>
	.goods-pic{
		width:30%;
		float:left;
	}
	.goods-pic img{
		width:100%;
	}
	.goods-info{
		width:70%;
		float:left;
	}
</style>

<script>
	import likeCounter from './like-counter.vue'
	export default {
		components:{likeCounter},
		computed:{
			goods(){
				return this.$store.state.goodsData[0];
			}
		}
	}
</script>