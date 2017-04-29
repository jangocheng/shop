<template>
	<div class="detail">
		<p>{{detail}}</p>
	</div>
</template>

<style scoped>
	.detail{
		height:300px;
		border:10px solid blue;
	}
</style>

<script>
	export default {
		computed:{
			detail(){
				return this.$store.state.goodsData[0].detail;
			}
		}
	}
</script>