<template>
	<view class="vip">
		<back></back>
		<view class="logo">
			<image src="../../static/img/logo.png" mode="aspectFill"></image>
			<view class="title">你的网购省钱专家</view>
		</view>
		<view class="info">
			<view class="info-title">
				会员特权
			</view>
			<view style="margin-top: 2px">
				1、使用邀请码邀请好友注册拿高佣金！
			</view>
			<view style="margin-top: 2px">
				2、会员购买商品可享受省钱 +返现！
			</view>
			<view style="margin-top: 2px">
				3、会员分享商品给好友购买拿佣金！
			</view>
			<view style="margin-top: 2px">
				4、更多会员特权我们将陆续上线！
			</view>
		</view>
		<view class="apply" @click="apply">
			立即申请
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
			apply() {
				uni.showToast({
					icon:"none",
					title:"功能暂未完成"
				})
			}
		}
	}
</script>

<style lang="scss"scoped>
page {
	background-color: #fff;
}
.logo {
	margin-top: 200rpx;
	text-align: center;
		image {
			border-radius: 30rpx;
			width: 140rpx;
			height: 140rpx;
			margin: 0 auto;
		}
		.title {
			line-height: 100rpx;
		}
	}
.info {
	margin-top: 40rpx;
	.info-title {
		text-align: center;
		line-height: 100rpx;
		font-weight: 600;
		font-size: 32rpx;
		color: $color-main;
		margin-left: 0;
	}
	view {
		line-height: 40rpx;
		margin-left: 150rpx;
	}
}
.apply {
	width: 60%;
	margin: 100rpx auto;
	height: 80rpx;
	text-align: center;
	color: #fff;
	background-color: $color-main;
	line-height: 80rpx;
	border-radius: 40rpx;
}
</style>
