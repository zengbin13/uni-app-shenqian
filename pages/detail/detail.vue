<template>
	<view class="goods-detail" v-if="goodsItem.img">
		<!-- 轮播图区域 -->
		<view class="swiper-wrap">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular indicator-active-color="rgb(252, 63, 120)">
				<block v-for="item in swiperList" :key="item">
					<swiper-item><image :src="item" mode="aspectFill"></image></swiper-item>
				</block>
			</swiper>
			<!-- 海报生成和分享 -->
			<view class="share-wrap">
				<view class="poster" @tap="shareFc()">
					<text class="iconfont icon-poster"></text>
					生成海报
				</view>
				<view class="share" @tap="handleClickModel">
					<text class="iconfont icon-share"></text>
					分享好友
				</view>
			</view>
		</view>
		<!-- 加入会员 -->
		<view class="member">
			<view class="join" v-if="relation_id && grade === 0.7">
				<text class="join-info">已成为高级会员，预估返现￥ {{ cashBack }}元</text>
			</view>
			<view class="join" v-else-if="relation_id && grade !== 0.7">
				<text class="join-info">预估返￥ {{ cashBack }}元，升级最高返￥ {{ highestCashBack }}元</text>
				<view class="join-button">
					立即升级
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<view class="join" v-else>
				<text class="join-info">成为会员最高可返现金￥{{ highestCashBack }}元</text>
				<view class="join-button">
					立即加入
					<text class="iconfont icon-right"></text>
				</view>
			</view>
		</view>
		<!-- 商品文字信息 -->
		<view class="goods-info" v-if="goods.shopname">
			<view class="goods-title">
				<image src="../../static/img/maos.png" mode="widthFix" v-if="goods.shoptype === 'B'"></image>
				<image src="../../static/img/taobao.png" mode="widthFix" v-else="goods.shoptype === 'B'"></image>
				<text class="shopname">【{{ goods.shopname }}】</text>
				<text class="itemtitle">{{ goods.itemtitle }}</text>
			</view>
			<view class="goods-price">
				<view class="goods-price-left">
					券后价￥
					<text class="itemendprice">{{ goods.itemendprice }}</text>
					<text class="itemprice">￥{{ goods.itemprice }}</text>
				</view>
				<view class="goods-price-right">{{ goods.itemsale | formatNumber }}人付款</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="coupon-wrap bar">
			<view class="coupon">
				<view class="coupon-left" v-if="goods.couponmoney && goods.start_time">
					<view class="coupon-number">{{ goods.couponmoney }}元优惠券</view>
					<view class="coupon-date">使用期限: {{ goods.start_time | formatDate }} 至 {{ goods.end_time | formatDate }}</view>
				</view>
				<view class="coupon-left" v-else><view class="coupon-number">优惠券已被抢光</view></view>
				<view class="coupon-right">{{ goods.couponmoney && goods.start_time ? '立即抢券' : '原价购买' }}</view>
			</view>
		</view>
		<!-- 描述信息 -->
		<view class="goods-desc bar">
			<view class="left">必买理由</view>
			<view class="right">{{ goods.itemdesc }}</view>
		</view>
		<!-- 图片描述信息 -->
		<view class="goods-imgs">
			<text>宝贝详情</text>
			<block v-for="item in swiperList" :key="item"><image :src="item" mode="widthFix"></image></block>
		</view>
		<!-- 相关商品推荐 -->
		<view class="recommend-wrap">
			<view class="recommend-title">为你推荐</view>
			<view class="recommend">
				<block v-for="(item, index) in recommendList" :key="index">
					<goods-item-plus
						class="goods-item"
						:img="item.itempic"
						:shoptype="item.shoptype"
						:title="item.itemtitle"
						:price="item.itemprice"
						:sales="item.itemsale"
						:coupon="item.couponmoney"
						:cashback="item.tkmoney"
						:shopname="item.shopname"
						:itemid="item.itemid"
					></goods-item-plus>
				</block>
			</view>
		</view>
		<!-- 商品购买 -->
		<view class="goods-pay">
			<view class="pay-left">
				<view class="home">
					<text class="iconfont icon-home"></text>
					<view @tap="goHome">首页</view>
				</view>
				<view class="collect" @click="clickCollect" :class="{ 'active-collect': isActiveCollect }">
					<text class="iconfont icon-collect"></text>
					<view>{{ collectName }}</view>
				</view>
			</view>
			<view class="pay-right">
				<view class="pay-cashback">返现 ￥{{ cashBack }}</view>
				<view class="pay-coupon">领￥{{ goods.couponmoney }} 券购买</view>
			</view>
		</view>
		<!-- backtop -->
		<back-top @backtop="handleBackTop" :active="isBackTop"></back-top>
		<!-- 导航菜单框 -->
		<view class="navigatorBox" :class="{ 'navigatorBox-hide': isNavigatorBox }">
			<navigator class="navigatorBox-item" url="/pages/index/index" open-type="switchTab">
				<text class="iconfont icon-home"></text>
				<view>返回首页</view>
			</navigator>
			<navigator class="navigatorBox-item" url="/pages/search/search-content">
				<text class="iconfont icon-search"></text>
				<view>超级搜索</view>
			</navigator>
			<navigator class="navigatorBox-item" url="/pages/member/footprint">
				<text class="iconfont icon-jiaoyin"></text>
				<view>我的足迹</view>
			</navigator>
			<navigator class="navigatorBox-item" url="/pages/member/user" open-type="switchTab">
				<text class="iconfont icon-collect"></text>
				<view>个人中心</view>
			</navigator>
		</view>
		<!-- 海报内容区域 -->
		<view class="poster-content">
			<view class="flex_row_c_c modalView" :class="qrShow?'show':''" @tap="hideQr()">
				<view class="flex_column">
					<view class="backgroundColor-white padding1vh border_radius_10px">
						<image :src="poster.finalPath || ''" mode="widthFix" class="posterImage"></image>
					</view>
					<view class="flex_row marginTop2vh">
					</view>
				</view>
			</view>
			<!-- 画布 -->
			<view class="hideCanvasView">
				<canvas class="hideCanvas" canvas-id="default_PosterCanvasId" :style="{width: (poster.width||10) + 'px', height: (poster.height||10) + 'px'}"></canvas>
			</view>
		</view>
		<!-- 分享模态框 -->
		<simple-model @clickModel="handleClickModel" v-if="model" @clickModelButton="handleClickButton">
			<view class="model-cotent">
				<view>{{goodsItem.title}}</view>
				<view>【在售价】{{goodsItem.price}}元</view>
				<view>【券后价】{{(goodsItem.price - goodsItem.coupon).toFixed(2)}}元</view>
				<view>复製此信息进入【手机Tao宝】即可查看并下单￥86Bi1BmAvzd￥</view>
				<view>【必买理由】{{goods.itemdesc}}元</view>
			</view>		
</simple-model>
	</view>
</template>

<script>
import _app from '@/js_sdk/QuShe-SharerPoster/QS-SharePoster/app.js';
import { getSharePoster } from '@/js_sdk/QuShe-SharerPoster/QS-SharePoster/QS-SharePoster.js';
import simpleModel from "@/components/simple-model/simple-model.vue"
export default {
	data() {
		return {
			id: '',
			relation_id: '',
			grade: 0,
			swiperList: [],
			cashBack: '',
			highestCashBack: '',
			goods: {},
			recommendList: [],
			isBackTop: false,
			isNavigatorBox: true,
			collectName: '收藏',
			isActiveCollect: false,
			goodsItem: {},
			poster: {},
			qrShow: false,
			canvasId: 'default_PosterCanvasId',
			model: false
		};
	},
	onLoad(option) {
		// 是否重定向
		this.redirect(option);
		// 判断是否收藏
		this.collect();
	},
	onPageScroll(e) {
		this.isBackTop = e.scrollTop > 500;
	},
	onNavigationBarButtonTap(e) {
		this.isNavigatorBox = !this.isNavigatorBox;
	},
	components:{
		simpleModel
	},
	methods: {
		// 添加浏览记录
		addBrowseHistory() {
			let taobaoBrowseList = this.$queue.getStorageData('taobaoBrowseList') || [];
			let flag = taobaoBrowseList.find(item => item.itemid === this.goodsItem.itemid);
			if (!flag) {
				taobaoBrowseList.push(this.goodsItem);
				if (taobaoBrowseList.length > 100) {
					taobaoBrowseList.splice(0, 1);
				}
				this.$queue.setStorageData('taobaoBrowseList', taobaoBrowseList);
			}
		},
		// 判断收藏
		collect() {
			let taobaoCollect = this.$queue.getStorageData('taobaoCollect') || [];
			let index = taobaoCollect.findIndex(item => item.itemid == this.id);
			if (index !== -1) {
				this.collectName = '已收藏';
				this.isActiveCollect = true;
			}
		},
		// 重定向
		redirect(option) {
			if (option.id) {
				this.id = option.id;
				this.relation_id = option.relation_id;
				this.getGoodsInfo();
				this.getRecommendGoods();
			} else {
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
		},
		// 加载商品详情数据
		getGoodsInfo() {
			let url = `/api/item_detail/apikey/maxd/itemid/${this.id}`;
			this.$request(url).then(res => {
				let resData = res.data.data;
				// 轮播图数据
				if (resData.taobao_image) {
					this.swiperList = resData.taobao_image.split(',');
				} else {
					this.swiperList.push(resData.itempic);
				}
				// 返现金额
				this.grade = this.$queue.getStorageData('grade');
				if (this.grade) {
					this.cashBack = resData.tkmoney * parseFloat(grade).toFixed(2);
				} else {
					this.cashBack = (resData.tkmoney * 0.3).toFixed(2);
				}
				this.highestCashBack = (resData.tkmoney * 0.7).toFixed(2);
				// 商品详细数据
				this.goods = resData;
				// 保存商品展示数据
				this.goodsItem = {
					img: this.goods.itempic,
					shoptype: this.goods.shoptype,
					title: this.goods.itemtitle,
					price: this.goods.itemprice,
					sales: this.goods.itemsale,
					coupon: this.goods.couponmoney,
					cashback: this.goods.tkmoney,
					shopname: this.goods.shopname,
					itemid: this.goods.itemid
				};
				this.addBrowseHistory();
			});
		},
		//获取相关商品推荐数据
		getRecommendGoods() {
			let url = `/api/get_similar_info/apikey/maxd/itemid/${this.id}`;
			this.$request(url).then(res => {
				let resData = res.data.data;
				resData.forEach(item => {
					item.tkmoney = (item.itemendprice * (item.tkrates * 0.01) * this.grade).toFixed(2);
				});
				this.recommendList = resData;
				// console.log(resData);
			});
		},
		// 点击回到顶部
		handleBackTop() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 500
			});
		},
		// 回到首页
		goHome() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		// 点击收藏
		clickCollect() {
			// 判断是否登录
			let token = this.$queue.getStorageData('token');
			if (!token) {
				uni.navigateTo({
					url: '../login/login'
				});
			}
			// 收藏数据
			if (token) {
				let taobaoCollect = this.$queue.getStorageData('taobaoCollect') || [];
				// 判断是否存在收藏
				let index = taobaoCollect.findIndex(item => item.itemid == this.id);
				if (index === -1) {
					// 不存在收藏
					taobaoCollect.push(this.goodsItem);
					this.isActiveCollect = true;
					this.collectName = '已收藏';
					this.$queue.setStorageData('taobaoCollect', taobaoCollect);
				} else {
					// 存在收藏_删除该项
					taobaoCollect.splice(index, 1);
					this.isActiveCollect = false;
					this.collectName = '收藏';
					this.$queue.setStorageData('taobaoCollect', taobaoCollect);
				}
			}
		},
		// 海报相关
		async shareFc() {
			try {
				_app.log('准备生成:' + new Date())
				const d = await getSharePoster({
					type: 'testShareType',
					posterCanvasId: this.canvasId,	//canvasId
					background: {
						width: 1000,
						height: 1500,
						backgroundColor: '#fff'
					},
					// backgroundImage: this.goods.itempic,
					drawArray: ({
						bgObj,
						type,
						bgScale
					}) => {
						// const dx = bgObj.width * 0.3;
						const fontSize = bgObj.width * 0.045;
						// const lineHeight = bgObj.height * 0.04;
						return [
							{
								type: 'image',
								url: this.goodsItem.img,
								dx: 20,
								dy: 20,
								dWidth: 480 * 2, 
								dHeight: 480 * 2,
							},
							{
								type: 'text',
								text: this.goodsItem.title,
								size: fontSize,
								color: "#000",
								dx: 20.5,
								dy:1000.5 + fontSize,
								lineFeed: {
									maxWidth: 980,
									lineHeight: fontSize * 1.2
								},
								textBaseline: 'middle',
							},
							{
								type: 'text',
								text: `券后价 ￥${(this.goodsItem.price - this.goodsItem.coupon).toFixed(2)} `,
								size: fontSize * 1.2,
								color: "#e5312f",
								dx: 20.5,
								dy:1230.5,
								textAlign: 'left',
								textBaseline: 'bottom',
							},
							{
								type: 'text',
								text: this.goodsItem.price ,
								size: fontSize * 0.8,
								color: "#999",
								dx: 400.5,
								dy:1220.5,
								textAlign: 'left',
								textBaseline: 'bottom',
								lineThrough: {
									width: fontSize / 20,
									style: "#999",
								}
							},
							{
								type: 'text',
								text: "省钱兄精选好物",
								size: fontSize * 1,
								dx: 20.5,
								dy:1350.5,
								textAlign: 'left',
								textBaseline: 'bottom'
							},
							{
								type: 'text',
								text: "长按或扫描识别二维码领券",
								size: fontSize * 0.8,
								dx: 20.5,
								dy:1420.5,
								color: "#999",
								textAlign: 'left',
								textBaseline: 'bottom'
							},
							{
								type: 'qrcode',
								// text: `${this.$queue.publicDomain()}/pages/detail/detail/id=${this.goodsItem.itemid}`,
								text: `https://www.gomyorder.cn/pages/detail/pdd?itemid=6933476339`,
								size: 250,
								dx: 720.5,
								dy: 1200.5
							}
						]
					},
					setCanvasWH: ({
						bgObj,
						type,
						bgScale
					}) => { // 为动态设置画布宽高的方法，
						this.poster = bgObj;
					}
				});
				_app.log('海报生成成功, 时间:' + new Date() + '， 临时路径: ' + d.poster.tempFilePath)
				this.poster.finalPath = d.poster.tempFilePath;
				this.qrShow = true;
			} catch (e) {
				_app.hideLoading();
				_app.showToast(JSON.stringify(e));
				console.log(JSON.stringify(e));
			}
		},
		saveImage() {
			// #ifndef H5
			uni.saveImageToPhotosAlbum({
				filePath: this.poster.finalPath,
				success(res) {
					_app.showToast('保存成功');
				}
			})
			// #endif
			// #ifdef H5
			_app.showToast('保存了');
			// #endif
		},
		share() {
			// #ifdef APP-PLUS
			_app.getShare(false, false, 2, '', '', '', this.poster.finalPath, false, false);
			// #endif
		
			// #ifndef APP-PLUS
			_app.showToast('分享了');
			// #endif
		},
		hideQr() {
			this.qrShow = false;
		},
		// 分享相关
		handleClickModel() {
			this.model = !this.model
		},
		handleClickButton() {
			// #ifdef H5
			// #endif
			// #ifndef H5
			uni.setClipboardData({
			    data: `${this.goodsItem.title}
					【在售价】${this.goodsItem.price}元
					【券后价】${(this.goodsItem.price- this.goodsItem.coupon).toFixed(2)}元
					复製此信息进入【手机Tao宝】即可查看并下单￥86Bi1BmAvzd￥					   【必买理由】${this.goods.itemdesc}元
					`,
			});
			// #endif
		}
	},
	filters: {
		formatNumber(value) {
			if (value > 9999) {
				value = parseFloat(value / 10000).toFixed(2) + '万';
			}
			return value;
		},
		formatDate(value) {
			value = parseInt(value) * 1000;
			let date = new Date(value);
			let YY, MM, DD, hh, mm, ss;
			YY = date.getFullYear();
			MM = date.getMonth() + 1;
			MM = MM < 10 ? `0${MM}` : MM;
			DD = date.getDate();
			hh = date.getHours();
			mm = date.getMinutes();
			ss = date.getSeconds();
			return `${YY}-${MM}-${DD}`;
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #fff;
	position: relative;
}
.bar {
	position: relative;
	margin-bottom: 25rpx;
	&::after {
		content: '';
		height: 25rpx;
		width: 100%;
		background-color: rgb(248, 248, 248);
		position: absolute;
		bottom: -25rpx;
	}
}
.swiper-wrap {
	position: relative;
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
		background-image: linear-gradient(90deg, #f9e6af, #ffd465);
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
				text-decoration: line-through;
			}
		}
	}
}
.coupon {
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0rpx 4rpx 24rpx 0 rgba(0, 0, 0, 0.2);
	color: #fff;
	height: 150rpx;
	margin: 0 20rpx;
	background-image: linear-gradient(90deg, $color-sec1, $color-sec2);
	border-radius: 15rpx;
	position: relative;
	&::before,
	&::after {
		content: '';
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: currentColor;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
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
	background-color: rgb(240, 240, 240);
	margin-bottom: 90rpx;
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
.goods-pay {
	height: 90rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 99;
	zoom: 1;
	display: flex;
	background-color: #fff;
	box-shadow: 4rpx 0 12rpx 0 rgba(0, 0, 0, 0.1);
	.pay-left {
		flex: 2;
		display: flex;
		// justify-content: space-evenly;
		align-items: center;
		text-align: center;
		font-size: 24rpx;
		.home,
		.collect {
			flex: 1;
		}
		.iconfont {
			font-size: 36rpx;
		}
		.active-collect {
			color: $color-main;
		}
	}
	.pay-right {
		flex: 5;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: #fff;
		.pay-cashback,
		.pay-coupon {
			flex: 1;
			text-align: center;
			padding: 15rpx 0;
		}
		.pay-cashback {
			background-color: $color-main;
			border-radius: 30rpx;
			margin: 0 10rpx 0 20rpx;
		}
		.pay-coupon {
			background-color: $color-main;
			border-radius: 30rpx;
			margin: 0 20rpx 0 10rpx;
		}
	}
}
.navigatorBox {
	position: fixed;
	z-index: 109;
	zoom: 1;
	top: 110rpx;
	right: 20rpx;
	width: 280rpx;
	height: 400rpx;
	border-radius: 30rpx;
	background-color: rgba(58, 58, 58, 0.8);
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	overflow: hidden;
	transition: all 0.5s ease 0s;
	.navigatorBox-item {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 30rpx;
		padding: 30rpx 0;
		border-bottom: 1rpx solid rgb(134, 133, 131);
		.iconfont {
			padding-right: 18rpx;
			font-size: 38rpx;
		}
	}
}
.navigatorBox-hide {
	right: -400rpx;
	opacity: 0;
}
.share-wrap {
	position: absolute;
	right: 0;
	top: 600rpx;
	color: #fff;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 120rpx;
	.poster,
	.share {
		background-color: rgba(58, 58, 58, 0.8);
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 10rpx 0 20rpx;
		border-radius: 25rpx 0 0 25rpx;
		.iconfont {
			padding: 0 10rpx 0 0;
		}
	}
}
.poster-content {
	width: 100vw;
}
// 海报相关

.hideCanvasView {
		position: relative;
	}

	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}

	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.modalView {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		outline: 0;
		transform: scale(1.2);
		perspective: 2500upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all .3s ease-in-out;
		pointer-events: none;
		backface-visibility: hidden;
		z-index: 999;
	}

	.modalView.show {
		opacity: 1;
		transform: scale(1);
		pointer-events: auto;
	}

	.flex_column {
		display: flex;
		flex-direction: column;
	}

	.backgroundColor-white {
		background-color: white;
	}

	.border_radius_10px {
		border-radius: 10px;
	}

	.padding1vh {
		padding: 1vh;
	}

	.posterImage {
		width: 85vw;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
	}

	.marginTop2vh {
		margin-top: 2vh;
	}
</style>
