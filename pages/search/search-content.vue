<template>
	<view class="search">
		<view class="fixed">
			<view class="search-header">
				<!-- #ifdef H5 -->
				<back class="back"></back>
				<!-- #endif -->
				<view class="search-bar">
					<input type="text" v-model="searchText" placeholder="输入关键字或粘贴宝贝标题" class="input" />
					<text class="iconfont icon-x" v-show="searchText" @click="clickCancel"></text>
					<view class="search-btn" @tap="clickSearch">搜索</view>
				</view>
			</view>
			<view class="tablist">
				<view class="tablist-item" v-for="(tabListItem, index) in tabList" :key="index" :class="{ 'tablist-item-active': index === currentTab }" @click="toggleTabList(index)">
					{{ tabListItem.name }}
				</view>
			</view>
			<view class="tab">
				<view class="tab-item" v-for="(tabItem, indey) in tab" :key="indey" :class="{ 'tab-item-active': indey === currentTabItem }" @click="toggleTab(indey)">
					{{ tabItem.name }}
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-main" v-if="showContent">
				<!-- 淘宝数据 -->
				<block v-for="(item, index) in taobaoData[currentTabItem].data" :key="index" v-if="currentTab === 0">
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
				<!-- 拼多多数据 -->
				<block v-for="(item, index) in pddData[currentTabItem].data" :key="index" v-if="currentTab === 1">
					<goods-item-plus
						class="goods-item"
						:img="item.goodsImageUrl"
						shoptype="A"
						:title="item.goodsDesc"
						:price="item.itemendprice"
						:sales="item.salesTip"
						:coupon="(item.itemprice - item.itemendprice).toFixed(0)"
						:cashback="item.tkmoney"
						:shopname="item.mallName"
						:itemid="item.goodsId"
					></goods-item-plus>
				</block>
				<!-- 京东数据 -->
				<block v-for="(item, index) in jdData[currentTabItem].data" :key="index" v-if="currentTab === 2">
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
			showList: [],
			searchText: '衣服',
			currentTab: 0,
			currentTabItem: 0,
			tabList: [
				{
					position: 'tb',
					name: '淘宝'
				},
				{
					position: 'pdd',
					name: '拼多多'
				},
				{
					position: 'jd',
					name: '京东'
				}
			],
			tab: [
				{
					name: '热销',
					position: 2,
					pdd: 6,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '综合',
					position: 0,
					pdd: 0,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '最新',
					position: 1,
					pdd: 12,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '高佣',
					position: 6,
					pdd: 14,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '低价',
					position: 4,
					pdd: 9,
					jd: 5,
					total: 0,
					data: []
				}
			],
			emptyData:[
				{
					name: '热销',
					total: 0,
					data: []
				},
				{
					name: '综合',
					total: 0,
					data: []
				},
				{
					name: '最新',
					total: 0,
					data: []
				},
				{
					name: '高佣',
					total: 0,
					data: []
				},
				{
					name: '低价',
					total: 0,
					data: []
				}
			],
			taobaoData: [
				{
					name: '热销',
					total: 0,
					data: []
				},
				{
					name: '综合',
					total: 0,
					data: []
				},
				{
					name: '最新',
					total: 0,
					data: []
				},
				{
					name: '高佣',
					total: 0,
					data: []
				},
				{
					name: '低价',
					total: 0,
					data: []
				}
			],
			pddData: [
				{
					name: '热销',
					total: 0,
					data: []
				},
				{
					name: '综合',
					total: 0,
					data: []
				},
				{
					name: '最新',
					total: 0,
					data: []
				},
				{
					name: '高佣',
					total: 0,
					data: []
				},
				{
					name: '低价',
					total: 0,
					data: []
				}
			],
			jdData: [
				{
					name: '热销',
					total: 0,
					data: []
				},
				{
					name: '综合',
					total: 0,
					data: []
				},
				{
					name: '最新',
					total: 0,
					data: []
				},
				{
					name: '高佣',
					total: 0,
					data: []
				},
				{
					name: '低价',
					total: 0,
					data: []
				}
			],

			min_id: 1,
			taobaoSort: 2,
			taobaoPage: 1,
			pddSort: 6,
			pddPage: 1,
			jdSort: 5,
			jdPage: 1
		};
	},
	onLoad(e) {
		if (e.keyword) {
			this.searchText = e.keyword;
		}
		this.grade = this.$queue.getStorageData('grade') || 0.7;
		// 请求数据
		this.getTaobaoList();
	},
	onPageScroll(e) {
		this.isBackTop = e.scrollTop > 500
	},
	onReachBottom() {
		if (this.currentTab === 0) {
			// 请求淘宝数据
			this.taobaoSort = this.tab[this.currentTabItem].position;
			this.getTaobaoList();
		}
		if (this.currentTab === 1) {
			this.getPddList();
		}
		if (this.currentTab === 2) {
			this.getJdList();
		}
	},
	computed:{
		showContent(){
			if(this.currentTab === 0) {
				return this.taobaoData[this.currentTabItem].data.length
			}
			if(this.currentTab === 1) {
				return this.pddData[this.currentTabItem].data.length
			}
			if(this.currentTab === 2) {
				return this.jdData[this.currentTabItem].data.length
			}
		}
	},
	methods: {
		//回到顶部
		handleBackTop(){
			uni.pageScrollTo({
				scrollTop:0,
				duration:500
			})
		},
		//点击取消
		clickCancel() {
			this.searchText = '';
		},
		clickSearch() {
			if (!this.searchText) {
				uni.showToast({
					icon: 'none',
					title: '搜索内容不能为空'
				});
			}
			// 回到顶部
			this.handleBackTop()
			// 清空数据_3个
			this.taobaoData.forEach(item => {
				item.data = []
			})
			this.pddData.forEach(item => {
				item.data = []
			})
			this.jdData.forEach(item => {
				item.data = []
			})
			// 为什么不能空对象置空
			// this.taobaoData = this.emptyData
			// this.pddData = this.emptyData
			// this.jdData = this.emptyData
			//请求数据
			if (this.currentTab === 0) {
				// 请求淘宝数据
				this.taobaoSort = this.tab[this.currentTabItem].position;
				this.getTaobaoList();
			}
			if (this.currentTab === 1) {
				this.pddSort = this.tab[this.currentTabItem].pdd
				this.getPddList();
			}
			if (this.currentTab === 2) {
				this.jdSort = this.tab[this.currentTabItem].jd
				this.getJdList();
			}
		},
		getTaobaoList() {
			let url = `/api/supersearch/apikey/maxd/keyword/${this.searchText}/back/20/sort/${this.taobaoSort}/min_id/${this.min_id}/is_coupon/1/tb_p/${this.taobaoPage}`;
			this.$request(url).then(res => {
				let resList = res.data.data;
				// 改变请求参数
				this.min_id = res.data.min_id;
				this.taobaoPage = res.data.tb_p;
				// 修正获得的数据
				resList.forEach(item => {
					item.tkmoney = (item.itemendprice * (item.tkrates * 0.01) * this.grade).toFixed(2);
				});
				// 保存数据
				let resIndex = this.currentTabItem
				this.taobaoData[resIndex].data = [...this.taobaoData[resIndex].data, ...resList]
				this.taobaoData[resIndex].total = this.taobaoData[resIndex].data.length
			});
		},
		getPddList() {
			let url = `/tao/pdd/list/keyword/${this.pddSort}/page/${this.pddPage}/pageSize/20?keyword=${this.searchText}`;
			this.$request(url).then(res => {
				// 改变请求参数
				this.pddPage += 1;
				// 修正数据
				let resList = res.data.goodsSearchResponse.goodsList;
				resList.forEach(item => {
					item.itemprice = (item.minGroupPrice * 0.01).toFixed(2);
					item.itemendprice = ((item.minGroupPrice - item.couponDiscount) * 0.01).toFixed(2);
					item.tkmoney = ((item.minGroupPrice - item.couponDiscount) * 0.01 * (item.promotionRate * 0.001) * this.grade).toFixed(2);
				});
				// 保存数据
				let resIndex = this.currentTabItem
				this.pddData[resIndex].data = [...this.pddData[resIndex].data, ...resList]
				this.pddData[resIndex].total = this.pddData[resIndex].data.length

			});
		},
		getJdList() {
			let url = `/tao/jd/goods/list/${this.jdPage}?sortName=${this.jdSort}&keywords=${this.searchText}`;
			this.$request(url).then(res => {
				// 改变请求参数

				this.jdPage += 1;
				// 修正数据
				let resList = res.data.data.list
				resList.forEach(item => {
					item.itempic = item.imageInfo.imageList[0].url;
					item.couponmoney = parseInt(item.priceInfo.lowestPrice - item.priceInfo.lowestCouponPrice).toFixed(0);
					item.tkmoney = (item.commissionInfo.couponCommission * this.grade).toFixed(2);
				});
				let resIndex = this.currentTabItem

				//保存数据
				this.jdData[resIndex].data = [...this.jdData[resIndex].data, ...resList]
				this.jdData[resIndex].total = this.jdData[resIndex].data.length

			});
		},
		toggleTabList(index) {
			this.currentTab = index;
			this.handleBackTop()
			if (this.currentTab === 0) {
				this.getTaobaoList();
			}
			if (this.currentTab === 1) {
				this.getPddList();
			}
			if (this.currentTab === 2) {
				this.getJdList();
			}
		},
		toggleTab(indey) {
			this.currentTabItem = indey;
			// 回到顶部
			this.handleBackTop()
			if (this.currentTab === 0) {
				this.taobaoSort = this.tab[indey].position;
				if(!this.taobaoData[this.currentTabItem].data.length){
					this.getTaobaoList();
				}
				
			}
			if (this.currentTab === 1) {
				this.pddSort = this.tab[indey].pdd;
				if(!this.pddData[this.currentTabItem].data.length){
					this.getPddList();
				}
				
			}
			if (this.currentTab === 2) {
				this.jdSort = this.tab[indey].jd;
				if(!this.jdData[this.currentTabItem].data.length){
					this.getJdList();
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.fixed {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: #fff;
	z-index: 99;
}
.content {
	margin-top: 320rpx;
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
.tablist {
	display: flex;
	justify-content: space-evenly;
	background-color: #fff;
	padding-bottom: 10rpx;
	.tablist-item {
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 20rpx;
		font-size: 32rpx;
	}
	.tablist-item-active {
		color: $color-main;
		border-bottom: 4rpx solid $color-sec1;
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
