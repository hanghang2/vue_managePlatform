<template>
    <div class="MainView">
        <!--左侧菜单-->
        <left-menu @menuchange="menuChange"></left-menu>

        <div class="MainView-right">
            <!--头部-->
            <main-head ref="mainHead"></main-head>
            <!--{/*右侧页面*/}-->
            <div class="MainView-main">
                <keep-alive>
                    <router-view></router-view>
                    <!--<router-view v-if='isKeepActive'></router-view>-->
                </keep-alive>
                <!--<router-view v-if='!isKeepActive'></router-view>-->
            </div>
        </div>
    </div>
</template>
<script>
    import leftMenu from '@/components/leftMenu'
    import mainHead from '@/components/mainHead'
    export default {
        components: {},
        name: 'appModule',
        data() {
            return {}
        },
        methods: {
            menuChange(data){//切换左侧导航
                this.$refs.mainHead.addMenu(data)//通知头部导航添加
            }
        },
        created: function () {
        },
        components:{
            leftMenu,mainHead
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .MainView{
        height: 100vh;width: 100%;display: flex;font-size: 15px;
    }
    .MainView-right{
        flex: 1;display: flex;flex-direction: column ;position: relative;z-index: 2;background: #ffffff;
        .MainView-main{
            flex: 1;background-color: #f6f6f6;padding: 15px;overflow-y: auto;
        }
    }
</style>
