<template>
	<div class='comment'>
		<h1>评论列表</h1>
		<ul>
			<li v-for="comment in comments">
				<p>
					{{comment}}
				</p>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		computed:{
			comments(){
				return this.$store.state.goodsData[0].comments
			}
		}
	}
</script>

<style scoped>
	.comment{
		height:500px;
		border:10px solid red;
	}
</style>