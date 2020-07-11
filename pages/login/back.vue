<template>
	<view class="back" @tap="clickBack">
		<text class="iconfont icon-tuichu2"></text>
	</view>
</template>

<script>
	export default {
		methods:{
			clickBack() {
				uni.navigateBack({})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		position: fixed;
		top: 50rpx;
		left: 50rpx;
	}
</style>
