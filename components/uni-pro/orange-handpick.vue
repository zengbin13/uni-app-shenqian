<template>
	<view class="handpick">
		<view class="handpick-title">
			<view class="title-left">
				<image src="../../static/img/common/logo.jpg" mode="widthFix"></image>
				<text>省钱君</text>
			</view>
			<view class="title-right">
				立即领券
			</view>
		</view>
		<view class="handpick-desc">
			xx
		</view>
		<view class="handpick-imgs">
			xx
		</view>
		<view class="handpick-info">
			xx
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			handpickData: {
				type:Object,
				default: {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.handpick {
		padding: 0 30rpx;
	}
	.handpick-title {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		align-items: center;
		.title-left {
			image {
				display: inline-block;
				width: 70rpx;
			}
		}
		.title-right {
			border: 1px solid rgb(252, 63, 120);
			color: rgb(252, 63, 120);
			padding: 8rpx 20rpx;
			border-radius: 32rpx;
		}
	}
</style>
