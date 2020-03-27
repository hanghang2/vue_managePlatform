<template>
	<div class="zyh-viewpager" @mouseenter="enter()" @mouseleave="leave()">
        <span class="zyh-viewpager-prev" @click="prev()" v-show="!t">👈</span>
        <div ref="zyhviewpager">
            <slot>

            </slot>
        </div>
        <span class="zyh-viewpager-next" @click="next()" v-show="!t">👉</span>
        <div class="zyh-viewpager-nav">
            <div v-for="(item,index) in lefts" @click="active(index)">
                <span v-bind:class="{'active':(item == '000%')}"></span>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		props:{},
		name: 'zyhViewpager',
		data() {
            return {
                lefts:[],
                zIndex:[],
                t:true,
                open:true,
                isactive:false
            }
		},
		methods: {
		    //初始化
            init(){
                let num = this.$refs.zyhviewpager.children.length;
                for (let i = 0; i < num; i++) {
                    if(i + 1 == num){
                        this.lefts.push('-100%');
                        this.zIndex.push(num - i);
                    }else{
                        this.lefts.push(i + '00%');
                        this.zIndex.push(num - i);
                    }
                }
            },
		    // dom更新样式
            domupdateStyle(){
                let children = this.$refs.zyhviewpager.children;
                for (let i = 0; i < children.length; i++) {
                    children[i].style.left = this.lefts[i];
                    children[i].style.zIndex = this.zIndex[i];
                    if(this.isactive && (this.lefts[i] != '000%')){
                        children[i].style.opacity=0;
                    }else{
                        children[i].style.opacity=1;
                    }
                }
            },
            //移入
            enter(){
                this.t = false;
            },
            //移出
            leave(){
                this.t = true;
            },
            next(){
                if(this.open == true){
                    this.open = false;
                    var _this = this;
                    window.setTimeout(function(){
                        _this.open = true;
                    },500)
                    var left1 = this.lefts.pop();
                    this.lefts.unshift(left1);
                    var zIndex1 = this.zIndex.pop();
                    this.zIndex.unshift(zIndex1);
                    this.domupdateStyle();
                }
            },
            prev(){
                if(this.open == true){
                    this.open = false;
                    var _this = this;
                    window.setTimeout(function(){
                        _this.open = true;
                    },500)
                    var left1 = this.lefts.shift();
                    this.lefts.push(left1);
                    var zIndex1 = this.zIndex.shift();
                    this.zIndex.push(zIndex1);
                    this.domupdateStyle();
                }
            },
            // 跳转到某页面
            active(index){
                if(this.lefts[index] == '000%'){
                    this.isactive = true;
                    this.domupdateStyle();
                    var _this = this;
                    window.setTimeout(function(){
                        _this.isactive = false;
                    },500)
                }else{
                    var left1 = this.lefts.pop();
                    this.lefts.unshift(left1);
                    var zIndex1 = this.zIndex.pop();
                    this.zIndex.unshift(zIndex1);
                    this.active(index);
                }

            }
		},
		mounted(){
		    this.init();
            this.domupdateStyle();
            var _this = this;
            window.setInterval(function () {
                if(_this.t){
                    _this.next();
                }
            },2000)
        },
		created:function () {


		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .zyh-viewpager{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .item-banner{
        height: 100%;
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
    /*上下页*/
    .zyh-viewpager-next,.zyh-viewpager-prev{
        background: #ccc;
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 999;
        top: calc(50% - 25px);
        opacity: 0.5;
        color: #fff;
        font-size: 20px;
        text-align: center;
        border-radius: 50%;
        line-height: 50px;
    }
    .zyh-viewpager-prev{
        left: 0px;
    }
    .zyh-viewpager-next{
        right: 0px;
    }
    .zyh-viewpager-nav{
        position: absolute;
        z-index: 99;
        bottom: 40px;
        left: 50%;
        width: auto;
        transform:translateX(-50%);
    }
    .zyh-viewpager-nav div{
        float: left;
        padding: 10px 0px;
        cursor: pointer;
    }
    .zyh-viewpager-nav span{
        display: block;
        width: 30px;
        height: 2px;
        background: #aaa;
        float: left;
        margin: 0px 4px;
        opacity: 0.8;
    }
    .zyh-viewpager-nav span.active{
        background: #ccc;
    }
</style>



