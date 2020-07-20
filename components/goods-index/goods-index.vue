<template>
	<view class="goods" @click="handleClick">
		<view class="img">
			<image :src="goodsInfo.itempic" mode="aspectFill"></image>
		</view>
		<view class="info">
			<view class="title">
				<text>{{shoptype}}</text>{{goodsInfo.itemdesc}}
			</view>
			<view class="price-wrap">
				<view class="price">
					<text>￥ </text> {{goodsInfo.itemendprice}}
				</view>
				<view class="sale">
					已售{{sale}}件
				</view>
			</view>
			<view class="coupon-wrap">
				<view class="coupon">
					<text>{{goodsInfo.couponmoney}}元券</text>
				</view>
				<view class="back">
					预估返￥{{cashback}}
				</view>
			</view>
			<view class="shop-wrap">
				<text class="iconfont icon-shop"></text>
				<text class="shopname">{{goodsInfo.shopname}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			goodsInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods:{
			handleClick() {
				uni.navigateTo({
					url:`/pages/detail/detail?id=${this.goodsInfo.itemid}`
				})
			}
		},
		computed:{
			shoptype() {
				if(this.goodsInfo.shoptype === "B") {
					return "天猫"
				} else {
					return "淘宝"
				}
			},
			sale() {
				if(this.goodsInfo.itemsale > 9999) {
					return parseFloat(this.goodsInfo.itemsale / 1000).toFixed(1) + "万"
				} else {
					return this.goodsInfo.itemsale
				}
			},
			cashback() {
				return parseFloat(this.goodsInfo.tkmoney * 0.3).toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
.goods {
	display: flex;
	// align-items: center;
	justify-content: flex-start;
	background-color: #fff;
	margin: 15rpx 20rpx 0;
	border-radius: 30rpx;
	height: 270rpx;
	overflow: hidden;
}
.img {
	image {
		width: 270rpx;
		height: 270rpx;
	}
	border-radius: 30rpx;
	overflow: hidden;
}
.info {
	flex: 1;
	padding: 20rpx 20rpx;
	.title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient:vertical;
		line-height: 42rpx;
		text {
			font-size: 24rpx;
			color: #fff;
			background-color: $color-main;
			padding: 4rpx 8rpx;
			border-radius: 8rpx;
			margin-right:8rpx;
		}
	}
	.price-wrap {
		display: flex;
		align-items: flex-end;
		padding-top: 20rpx;
		.price {
			width: 150rpx;
			font-size: 36rpx;
			font-weight: 600;
			color: $color-main;
			text {
				font-size: 24rpx;
				font-weight: 500;
			}
		}
		.sale {
			font-size: 24rpx;
			color: #999;
			position: relative;
			top: -4rpx;
		}
	}
	.coupon-wrap {
		display: flex;
		align-items: flex-end;
		padding-top: 10rpx;
		.coupon {
			width: 150rpx;
			text {
				color: #fff;
				background-color: $color-main;
				padding: 4rpx 8rpx;
				border-radius: 12rpx;
				font-size: 26rpx;
			}
		}
		.back {
			color: #fe6c00;
			font-size: 26rpx;
		}
	}
	.shop-wrap {
		padding-top: 10rpx;
		color: #999;
		.iconfont {
			font-size: 32rpx;
			padding-right: 10rpx;
		}
	}
}
</style>
