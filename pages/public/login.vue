<template>
	<view class="login">
		<view class="logo">
			<image src="../../static/img/logo.png" mode="aspectFill"></image>
		</view>
		<view class="info">
			<view>申请获取以下权限</view>
			<view style="color: #999;">获取你的公开信息(昵称、头像、地区等)</view>
		</view>
		<view class="login-button" @tap="login">
			授权登录
		</view>
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
				uni.login({
				  provider: 'weixin',
				  success: loginRes => {
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: infoRes => {
								let nickName = infoRes.userInfo.nickName
								let avatarUrl = infoRes.userInfo.avatarUrl
								this.$queue.setStorageData("nickName", nickName)
								this.$queue.setStorageData("avatarUrl", avatarUrl)
								this.$queue.setStorageData("userInfo", infoRes.userInfo)
								uni.reLaunch({
									url:"/pages/member/user"
								})
				      }
				    });
				  }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #fff;
	}
	.login {
		padding: 0 60rpx;
		.logo {
			margin-top: 60rpx;
			height: 400rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1rpx solid rgb(200,200,200);
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
			}
		}
		.info {
			padding-top: 50rpx;
			line-height: 60rpx;
		}
		.login-button {
			margin-top: 50rpx;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			color: #fff;
			background-color: $color-main;
			border-radius: 40rpx;
		}
	}
</style>
