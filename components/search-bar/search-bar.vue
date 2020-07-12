<template>
	<view class="search-bar">
		<view class="left">
			<image src="../../static/img/crown.jpg" mode="widthFix"></image>
		</view>
			<view class="search" @tap="goSearch">
				<view class="search-content">
					<text class="iconfont icon-search"></text>
					<text>输入关键字或粘贴宝贝标题</text>
				</view>
			</view>
		<view class="right" @tap="goFootprint">
			<text class="iconfont icon-jiaoyin"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goSearch() {
				uni.navigateTo({
					url:"../../pages/search/search"
				})
			},
			goFootprint() {
				uni.navigateTo({
					url:"../../pages/member/footprint"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.search-bar {
	width: 100%;
	height: 90rpx;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	.left {
		width: 140rpx;
		text-align: center;
		image {
			display: inline-block;
			width: 60rpx;
			height: 60rpx;
		}
	}
	.right {
		flex:1;
		text-align: center;
		.iconfont {
			font-size: 42rpx;
			color: rgb(220, 214, 214);
		}
	}
	.search {
		flex:4;
		.search-content {
			height: 60rpx;
			background-color: #fff;
			border-radius: 30rpx;
			// text-align: center;
			line-height: 60rpx;
			font-size: 26rpx;
			color: #999;
			.iconfont {
				font-size: 26rpx;
				padding: 0 10rpx 0 40rpx;
				position: relative;
				top: 2rpx;
			}
		}
	}
}
</style>
