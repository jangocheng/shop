<template>
	<div>
		<router-view></router-view>
		<navbar></navbar>
	</div>
</template>

<script>
	import navbar from './navbar.vue';
	export default {
		components:{navbar}
	}
</script>

<style>
	
</style>