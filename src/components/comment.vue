<template>
	<div>
		<comment-list></comment-list>
		<comment-form></comment-form>
	</div>
</template>

<script>
	import commentList from './comment-list.vue';
	import commentForm from './comment-form.vue';
	export default {
		components:{commentList,commentForm}
	}
</script>