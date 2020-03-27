<template>
    <div class="zyh-color-controller" v-show="isShow">
        <div class="color-parent" v-bind:style="{background:color}" @click="colorShow">
            <div class="zyh-color-circle" v-bind:style="{left:colorsLeft+'px',top:colorsTop+'px'}"></div>
            <div class="zyh-color-white"></div>
            <div class="zyh-color-black"></div>
        </div>
        <div class="zyh-color-right" @click="colorAlter">
            <div class="zyh-color-right-child" v-bind:style="{marginTop:colorTop+'px'}"></div>
        </div>
        <div class="zyh-color-bottom">
        	<li class="zyh-li-color" v-text="colors"></li>
        	<li class="zyh-li-ok" @click="colorOk">确定</li>
        	<li class="zyh-li-on">清除</li>
        </div>
    </div>
</template>
<script>
    export default {
        props:[],
        name: 'zyhColorController',
        data() {
            return {
                color:"",
                colorArr:[255,255,255],
                colorsArr:[255,255,255],
                colorsLeft:"0",
                colorsTop:"0",
                colorTop:"",
                colors:"",
                isShow:false
            }
        },
        methods: {
        	show(){
        		this.isShow = true;
        	},
        	colorOk(){
        		this.isShow = false;
        	},
            colorAlter(e){
                this.colorTop = e.offsetY;
                const colorArr = [[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];
                const colorRatio = [0,0.17,0.33,0.5,0.67,0.83,1];
                let ratio = e.offsetY / 180;
                let index = 0;
                let real,color1,color2,color3;
                for (var i = 0; i < colorRatio.length; i++) {
                    if(ratio < colorRatio[i]){
                        index = i;
                        break;
                    }
                }
                ratio = ratio - colorRatio[index - 1];
                real = ratio/(colorRatio[index] -  colorRatio[index - 1]);
                color1 = colorArr[index][0] - colorArr[index-1][0] == 0 ? colorArr[index-1][0] : Math.abs(colorArr[index][0] - colorArr[index-1][0])*real;
                color2 = colorArr[index][1] - colorArr[index-1][1] == 0 ? colorArr[index-1][1] : Math.abs(colorArr[index][1] - colorArr[index-1][1])*real;
                color3 = colorArr[index][2] - colorArr[index-1][2] == 0 ? colorArr[index-1][2] : Math.abs(colorArr[index][2] - colorArr[index-1][2])*real;
                this.colorArr = [Math.round(color1),Math.round(color2),Math.round(color3)];
                this.color = "rgb(" + parseInt(color1) + "," + parseInt(color2) + "," + parseInt(color3) + ")";
                let realX = this.colorsLeft/280;
                let realY = this.colorsTop/180;
                this.getColorValue(realX,realY);
            },
            colorShow(e){
                this.colorsLeft = e.offsetX;
                this.colorsTop = e.offsetY;
                let realX = e.offsetX/280;
                let realY = e.offsetY/180;
                this.getColorValue(realX,realY);
            },
            getColorValue(realX,realY){
                //左右计算
                for (var i = 0; i < this.colorArr.length; i++) {
                    if(this.colorArr[i] != 255){
                        this.colorsArr[i] = Math.round(this.colorArr[i] + (255 - this.colorArr[i])*(1 - realX));
                    }else{
                        this.colorsArr[i] = this.colorArr[i];
                    }
                }
                //上下计算
                for (var i = 0; i < this.colorArr.length; i++) {
                    this.colorsArr[i] = Math.round(this.colorsArr[i] - this.colorsArr[i]*(realY));
                }
                this.colors = "rgb(" + this.colorsArr[0] + "," + this.colorsArr[1] + "," + this.colorsArr[2] + ")";
                this.$emit('getColor',this.colors);
            }
        },
        mounted(){},
        created:function () {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .zyh-color-controller{
    	margin-top: 5px;
        position: absolute;
        display: inline-block;
        padding: 10px 30px 10px 10px;
	    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
	    background: #fff;
	    border-radius: 4px;
	    border: 1px solid #e4e7ed;
	    background: white;
    }
    .color-parent{
        position: relative;
        width: 280px;
        height: 180px;
    }
    .zyh-color-white,.zyh-color-black{
        width: 280px;
        height: 180px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .zyh-color-black{
        background: linear-gradient(0deg,#000,transparent);
    }
    .zyh-color-white{
        background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
    }
    .zyh-color-right{
        width: 12px;
        height: 180px;
        background: linear-gradient(180deg,red 0,#ff0 17%,lime 33%,cyan 50%,blue 67%,#f0f 83%,red);
        position: absolute;
        left: 300px;
    	top: 10px;
    }
    .zyh-color-circle{
        position: absolute;
        border: 1px solid #000;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        pointer-events: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        z-index: 2;
    }
    .zyh-color-right-child{
        height: 5px;
        width: 16px;
        margin-left: -2px;
        margin-top: 0px;
        border: 1px solid #000;
        pointer-events: none;
    }
    .zyh-color-bottom li{
    	list-style: none;
        margin-top: 10px;
        height: 28px;
    	line-height: 28px;
    }
    .zyh-color-bottom .zyh-li-ok{
    	float: right;
    	padding: 7px 15px;
    	font-size: 12px;
    	border-radius: 3px;
    	cursor: pointer;
	    background: #fff;
	    border: 1px solid #dcdfe6;
	    border-color: #dcdfe6;
	    line-height: 12px;
    }
    .zyh-color-bottom .zyh-li-on{
    	float: right;
    	margin-right: 20px;
    	cursor: pointer;
    	color: #3a8ee6;
    }
    .zyh-color-bottom .zyh-li-ok:active{
    	border-color: #3a8ee6;
    	color: #3a8ee6;
    }
    .zyh-color-bottom .zyh-li-on:active{
    	color: #104fe0;
    }
    .zyh-li-color{
    	border: 1px solid #dcdfe6;
	    box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    border-radius: 4px;
	    width: 160px;
	    padding: 0px 15px;
    	float: left;
    }
</style>