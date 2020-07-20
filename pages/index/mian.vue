<template>
	<view>
		<view class="fixed">
			<view class="tablist">
				<view class="tablist-item" v-for="(tabListItem, index) in tabList" :key="index" :class="{ 'tablist-item-active': index === currentTab }" @click="toggleTabList(index)">
					{{ tabListItem.name }}
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-desc" v-show="currentTab === 0">
				<view style="background: #FFFFFF;text-align: center;padding: 16px;color: #FC3F78;font-size: 20px;">
					<view>▼</view>
					新人免单流程
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">
						<text @tap="register">注册会员</text>
						» 领券下单 » 等待收货 » 返至我的 » 提现
					</view>
				</view>
				<view style="margin-bottom: 1px;background: #FFFFFF;text-align: center;padding: 16px;color: #FC3F78;font-size: 20px;">
					<view>▼</view>
					以下商品，新人免单
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">仅限还未出过单的会员参与，出过单会员购买不免单</view>
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">（仅限5元内商品全额免单）</view>
				</view>
			</view>
			<view class="content-desc" v-show="currentTab === 1">
				<view style="background: #FFFFFF;text-align: center;padding: 16px;color: #FC3F78;font-size: 20px;">
					<view>▼</view>
					省钱流程
					<view>▼</view>
					<view style="font-size: 14px;color: #FF6600;">进入淘宝/京东/拼多多购物车选择任意商品点击进入详情</view>
					<view>▼</view>
					<view style="font-size: 14px;color: #FF6600;">长按复制商品标题</view>
					<view>▼</view>
					<view style="font-size: 14px;color: #FF6600;">发送至省钱兄公众号</view>
					<view>▼</view>
					<view style="font-size: 14px;color: #FF6600;">找到对应商品进入商品详情</view>
					<view>▼</view>
					<view style="font-size: 14px;color: #FF6600;">点击立即领券（一键复制）</view>
					<view>▼</view>
					<view style="font-size: 14px;color: #FF6600;">打开淘宝自动弹出（点击立即领券）</view>
				</view>
			</view>
			<view class="content-desc" v-show="currentTab === 2">
				<view style="background: #FFFFFF;text-align: center;padding: 16px;color: #FC3F78;font-size: 20px;">
					<view>▼</view>
					加入会员流程
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">注册账号 »进入我的 » 会员申请 »淘宝授权</view>
				</view>
				<view style="margin-bottom: 1px;background: #FFFFFF;text-align: center;padding: 16px;color: #FC3F78;font-size: 20px;">
					<view>▼</view>
					会员赚钱流程
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">选择任意商品 »商品详情 » 生成海报 »分享给朋友</view>
				</view>
				<view style="margin-bottom: 1px;background: #FFFFFF;text-align: center;padding: 16px;color: #FC3F78;font-size: 20px;">
					<view>▼</view>
					会员升级流程
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">进入我的 »推广中心 » 会员升级 »</view>
					<view style="font-size: 14px;margin-top: 8px;color: #FF6600;">生成海报 »分享给朋友</view>
				</view>
			</view>
			<view style="text-align: center;font-size: 36rpx; line-height: 70rpx;height: 70rpx; color: #fff; background-color: #e10a07; position: sticky; top: 170rpx;z-index: 9;"> — 免单商品 — </view>
			<view class="content-main">
				<block v-for="(item, index) in tabList[currentTab].data" :key="index">
					<goods-index :goodsInfo="item"></goods-index>
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
			tabList: [
				{
					name: '新人免单',
					data: [],
					sort: 1
				},
				{
					name: '省钱教程',
					data: [],
					sort: 2
				},
				{
					name: '赚钱流程',
					data: [],
					sort: 3
				}
			],
			page: 1,
			min_id: 0,
			cat_id: 0
		};
	},
	onLoad(e) {
		this.grade = this.$queue.getStorageData('grade') || 0.7;
		// // 请求数据
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
			let url = `/api/low_price_Pinkage_data/apikey/maxd/order/4/type/4/min_id/${this.page}/cid/0`;
			this.$request(url).then(res => {
				let resList = res.data.data;
				// 改变请求参数
				this.page = res.data.min_id;
				// 修正获得的数据
				resList.forEach(item => {
					item.tkmoney = (item.itemendprice * (item.tkrates * 0.01) * this.grade).toFixed(2);
				});
				// 保存数据
				this.tabList[this.currentTab].data = [...this.tabList[this.currentTab].data, ...resList];
			});
		},
		toggleTabList(index) {
			this.handleBackTop();
			this.currentTab = index;
			this.getGoodsList();
			// 请求数据
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

.tablist {
	display: flex;
	justify-content: space-evenly;
	background-color: $color-main;
	color: #fff;
	padding-bottom: 10rpx;
	.tablist-item {
		height: 80rpx;
		line-height: 80rpx;
		// padding: 0 20rpx;
		font-size: 32rpx;
	}
	.tablist-item-active {
		border-bottom: 4rpx solid #fff;
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
