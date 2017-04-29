<template>
	<div>
		<goods></goods>
		<detail></detail>
		<comment-list></comment-list>
	</div>
</template>

<script>
	import goods from './goods.vue';
	import detail from './detail.vue';
	import commentList from './comment-list.vue';
	export default {
		components:{goods,detail,commentList}
	}
</script>