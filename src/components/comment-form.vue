<template>
	<form v-on:submit.prevent="addComment">
		<input type="text" v-model="txt" >
		<input type="submit">
	</form>
</template>

<script>
	export default {
		data(){
			return {
				txt:''
			}
		},
		methods:{
			addComment(){
				this.$store.commit('addComment',this.txt);
			}
		}
	}
</script>