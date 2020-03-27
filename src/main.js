// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

//阻止启动生产消息
Vue.config.productionTip = false;
// Vue.use(iView)

//全局组件
import zyhModule from './zyhModule';
import './zyhModule/zyh.css'
let zyhViewpager = zyhModule.component('zyhViewpager');
Vue.use(zyhModule.allComonet).use(zyhViewpager);


//路由监听
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
        if (sessionStorage.getItem('username')) { // 查询本地存储信息是否已经登陆
            next();
        } else {
            alert('你还没有登陆');
            next({
                path: '/index1', // 未登录则跳转至首页
                query: {
                    gopage: to.fullPath
                } // 登陆成功后回到当前页面，这里传值给首页，to.fullPath为当前点击的页面
            });
        }
    } else {
        next();
    }
});

//添加混润路由进入 （vue实例赋值 keep-alive的 cache和keys，方便在关闭tabs时候清楚keepalive缓存）
Vue.mixin({
    mounted(){
        this.$options.nameEn = this.$route.name;
    },
    beforeRouteEnter: function (to, from, next) {
        next(vm=>{
            if (vm&&true) {
                if (vm.$vnode && vm.$vnode.data.keepAlive) {
                    if (vm.$vnode.parent && vm.$vnode.parent.componentInstance && vm.$vnode.parent.componentInstance.cache) {
                        if (vm.$vnode.componentOptions) {
                            var key = vm.$vnode.key == null
                                ? vm.$vnode.componentOptions.Ctor.cid + (vm.$vnode.componentOptions.tag ? `::${vm.$vnode.componentOptions.tag}` : '')
                                : vm.$vnode.key;
                            var cache = vm.$vnode.parent.componentInstance.cache;
                            var keys = vm.$vnode.parent.componentInstance.keys;
                            VM.$zyhCache = cache,VM.$zyhKeys = keys;//赋值 cache和keys 对象路径
                        }
                    }
                }
                // this.$destroy();
            }
        })
    },
});
/********************/
/* eslint-disable no-new */
let VM = new Vue({//vue实例创建
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
//导出全局vue实例
export default VM;
