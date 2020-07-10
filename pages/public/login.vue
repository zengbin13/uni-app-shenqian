<template>
	<view class="login">
		<button type="default" @tap="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			login() {
				uni.login()
			}
		}
	}
</script>

<style>
</style>
