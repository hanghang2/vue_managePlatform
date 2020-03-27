<template>
	<div class="zyh-tootip">
		<transition name="fade">
	    	<div class="tootip" v-bind:class="{'bottomCenter':bottomCenter,'bottomRigth':bottomRigth,'bottomLeft':bottomLeft,'topCenter':topCenter,'topLeft':topLeft,'topRigth':topRigth}" v-text="tootipData.content" v-show="isshow"></div>
	  	</transition>
	  	<div class="zyh-tootip-content" @mouseenter="show()" @mouseleave="hide()">
	  		<slot></slot>
	  	</div>
	</div>
</template>

<script>
	export default {
		props:['tootipData'],
		name: 'zyhTootip',
		data() {
			return {
				isshow:false,
				bottomCenter:false,
				bottomRigth:false,
				bottomLeft:false,
				topCenter:false,
				topLeft:false,
				topRigth:false
			}
		},
		methods: {
			show(){
				this.isshow = true;
			},
			hide(){
				this.isshow = false;
			},
			theActive(){
				return false;
			}
		},
		mounted(){},
		created:function () {
			if(this.tootipData.alignment == 'bottomCenter'){
				this.bottomCenter = true;
			}else if(this.tootipData.alignment == 'bottomRigth'){
				this.bottomRigth = true;
			}else if(this.tootipData.alignment == 'bottomLeft'){
				this.bottomLeft = true;
			}else if(this.tootipData.alignment == 'topCenter'){
				this.topCenter = true;
			}else if(this.tootipData.alignment == 'topLeft'){
				this.topLeft = true;
			}else if(this.tootipData.alignment == 'topRigth'){
				this.topRigth = true;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zyh-tootip{
		display: inline-block;
		position: relative;
		width: auto;
	}
	.zyh-tootip-content{
		display: inline-block;
	}
	.tootip{
		position: absolute;
	    background: #000000;
	    color: #fff;
	    padding: 8px;
	    max-width: 500px;
	    border-radius: 4px;
	    width: 200px;
	}
	.tootip::before{
		content: '';
		display: block;
		border: 6px solid #fff;
		border-top: 0px;
		border-bottom-color: #000;
		position: absolute;
	}
	/*bottomCenter*/
	.bottomCenter{
	    margin-top: 10px;
	    top: 100%;
	    left: calc(50% - 100px);
	}
	.bottomCenter::before{
		top: -6px;
	    left: 97px;
	}
	/*bottomRigth*/
	.bottomRigth{
	    margin-top: 10px;
	    top: 100%;
		left:calc(100% - 200px);
	}
	.bottomRigth::before{
		top: -6px;
	    right: 20px;
	}
	/*bottomLeft*/
	.bottomLeft{
	    margin-top: 10px;
	    top: 100%;
		left:0px;
	}
	.bottomLeft::before{
		top: -6px;
	    left: 20px;
	}
	/*topCenter*/
	.topCenter{
	    margin-bottom: 10px;
		bottom: 100%;
	    left: calc(50% - 100px);
	}
	.topCenter::before{
		bottom: -6px;
		border: 6px solid #fff;
		border-bottom: 0px;
		border-top-color: #000;
	    left: 97px;
	}
	/*topRigth*/
	.topRigth{
	    margin-bottom: 10px;
		bottom: 100%;
		left:calc(100% - 200px);
	}
	.topRigth::before{
		bottom: -6px;
		border: 6px solid #fff;
		border-bottom: 0px;
		border-top-color: #000;
	    right: 20px;
	}
	/*topLeft*/
	.topLeft{
	    margin-bottom: 10px;
		bottom: 100%;
		left:0px;
	}
	.topLeft::before{
		bottom: -6px;
		border: 6px solid #fff;
		border-bottom: 0px;
		border-top-color: #000;
	    left: 20px;
	}
</style>