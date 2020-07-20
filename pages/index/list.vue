<template>
	<view class="search">
		<view class="fixed">
			<scroll-view scroll-x="true" scroll-with-animation :scroll-left="scrollLeft" class="header-category">
				<view v-for="(item, index) in category" :key="item" class="category-item" :class="{ activeCategory: index === currentIndex }" @tap="selectTab(index)">
					{{ item }}
				</view>
			</scroll-view>
			<view class="tab">
				<view class="tab-item" v-for="(tabItem, indey) in tab" :key="indey" :class="{ 'tab-item-active': indey === currentTab }" @click="toggleTab2(indey)">
					{{ tabItem.name }}
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-main">
				<block v-for="(item, index) in tab[currentTab].data" :key="index">
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
			tab: [
				{
					name: '热销',
					position: 4,
					total: 0,
					data: []
				},
				{
					name: '最新',
					position: 0,
					total: 0,
					data: []
				},
				{
					name: '超低价',
					position: 1,
					total: 0,
					data: []
				},
				{
					name: '高佣金',
					position: 5,
					total: 0,
					data: []
				},
				{
					name: '大额券',
					position: 3,
					total: 0,
					data: []
				}
			],
			category: ['全部', '女装', '男装', '内衣', '美妆', '配饰', '鞋品', '箱包', '儿童', '母婴', '居家', '美食', '数码', '家电', '其他', '车品', '文体', '宠物'],
			currentIndex:0,
			currentTab: 0,
			scrollLeft: 0,
			page: 1,
			min_id: 1,
			cid: 0,
			type: 9,
			sort: 4
		};
	},
	onLoad(e) {
		uni.setNavigationBarTitle({
			title: e.title
		});
		this.type = e.type
		this.grade = this.$queue.getStorageData('grade') || 0.7;
		// 请求数据
		this.getGoodsList();
	},
	onPageScroll(e) {
		this.isBackTop = e.scrollTop > 500;
	},
	onReachBottom() {
		this.getGoodsList();
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
			let url = `/api/column/apikey/maxd/type/${this.type}/back/10/sort/${this.sort}/min_id/1/cid/${this.cid}`;
			this.$request(url).then(res => {
				let resList = res.data.data;
				// 改变请求参数
				this.min_id = res.data.min_id;
				this.page = res.data.min_id;
				// 修正获得的数据
				resList.forEach(item => {
					item.tkmoney = (item.itemendprice * (item.tkrates * 0.01) * this.grade).toFixed(2);
				});
				
				this.tab[this.currentTab].data = [...this.tab[this.currentTab].data, ...resList];
				// console.log(this.tab[this.currentTab].data);
			});
		},
		selectTab(index) {
			this.currentIndex = index
			this.scrollLeft = this.currentIndex * 48
			this.cid = index
			// 清空数据
			this.tab[this.currentTab].data = []
			// 回到顶部
			this.handleBackTop()
			this.getGoodsList()
		},
		toggleTab2(indey) {
			this.currentTab = indey
			this.sort = this.tab[indey].position
			this.handleBackTop()
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
.content {
	margin-top: 170rpx;
}
.search-header {
	padding-top: 30rpx;
	height: 150rpx;
	/* #ifdef H5 */
	background-image: linear-gradient(90deg, $color-sec1, $color-main);
	/* #endif */
	/* #ifndef H5 */
	background-color: $color-main;
	/* #endif */
	.back {
		color: #fff;
	}
	.search-header-title {
		text-align: center;
		font-size: 30rpx;
		height: 130rpx;
		line-height: 130rpx;
		color: #fff;
		letter-spacing: 0.05rem;
	}
}
.search-bar {
	margin: 0 auto;
	background-color: #fff;
	width: 70%;
	padding: 0 40rpx;
	border-radius: 35rpx;
	position: relative;
	line-height: 70rpx;
	.input {
		background-color: #fff;
		height: 70rpx;
	}
	.iconfont {
		position: absolute;
		top: 0;
		right: 130rpx;
		color: $color-main;
		z-index: 99;
	}
	.search-btn {
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #fff;
		border-radius: 35rpx;
		width: 120rpx;
		background-color: #ffb925;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 98;
	}
}

.tab {
	display: flex;
	justify-content: space-evenly;
	background-color: #fff;
	padding: 0 120rpx 10rpx;
	.tab-item {
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 10rpx;
	}
	.tab-item-active {
		color: $color-main;
		border-bottom: 4rpx solid $color-sec1;
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
