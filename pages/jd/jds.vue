<template>
	<view>
		<view class="fixed">
			<scroll-view scroll-x="true" scroll-with-animation :scroll-left="scrollLeft" class="header-category">
				<view v-for="(item, index) in category" :key="item" class="category-item" :class="{ activeCategory: index === currentTab }" @tap="toggleTabList(index)">
					{{ item }}
				</view>
			</scroll-view>
		</view>
		<view class="content">
			<view class="content-main">
				<block v-for="(item, index) in showList" :key="index">
					<goods-item-plus
						class="goods-item"
						:img="item.itempic"
						shoptype="D"
						:title="item.skuName"
						:price="item.priceInfo.lowestCouponPrice"
						:sales="item.inOrderCount30Days"
						:coupon="item.couponmoney"
						:cashback="item.tkmoney"
						:shopname="item.shopInfo.shopName"
						:itemid="item.spuid"
					></goods-item-plus>
				</block>
			</view>
		</view>

		<!-- backtop -->
		<back-top @backtop="handleBackTop" :active="isBackTop"></back-top>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isBackTop: false,
			grade: 0,
			currentTab: 0,
			scrollLeft: 0,
			showList: [],
			category: [
					'零食',
					'饮品',
					'蔬菜',
					'厨房',
					'纸巾',
					'洗衣液',
					'洗浴',
					'母婴',
					'湿巾',
					'车载',
				],
			page: 1,
		};
	},
	onLoad(e) {
		this.grade = this.$queue.getStorageData('grade') || 0.7;
		// // 请求数据
		this.getGoodsList()
	},
	onPageScroll(e) {
		this.isBackTop = e.scrollTop > 500;
	},
	onReachBottom() {
		this.getGoodsList()
	},
	methods: {
		//回到顶部
		handleBackTop() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 500
			});
		},
		getGoodsList() {
			let url = `/tao/jd/goods/list/${this.page}?sortName=4&keywords=${this.category[this.currentTab]}`;
			this.$request(url).then(res => {
				let resList = res.data.data.list;
				// 改变请求参数
				this.page += 1;
				// 修正获得的数据
				resList.forEach(item => {
					item.itempic = item.imageInfo.imageList[0].url;
					item.couponmoney = parseInt(item.priceInfo.lowestPrice - item.priceInfo.lowestCouponPrice).toFixed(0);
					item.tkmoney = (item.commissionInfo.couponCommission * this.grade).toFixed(2);
				});
				let resIndex = this.currentTabItem
				// 保存数据
				this.showList = [...this.showList, ...resList]
			});
		},
		toggleTabList(index) {
			this.handleBackTop();
			this.showList = []
			this.currentTab = index;
			this.scrollLeft = this.currentTab * 48
			this.getGoodsList()
		}
	}
};
</script>

<style lang="scss" scoped>
.fixed {
	position: fixed;
	/* #ifdef H5 */
	top: 88rpx;
	/* #endif */
	/* #ifndef H5 */
	top: 0;
	/* #endif */
	left: 0;
	right: 0;
	background-color: #fff;
	z-index: 99;
}
.content {
	margin-top: 90rpx;
}

.header-category {
	height: 90rpx;
	width: 100vw;
	white-space: nowrap;
	position: relative;
	padding: 0 20rpx;
	.category-item {
		display: inline-block;
		padding: 20rpx 0rpx 10rpx;
		margin: 0 20rpx;
	}
	.activeCategory {
		color: $color-main;
		border-bottom: 4rpx solid $color-main;
	}
}
.content-main {
	display: flex;
	flex-wrap: wrap;
	.goods-item {
		width: 50%;
	}
}
</style>
