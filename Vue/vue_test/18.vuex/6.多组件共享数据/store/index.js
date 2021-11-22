import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex)
const actions = {  //用于响应组件中的动作
    jia(context,value){
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}  
const mutations = {  //用于操作数据
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    Add_Person(state,value){
        state.personList.unshift(value)
    }
}  
const state = {  //用于存储数据
    sum:0,  //求和
    name:'YeChan',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}  
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
}) 