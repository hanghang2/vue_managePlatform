<template>
	<div class="Index3">
		<p>自定义ztree组件</p>

		<!-- the demo root element -->
		<ul id="demo">
			<zyh-ztree
			    class="item"
			    :model="treeData" :toolbar="toolbar" >
			</zyh-ztree>
			<button @click="submit">按钮</button>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Index3',
		data() {
			return {
				treeData:{
					name: '开始',
					checked:true
				},
				toolbar:{
					edit:true,
					isdelete:true,
					isadd:true,
					ischeck:true
				}
			}
		},
		methods: {
			submit(){
				console.log(this.treeData);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
