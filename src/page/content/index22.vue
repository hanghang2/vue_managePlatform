<template>
	<div class="Index22">
		<zyh-drop-down ref="child" :zyhType="type">
			<span>下拉菜单</span>
			<div slot="dropdown_zyh">
				<li @click="active">菜单一</li>
				<li @click="active">菜单二</li>
				<li @click="active">菜单三</li>
				<li @click="active">菜单四</li>
			</div>
		</zyh-drop-down>
	</div>
</template>

<script>
	export default {
		name: 'Index22',
		data() {
			return {
				//hover click 默认 hover
				type:"hover"
			}
		},
		methods: {
			active(){
				this.$refs.child.hide();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
