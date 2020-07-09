<template>
	<view class="goods-detail" v-if="goods">
		<!-- 轮播图区域 -->
		<view class="swiper-wrap">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular indicator-active-color="rgb(252, 63, 120)">
				<block v-for="item in swiperList" :key="item">
					<swiper-item>
						<image :src="item" mode="aspectFill"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 加入会员 -->
		<view class="member">
			<view class="join" v-if="relation_id && grade === 0.7">
				<text class="join-info">已成为高级会员，预估返现￥ {{ cashBack }}元</text>
			</view>
			<view class="join" v-else-if="relation_id && grade !== 0.7">
				<text class="join-info">预估返￥ {{ cashBack }}元，升级最高返￥ {{ highestCashBack }}元</text>
				<view class="join-button">
					立即升级 <text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="join" v-else>
				<text class="join-info">成为会员最高可返现金￥{{highestCashBack}}元</text>
				<view class="join-button">
					立即加入 <text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
		<!-- 商品文字信息 -->
		<view class="goods-info">
			<view class="goods-title">
				<image src="../../static/img/maos.png" mode="widthFix" v-if="goods.shoptype === 'B'"></image>
				<image src="../../static/img/taobao.png" mode="widthFix" v-else="goods.shoptype === 'B'"></image>
				<text class="shopname">【{{goods.shopname}}】</text>
				<text class="itemtitle">{{goods.itemtitle}}</text>
			</view>
			<view class="goods-price">
				<view class="goods-price-left">
					券后价￥
					<text class="itemendprice">{{goods.itemendprice}}</text>
					<text class="itemprice">￥{{goods.itemprice}}</text>
				</view>
				<view class="goods-price-right">{{goods.itemsale | formatNumber}}人付款
				</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="coupon-wrap bar">
			<view class="coupon">
				<view class="coupon-left" v-if="goods.couponmoney">
					<view class="coupon-number">
						{{goods.couponmoney}}元优惠券
					</view>
					<view class="coupon-date">
						使用期限: {{ goods.start_time | formatDate}} 至 {{goods.end_time | formatDate}}
					</view>
				</view>
				<view class="coupon-left" v-else>
					<view class="coupon-number">
						优惠券已被抢光
					</view>
				</view>
				<view class="coupon-right">{{goods.couponmoney ? "立即抢券" : "原价购买"}}</view>
			</view>
		</view>
		<!-- 描述信息 -->
		<view class="goods-desc bar">
			<view class="left">
				必买理由
			</view>
			<view class="right">
				{{goods.itemdesc}}
			</view>
		</view>
		<!-- 图片描述信息 -->
		<view class="goods-imgs">
			<text>宝贝详情</text>
			<block v-for="item in swiperList" :key="item">
				<image :src="item" mode="widthFix"></image>
			</block>
		</view>
		<!-- 相关商品推荐 -->
		<view class="recommend-wrap">
			<view class="recommend-title">为你推荐</view>
			<view class="recommend">
				<block v-for="goodsInfo in recommendList" :key="goodsInfo.itemid">
				<goods-item :goodsInfo="goodsInfo" class="goods-item"></goods-item>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				relation_id: "",
				grade: 0,
				swiperList: [],
				cashBack: "",
				highestCashBack: "",
				goods: {},
				recommendList: []
			}
		},
		onLoad(option) {
			if(option.id) {
				this.id = option.id
				this.relation_id = option.relation_id
				this.getGoodsInfo()
				this.getRecommendGoods()
			} else {
				uni.switchTab({
					url:"/pages/discovery/list"
				})
			}
		},
		methods: {
			// 加载商品详情数据
			getGoodsInfo() {
				let url = `/api/item_detail/apikey/maxd/itemid/${this.id}`
				this.$request(url).then(res => {
					let resData = res.data.data
					console.log(resData);
					// 轮播图数据
					if(resData.taobao_image) {
						this.swiperList = resData.taobao_image.split(",")
					} else {
						this.swiperList.push(resData.itempic)
					}
					// 返现金额
					this.grade = this.$queue.getStorageData("grade")
					if(this.grade) {
						this.cashBack = resData.tkmoney * parseFloat(grade).toFixed(2)
					} else {
						this.cashBack = (resData.tkmoney * 0.3).toFixed(2)
					}
					this.highestCashBack = (resData.tkmoney * 0.7).toFixed(2)
					// 商品详细数据
					this.goods = resData
				})
			},
			//获取相关商品推荐数据
			getRecommendGoods() {
				let url = `/api/get_similar_info/apikey/maxd/itemid/${this.id}`
				this.$request(url).then(res => {
					let resData = res.data.data
					this.recommendList = resData
					console.log(resData);
				})
			}
		},
		filters:{
			formatNumber(value) {
				if(value > 9999 ) {
					value = parseFloat(value / 10000).toFixed(2) + "万"
				} 
				return value
			},
			formatDate(value) {
				value = parseInt(value) * 1000
				let date = new Date(value)
				let YY, MM, DD, hh, mm, ss
				YY = date.getFullYear()
				MM = date.getMonth() + 1
				MM = MM < 10 ? `0${MM}` : MM
				DD = date.getDate()
				hh = date.getHours()
				mm = date.getMinutes()
				ss = date.getSeconds()
				return `${YY}-${MM}-${DD}`
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}
	.bar {
		position: relative;
		margin-bottom: 25rpx;
		&::after {
			content: "";
			height: 25rpx;
			width: 100%;
			background-color: rgb(248,248,248);
			position: absolute;
			bottom: -25rpx;
		}
	}
	.swiper-wrap {
		height: 750rpx;
		swiper {
			height: 100%;
		}
		image {
			height: 750rpx;
		}
	}
	.join {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		line-height: 90rpx;
		padding: 0 30rpx;
		background-color: rgba(0, 0, 0, 0.7);
		font-weight: 600;
		.join-info {
			color: rgb(255, 212, 101);
		}
		.join-button {
			height: 60rpx;
			line-height: 60rpx;
			padding: 0 20rpx;
			border-radius: 30rpx;
			background-image: linear-gradient(90deg,#f9e6af, #ffd465);
		}
	}
	.goods-info {
		padding: 20rpx 20rpx;
		.goods-title {
			font-weight: 600;
			line-height: 42rpx;
			image {
				display: inline-block;
				width: 28rpx;
				height: 28rpx;
				position: relative;
				top: 6rpx;
			}
			.shopname {
				color: $color-main;
				padding: 0 4rpx;
			}
		}
		.goods-price {
			display: flex;
			justify-content: space-between;
			padding: 25rpx 0;
			.goods-price-left {
				color: $color-main;
				.itemendprice {
					font-size: 46rpx;
					font-weight: 600;
					color: $color-sec1;
					padding: 0 16rpx 0 4rpx;
				}
				.itemprice {
					color: #999;
					font-size: 24rpx;
					text-decoration:line-through
				}
			}
		}
	}
	.coupon {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0rpx 4rpx 24rpx 0 rgba(0,0,0,.2);
		color: #fff;
		height: 150rpx;
		margin: 0 20rpx;
		background-image: linear-gradient(90deg, $color-sec1, $color-sec2);
		border-radius: 15rpx;
		position: relative;
		&::before, &::after {
			content: "";
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			background-color: currentColor;
			position: absolute;
			top: 50%;
			transform:translateY(-50%)
		}
		&::before {
			left: -20rpx;
			
		}
		&::after {
			right: -20rpx;
		}
		.coupon-left {
			flex: 5;
			margin-left: 20rpx;
			text-align: center;
			.coupon-number {
				font-size: 40rpx;
				margin-bottom: 10rpx;
				font-weight: 600;
			}
			.coupon-date {
				font-size: 24rpx;
			}
		}
		.coupon-right {
			text-align: center;
			margin-right: 20rpx;
			flex: 3;
			font-size: 32rpx;
			font-weight: 600;
		}
	}
	.coupon-wrap {
		padding-bottom: 40rpx;
	}
	.goods-desc {
		display: flex;
		padding: 20rpx 20rpx;
		.left {
			flex: 1;
			color: $color-main;
		}
		.right {
			flex: 4;
			font-size: 24rpx;
			line-height: 44rpx;
			color: #999;
		}
	}
	.goods-imgs {
		text-align: center;
		font-size: 32rpx;
		line-height: 80rpx;
	}
	.recommend-wrap {
		background-color: rgb(240,240,240);
		.recommend-title {
			line-height: 90rpx;
			text-align: center;
			color: $color-main;
			font-size: 42rpx;
		}
		.recommend {
			display: flex;
			flex-wrap: wrap;
			.goods-item {
				width: 50%;
			}
	}

	}
</style>
