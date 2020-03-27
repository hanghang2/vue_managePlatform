<template>
	<div class="Index2">
		<br />
		<zyh-nav-menu :navData="datas" class="Zyh-navMenu"></zyh-nav-menu>
	</div>
</template>

<script>
	export default {
		name: 'Index2',
		data() {
			return {
				datas:[
					{name:'处理中心',active:true},
					{name:'我的工作台',
						child:[
							{name:'选项1'},
							{name:'选项2'},
							{name:'选项3'},
							{name:'选项4',
								child:[
									{name:'选项1'},
									{name:'选项2'},
									{name:'选项3',
										child:[
											{name:'选项1'},
											{name:'选项2'},
											{name:'选项3'},
											{name:'选项4'}
										]
									}
								]
							}
						]
					},
					{name:'消息中心'},
					{name:'订单管理'}
				]
			}
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
