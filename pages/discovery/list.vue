<template>
	<view class="discovery" style="background: white">
		<scroll-view scroll-x scroll-with-animation class="nav" :scroll-left="scrollLeft">
			<view v-for="(item, index) in category" :key="index" @click="handleItemClick(index)" class="navItem">
				<text :class="{ isActive: currentIndex === index }">{{ item.name }}</text>
			</view>
		</scroll-view>
		<view class="content">
			<view v-show="currentIndex === 0">
				<view v-for="(item, index) in handpick" :key="index"><orange-handpick :handpickData="item"></orange-handpick>
				</view>
			</view>
			<view v-show="currentIndex === 1">
				<view v-for="(item, index) in goodsList" :key="index"><orange-goods :goods="item"></orange-goods>
				</view>
			</view>
		</view>
		<!-- backTop -->
		<back-top @backtop="handleBackTop" :active="isBackTop"></back-top>
	</view>
</template>

<script>
import orangeHandpick from '@/components/uni-pro/orange-handpick';
import orangeGoods from '@/components/uni-pro/orange-goods.vue';
import backTop from '@/components/back-top/back-top.vue';
export default {
	data() {
		return {
			currentIndex: 0,
			scrollLeft: 0,
			category: [
				{
					name: '精选单品',
					position: 1,
					total: 0,
					data: []
				},
				{
					name: '好货专场',
					position: 2,
					total: 0,
					data: []
				}
			],
			min_id: 1,
			handpick: [],
			isBackTop:false,
			min_id_goods: 1,
			goodsList: []
		};
	},
	onLoad() {
		this.getHandpickData(1);
		this.getGoodsData(1)
	},
	onPageScroll(e) {
		this.isBackTop = e.scrollTop > 500 
	},
	onReachBottom() {
		if(this.currentIndex === 0) {
			this.min_id += 1;
			this.getHandpickData(this.min_id);
		}
		if(this.currentIndex === 1) {
			this.getGoodsData(this.min_id_goods);
		}
	},
	methods: {
		// tab点击切换
		handleItemClick(index) {
			this.currentIndex = index;
		},
		// 请求精选数据
		getHandpickData(page) {
			let url = `/api/selected_item/apikey/maxd/min_id/${this.min_id}`;
			this.$request(url).then(res => {
				if (res.data.code === 1) {
					let handpickList = res.data.data.map(item => {
						item.show_content = item.show_content
							.replace(/&lt;/g, '<')
							.replace(/&gt;/g, '>')
							.replace(/&amp;/g, '&')
							.replace(/&quot;/g, '"')
							.replace(/&apos;/g, "'");
						item.copy_content = item.copy_content
							.replace(/&lt;/g, '<')
							.replace(/&gt;/g, '>')
							.replace(/&amp;/g, '&')
							.replace(/&quot;/g, '"')
							.replace(/&apos;/g, "'");
						item.copy_content = item.copy_content.replace(/<br>/g, '/n');
						return item;
					});
					this.handpick = [...this.handpick, ...handpickList]
				}
			});
		},
		// 请求好货数据
		getGoodsData(page) {
			let url = `/api/subject_hot/apikey/maxd/min_id/${this.min_id_goods}`;
			this.$request(url).then(res => {
				this.min_id_goods = res.data.min_id;
				if (res.data.code === 1) {
					console.log(res);
					let goodsData = res.data.data.map(item => {
						item.copy_text = item.copy_text
							.replace(/&lt;/g, '<')
							.replace(/&gt;/g, '>')
							.replace(/&amp;/g, '&')
							.replace(/&quot;/g, '"')
							.replace(/&apos;/g, "'");
						return item;
					});
					this.goodsList = [...this.goodsList, ...goodsData]
				}
			});
		},
		//回到顶部
		handleBackTop() {
			uni.pageScrollTo({
				scrollTop:0,
				duration:500
			})
		},
	},
	components: {
		orangeHandpick,
		orangeGoods,
		backTop
	}
};
</script>

<style lang="scss" scoped>
.discovery {
	height: 100vh;
	background-color: #fff;
	position: relative;
	.nav {
		height: 90rpx;
		background-color: #fff;
		position: fixed;
		top: 0;
		z-index: 99;
	}
	.content {
		margin-top:90rpx;
		background-color: #fff;
	}
}
.nav {
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	.navItem {
		height: 90rpx;
		display: inline-block;
		line-height: 90rpx;
		margin: 0 10rpx;
		padding: 0 20rpx;
		margin-right: -24rpx;
		text {
			background: rgb(220, 220, 220);
			color: rgb(102, 102, 102);
			padding: 8rpx 20rpx;
			border-radius: 32rpx;
		}
		.isActive {
			background: rgb(252, 63, 120);
			color: #fff;
		}
	}
}
.content {
	
}
</style>
