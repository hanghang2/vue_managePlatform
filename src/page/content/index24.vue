<template>
	<div class="Index24">
		<div class="btns">
			<zyh-tootip class="margin20 marginLeft100" :tootipData="data5"><button class="zbtn">上左</button></zyh-tootip>
			<zyh-tootip class="margin20" :tootipData="data4"><button class="zbtn">上边</button></zyh-tootip>
			<zyh-tootip class="margin20" :tootipData="data6"><button class="zbtn">上右</button></zyh-tootip>
		</div>
		<div>
			<button class="zbtn marginRight200 margin20">左上</button><button class="zbtn">右上</button>
			<br />
			<button class="zbtn marginRight200 margin20">左边</button><button class="zbtn">右上</button>
			<br />
			<button class="zbtn marginRight200 margin20">左下</button><button class="zbtn">右上</button>
		</div>
		<div class="btns">
			<zyh-tootip class="margin20 marginLeft100" :tootipData="data3"><button class="zbtn">下左</button></zyh-tootip>
			<zyh-tootip class="margin20" :tootipData="data1"><button class="zbtn">下边</button></zyh-tootip>
			<zyh-tootip class="margin20" :tootipData="data2"><button class="zbtn">下右</button></zyh-tootip>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index24',
		data() {
			return {
				data1:{
					content:"嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字",
					alignment:'bottomCenter'
				},
				data2:{
					content:"嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字",
					alignment:'bottomRigth'
				},
				data3:{
					content:"嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字",
					alignment:'bottomLeft'
				},
				data4:{
					content:"嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字",
					alignment:'topCenter'
				},
				data5:{
					content:"嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字",
					alignment:'topLeft'
				},
				data6:{
					content:"嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字嗯嫩大飒飒提示文字",
					alignment:'topRigth'
				}

			}
		},
		methods: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.margin20{
		margin: 20px;
	}
	.marginLeft100{
		margin-left: 100px;
	}
	.marginRight200{
		margin-right: 300px;
	}
</style>
