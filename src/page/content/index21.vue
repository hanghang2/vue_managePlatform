<template>
	<div class="Index21" style="padding: 20px;">
		<div style="width: 800px;">
			<zyh-tabs :zyhtabs="tabsData" @tabsActive="tabsActives"></zyh-tabs>

			<br /><br /><br /><br />

			<zyh-tabs :zyhtabs="tabsData2" @tabsActive="tabsActives2"></zyh-tabs>
			<br /><br /><br /><br />

			<zyh-tabs :zyhtabs="tabsData3" @tabsActive="tabsActives3"></zyh-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index21',
		data() {
			return {
				tabsData:{
					//line card border-card
					type:'card',
					close:true,
					list:[
						'<b>1.</b>用户管理',
						'配置管理',
						'角色管理',
						'定时任务补偿'
					]
				},
				tabsData2:{
					//line card border-card
					type:'line',
					close:true,
					list:[
						'<b>1.</b>用户管理',
						'配置管理',
						'角色管理',
						'定时任务补偿'
					]
				},
				tabsData3:{
					//line card border-card
					type:'border-card',
					close:true,
					list:[
						'<b>1.</b>用户管理',
						'配置管理',
						'角色管理',
						'定时任务补偿'
					]
				}

			}
		},
		methods: {
			tabsActives(item){
				console.log(item);
			},
			tabsActives2(item){
				console.log(item);
			},
			tabsActives3(item){
				console.log(item);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
