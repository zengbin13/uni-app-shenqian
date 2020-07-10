<template>
	<navigator :url="url" open-type="navigate">
		<view class="cell" hover-class="cell-hover" :hover-stay-time="100">
			<view class="cell-left">
				<text class="iconfont" :class="iconName" :style="[{color: iconColor}]" v-if="iconName"></text>
				<slot>默认内容</slot>
			</view>
			<view class="cell-right">
				<view class="info">{{info}}</view>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
	</navigator>
</template>

<script>
		export default {
			props: {
				iconName: {
					type: String,
					default: ""
				},
				iconColor: {
					type: String,
					default: "#f34523"
				},
				info: {
					type: String,
					default: ""
				},
				cellBorder: {
					type: Boolean,
					default: true
				},
				url: {
					type: String,
					default: "/pages/index/index"
				},
			}
		}
</script>

<style lang="scss" scoped>
	.cell-hover {
		background-color: #fafafa !important;
	}
	.cell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		color: #000;
		padding: 25rpx 30rpx;
		.cell-left {
			.iconfont {
				padding-right: 30rpx;
				font-size: 36rpx;
				position: relative;
				top: 4rpx;
			}
		}
		.cell-right {
			display: flex;
			align-items: center;
			.info {
				font-size: 26rpx;
				color: #666;
			}
			.iconfont {
				padding-left: 20rpx;
				font-size: 34rpx;
				color: #666;
			}
		}
	}
</style>
