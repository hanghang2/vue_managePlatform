<template>
	<div class="zyh-nav-menu" >
		<ul>
			<li v-for="item in navData">
				<ul v-if="item.child" class="navmenu-child">
					<zyh-nav-menu :navData="item.child"></zyh-nav-menu>
				</ul>
				<span v-text="item.name"></span>
			</li>
			<div style="clear: both;"></div>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['navData'],
		name: 'zyhNavMenu',
		data() {
			return {

			}
		},
		methods: {},
		mounted(){},
		created:function () {
			// console.log(this.navData);

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Zyh-navMenu>ul>li{
		position: relative;
	}
	.zyh-nav-menu{
		width: 100%;
		height: 60px;
		background-color: rgb(84, 92, 100);
		color: white;
	}
	.zyh-nav-menu ul{
		padding-left: 50px;
	}
	.zyh-nav-menu li{
		font-size: 14px;
		list-style: none;
		float: left;
		padding-left: 10px;
		padding-right: 20px;
		height: 60px;
		line-height: 60px;
		cursor: pointer;
		min-width: 160px;
	}
	.zyh-nav-menu li span{
		display: inline-block;
		overflow: hidden;
		width: 140px;
	}
	.zyh-nav-menu li:hover{
		animation: actives 1s 1 forwards;
	}
	@keyframes actives{
		from{
			background-color: rgb(84, 92, 100);
		}
		to{
			background-color: rgb(67, 74, 80);
		}
	}
	ul.navmenu-child{
		padding-left: 5px !important;
		position: absolute;
		top: 5px;
		left: 100%;
		min-height: 100%;
	}
	.Zyh-navMenu>ul>li>ul.navmenu-child{
		padding-top: 5px;
		padding-left: 0px;
		position: absolute;
		top: 60px;
		left: 0px;
	}
	ul.navmenu-child ul{
		padding: 0px;
	}
	ul.navmenu-child li{
		height: 40px;
		line-height: 40px;
		width: 100%;
		background-color: rgb(84, 92, 100)
	}
	li>ul{
		display: none;
	}
	li:hover>ul{
		display: block;
	}
</style>
