<template>
	<view class="model-box" @tap.stop="handleClickModel">
		<view class="content-wrap" @tap.stop="handleClickContent">
			<view class="title">
				复制分享文案
			</view>
			<view class="content">
				<slot></slot>
			</view>
			<view class="tip">
				长按上方轮播图片可保存图片片素材哦~
			</view>
			<button type="default" class="btn" @tap="handleClickButton" :class="{copy: iScopy}">{{message}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: "一键复制",
				iScopy: false
			};
		},
		methods:{
			handleClickModel() {
				this.$emit("clickModel")
			},
			handleClickContent() {
				// 点击了内容
			},
			handleClickButton() {
				this.$emit("clickModelButton")
				this.message = "已复制到剪切板"
				this.iScopy = true
			}
		}
	}
</script>

<style lang="scss" scoped>
.model-box {
	width: 100vw;
	height: 100vh;
	background-color: rgba(80,80,80,.5);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;
}
.content-wrap {
	padding: 20rpx 30rpx 20rpx;
	background-color: #FFFFFF;
	width: 90vw;
	// height: 70vh;
	border-radius: 30rpx;
}
.title {
	color: #ed5e3b;
	text-align: center;
	line-height: 80rpx;
	font-size: 42rpx;
}
.content {
	height: 620rpx;
	background-color: #f1f1f1;
	padding: 30rpx 20rpx 30rpx;
	line-height: 50rpx;
	overflow: auto;
}
.tip {
	font-size: 24rpx;
	color: #999;
	line-height: 80rpx;
}
.btn {
	color: #fff;
	height: 80rpx;
	border-radius: 40rpx;
	line-height: 80rpx;
	font-weight: 200;
	background-image: linear-gradient(90deg, #fa84f5, #e10c0a)
}
.copy {
	background-image: linear-gradient(90deg, #1fb931, #1fb931)
}
</style>
