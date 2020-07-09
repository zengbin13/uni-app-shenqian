<template>
	<view class="back-top" @click="handleClickBack" :class="[active ? 'show' : 'hide']">
		<text class="iconfont icon-up"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			active: {
				type:Boolean,
				default: false
			}
		},
		methods:{
			handleClickBack() {
				this.$emit("backtop")
			}
		},
	}
</script>

<style>
	@keyframes activeAnimation{
		from{
			right: 40rpx;
			bottom: 80rpx;
		}
		to{
			right: 40rpx;
			bottom: 180rpx;
		}
	}
	.back-top {
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 50%;
		background-color: rgba(51, 51, 51, .8);
		position: fixed;
		transition: all 1s ease 0s;
	}
	.back-top text {
		color: #fff;
		font-size: 46rpx;
	}
	.show {
		/* background-color: #007AFF; */
		right: 40rpx;
		bottom: 120rpx;
		opacity: 1;
	}
	.hide {
		/* background-color: #4CD964; */
		right: 40rpx;
		bottom: 0rpx;
		opacity: 0;
	}
</style>
