<template>
	<view class="discovery" style="background: white">
		<scroll-view scroll-x scroll-with-animation class="nav" :scroll-left="scrollLeft">
			<view v-for="(item, index) in category" :key="index" @click="handleItemClick(index)" class="navItem">
				<text :class="{isActive: currentIndex === index}">{{item.name}}</text>
			</view>
		</scroll-view>
		<scroll-view scroll-y scroll-with-animation class="content">
			<block v-for="{item, index} in handpick" :key="index">
				<orange-handpick :handpickData="item"></orange-handpick>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import orangeHandpick from '@/components/uni-pro/orange-handpick'
export default {
	data() {
		return {
			currentIndex:0,
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
			handpick:[]
		};
	},
	onLoad() {
		this.getHandpickData(1)
	},
	methods: {
		handleItemClick(index) {
			this.currentIndex = index
			console.log(this.currentIndex, index);
		},
		getHandpickData(page) {
			let url = `/api/selected_item/apikey/maxd/min_id/${this.min_id}`
			this.$request(url).then(res => {
				console.log(res.data);
				if(res.data.code === 1) {
					this.handpick = res.data.data
				}
			});
		}
	},
	components: {
		orangeHandpick
	}
};
</script>

<style lang="scss" scoped>
	.discovery {
		height: 100vh;
		background-color: #fff;
		.nav {
			height: 90rpx;
		}
		.content {
			height: calc(100vh - 90rpx);
		}
	}
.nav {
	 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	.navItem {
		height: 90rpx;
		display: inline-block;
		line-height:  90rpx;
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

</style>
