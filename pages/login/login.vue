<template>
	<view class="login">
		<!-- #ifdef H5 -->
		<back></back>
		<!-- #endif -->
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src="../../static/img/logo.png" mode=""></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput
					v-model="phoneData"
					type="text"
					maxlength="11"
					placeholder="手机号码"
					
				></wInput>
				
				<wInput
					v-if="selectedCode"
					v-model="verCode"
					type="number"
					maxlength="6"
					placeholder="验证码"
					isShowCode
					ref="runCode"
					@setCode="getVerCode()"
				></wInput>
				<wInput
					v-else
					v-model="passData"
					type="password"
					maxlength="11"
					placeholder="密码"
				></wInput>
			</view>
			<wButton 
				class="wbutton"
				text="登 录"
				bgColor="#c7000a"
				:rotate="isRotate" 
				@click.native="startLogin()"
			></wButton>
			
			<!-- 其他登录 -->

			<!-- 底部信息 -->
			<view class="footer">
				<view class="select-pass" v-if="selectedCode" @click="toggleSelect">
					密码登录
				</view>
				<view class="select-code" v-else @click="toggleSelect">
					验证码登录
				</view>
				<text>|</text>
				<navigator url="/pages/login/forget" open-type="navigate">找回密码</navigator>
				<text>|</text>
				<navigator url="/pages/login/register" open-type="navigate">注册账号</navigator>
				
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	export default {
		data() {
			return {
				phoneData:'', //用户/电话
				passData:'', //密码
				isRotate: false, //是否加载旋转
				verCode:"", //验证码
				selectedCode: true
			};
		},
		components:{
			wInput,
			wButton
		},
		mounted() {
			_this= this;
			//this.isLogin();
		},
		methods: {
			toggleSelect() {
				this.selectedCode = !this.selectedCode
			},
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				uni.showLoading({
					title:"获取验证码"
				})
				this.$request("/tao/user/sendMsg/" + this.phoneData + "/login").then(res => {
					uni.hideLoading()
					uni.showToast({
							icon: 'none',
							title: '验证码已发送,请注意查收'
					});
					this.$refs.runCode.$emit('runCode');
				}).catch(err => {
					uni.showToast({
							icon: 'none',
							title: '获取验证码失败'
					});
				})
			},
			// isLogin(){
			// 	//判断缓存中是否登录过，直接登录
			// 	try {
			// 		const value = this.$queue.getStorageData("token");
			// 		if (value) {
			// 			//有登录信息
			// 			console.log("已登录用户：",value);
			// 			_this.$store.dispatch("setUserData",value); //存入状态
			// 			uni.reLaunch({
			// 				url: '/pages/index/index',
			// 			});
			// 		}
			// 	} catch (e) {
			// 		// error
			// 	}
			// },
		    startLogin(){
				//登录
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length == "") {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '用户名不能为空'
				    });
				    return;
				}
				// 使用验证码登录
				if(this.selectedCode) {
					if(this.verCode === "") {
						uni.showToast({
						    icon: 'none',
						    title: '验证码不能为空'
						});
						return;
					}
					if(this.verCode.length !== 6) {
						uni.showToast({
						    icon: 'none',
						    title: '验证码格式错误'
						});
						return;
					}
				}
				// 清除登录信息
				this.$queue.clearLogin()
				// 发送登录请求
				this.$request("/tao/user/bindOpenid", {
					pwd: this.passData,
					phone: this.phoneData,
					msg: this.verCode,
					platform: "",
					invitation: "",
				}, "POST").then(res => {
					console.log(res);
					uni.showToast({
					    icon: 'none',
					    title: '登录成功'
					});
					let token = res.data.data.uuid
					let userId = res.data.data.userId
					let mobile = this.phoneData
					this.$queue.setStorageData("token", token)
					this.$queue.setStorageData("nickName", mobile)
					this.$queue.setStorageData("userId", userId)
					this.$queue.setStorageData("mobile", mobile)
					// this.$queue.setStorageData("loginStatus", true)
					uni.reLaunch({
						url:"../member/user"
					})
				})
				
				
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
				// uni.showLoading({
				// 	title: '登录中'
				// });
				// getLogin()
				// .then(res => {
				// 	//console.log(res)
				// 	//简单验证下登录（不安全）
				// 	if(_this.phoneData==res.data.username && _this.passData==res.data.password){
				// 		let userdata={
				// 			"username":res.data.username,
				// 			"nickname":res.data.nickname,
				// 			"accesstoken":res.data.accesstoken,
				// 		} //保存用户信息和accesstoken
				// 		_this.$store.dispatch("setUserData",userdata); //存入状态
				// 		try {
				// 			uni.setStorageSync('setUserData', userdata); //存入缓存
				// 		} catch (e) {
				// 			// error
				// 		}
				// 		uni.showToast({
				// 			icon: 'success',
				// 			position: 'bottom',
				// 			title: '登录成功'
				// 		});
				// 		uni.reLaunch({
				// 			url: '../../../pages/index',
				// 		});
				// 	}else{
				// 		_this.passData=""
				// 		uni.showToast({
				// 			icon: 'error',
				// 			position: 'bottom',
				// 			title: '账号或密码错误，账号admin密码admin'
				// 		});
				// 	}
				// 	uni.hideLoading();
				// }).catch(err => {
				// 	uni.hideLoading();
				// })
				
		    }
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>
