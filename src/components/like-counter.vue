<template>
	<div>
		<span>{{like}}</span>
		<button v-on:click="add">点赞</button>
		<button v-on:click="sub">取消赞</button>
	</div>
</template>

<script>
	export default {
		computed:{
			like(){
				return this.$store.state.goodsData[0].like
			}
		},
		methods:{
			add(){
				this.$store.commit('addLike');
			},
			sub(){
				this.$store.commit('subLike');
			}
		}
	}
</script>