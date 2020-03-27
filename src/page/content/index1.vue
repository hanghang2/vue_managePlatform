<template>
	<div class="Index1">
		<div>

	   </div>
	   <slide-show v-bind:bannerData="bannerData"></slide-show>
	</div>
</template>

<script>
	export default {
		name: 'Index1',
		data() {
			return {
				bannerData:[ require('../../../static/img/banner.png'),require('../../../static/img/banner.png'),require('../../../static/img/banner.png'),require('../../../static/img/banner.png')],
				datas:'datas',
				name:this.$store.getters.filterusername
			}
		},
		methods: {
			handleSelectAll(status) {
				this.$refs.selection.selectAll(status);
			}
		},
        created(){
        }
	}
</script>


<style scoped>

</style>
