import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    //数据保存
    state: {
        username: sessionStorage.getItem('username'),
        list: [1, 5, 8, 10, 30, 50]
    },
    mutations: {
        increase(state, n = 1) {
            state.count += n;
        },
        decrease(state, n = 1) {
            state.count -= n;
        },
        setusername(state, value){
        	sessionStorage.setItem('username',value);
        	state.username = value;
        }
    },
    getters: {
    	filterusername: state => {
    		if(state.username == '' || state.username == null){
    			state.username = '未登录'
    		}
            return state.username;
       },
        filteredList: state => {
            return state.list.filter(item => item < 10);
        }
    },
    actions:{
        asyncIncrease(context){
            //异步 1s后执行
            return new Promise(resolve=>{
                setTimeout(()=>{
                    context.commit('increase');
                    //Promise 的一种状态Resolved（已完成）
                    resolve();
                },1000)
            })
        }
    }
});
