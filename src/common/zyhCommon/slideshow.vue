<template>
	<div class="slideshow">
		<div class="item-banner" v-for="(src,index) in bannerData" v-bind:style="{top:lefts[index],zIndex:zIndex[index]}">
			<img class="banner-title" v-if="index == 1" src="../../../static/img/wenan.png"/>
			<img class="banner-img" :src="src"/>
			<a v-if="index == 1">了解更多</a>
		</div>

	</div>
</template>

<script>
	export default {
		props:{
			bannerData:{
				type:Array,
				required:true
			}
		},
		name: 'slideShow',
		data() {
			return {
//				lefts:['-200%','-100%','0','100%','200%'],
				lefts:['-100%','0','100%','200%'],
				zIndex:[2,3,1,0]
			}
		},
		methods: {
			routerGo(routerName){
				this.$router.push({name:routerName});
			}
		},
		created:function () {
			var _this = this;
			window.setInterval(function () {
				var left1 = _this.lefts.shift();
				_this.lefts.push(left1);
				var zIndex1 = _this.zIndex.shift();
				_this.zIndex.push(zIndex1);
			},2000)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.slideshow{
		position: relative;
		width: 100%;
		height: 525px;
		overflow: hidden;
	}
	.item-banner{
		position: absolute;
		top: 0px;
		width: 100%;
		transition: all 0.5s;
	}
	.item-banner .banner-img{
		width: 100%;
		height: 525px;
	}
	.item-banner>a{
		position: absolute;
		z-index: 10;
		top: 335px;
		left: calc(50% - 100px);
		width: 200px;
		background-color: #ba4f2a;
		color: white;
		line-height: 54px;
		text-align: center;
		font: 400 24px/54px "microsoft yahei";
	}
	.item-banner>a:hover{
		background-color: #ec6233;
	}
	.item-banner .banner-title{
		position: absolute;
		z-index: 10;
		top: 120px;
		left: calc(50% - 274px);
	}
</style>
