<template>
    <div class="zyh-page">
        <span class="total" v-text="'共 '+total+' 条'"></span>
        <zyh-select :selectData="selectData" :val="value" @getVal="getval" :width="'100px'" :height="'28px'"></zyh-select>
        <li @click="prevpage"><</li>
        <ul>
            <li @click="active(1)" v-bind:class="{activepage:activePage == 1}">1</li>
            <li v-show="minshow" @click="init">...</li>
            <li v-for="page in allPage" v-text="page" @click="active(page)" v-bind:class="{activepage:activePage == page}"></li>
            <li v-show="maxShow" @click="lastPage">...</li>
            <li v-text="maxPage" v-show="showMaxpage" v-bind:class="{activepage:activePage == maxPage}"  @click="active(maxPage)"></li>
        </ul>
        <li @click="nextpage">></li>
    </div>
</template>
<script>
    export default {
        props:[
            "total","pages"
        ],
        name: 'zyhPage',
        data() {
            return {
                value:'',
                selectData:[],
                maxPage:'',
                allPage:[],
                start:1,
                showMaxpage:false,
                maxShow:false,
                minshow:false,
                activePage:1
            }
        },
        methods: {
            active(page){
                this.activePage = page;
                this.$emit('getVal',{page:this.activePage,total:this.value});
            },
            getval(val){
                this.activePage = 1;
                this.value = val;
                this.getmMxPage();
                this.$emit('getVal',{page:this.activePage,total:this.value});
            },
            init(){
                this.start = 2;
                this.allPage=[];
                if(this.maxPage > 6){
                    for (var i = 2; i < 7; i++) {
                        this.allPage.push(i);
                    }
                }else{
                    for (var i = 2; i < this.maxPage; i++) {
                        this.allPage.push(i);
                    }
                }
                this.isShow();
            },
            getmMxPage(){
                this.maxPage = Math.ceil(this.total/this.value);
                if(this.maxPage > 1){
                    this.showMaxpage = true;
                }
                this.init();
            },
            nextpage(){
                if(this.start + 5 < this.maxPage){
                    this.allPage = [];
                    this.start++;
                    for (var i = this.start; i < this.start + 5; i++) {
                        this.allPage.push(i);
                    }
                }
                this.isShow();
            },
            prevpage(){
                if(this.start > 2){
                    this.allPage = [];
                    this.start--;
                    for (var i = this.start; i < this.start + 5; i++) {
                        this.allPage.push(i);
                    }
                }
                this.isShow();
            },
            isShow(){
                if(this.allPage.length){
                    this.minshow = this.allPage[0] == 2 ? false : true;
                    this.maxShow = this.allPage[this.allPage.length - 1] == (this.maxPage - 1) ? false : true;
                }else{
                    this.minshow = false;
                    this.maxShow = false;
                }
            },
            lastPage(){
                this.start = this.maxPage - 6;
                this.nextpage();
            }
        },
        mounted(){
        },
        created:function () {
            this.value = this.pages[0];
            for (var i = 0; i < this.pages.length; i++) {
                this.selectData[i] = {
                    name:this.pages[i]+'条/页',
                    value:this.pages[i]
                };
            }
            this.getmMxPage();
            this.init();
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .zyh-page{
        display: inline-block;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    .total{
        padding: 0px 10px;
    }
    .zyh-page ul{
        padding: 0px;margin: 0px;
        display: inline-block;
        vertical-align: middle;
    }
    .zyh-page li{    
        padding: 0 4px;
        background: #fff;
        vertical-align: middle;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        margin: 0;
        font-weight: bold;
    }
    .zyh-page li:hover{
        color: #409eff;
    }
    .zyh-selsect input{
        width: 100px !important;
    }
    .zyh-page li.activepage{
        color: #409eff;
    }
</style>