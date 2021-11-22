<template>
<div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
    <h4>我是{{name}}，我在学习{{subject}}</h4>
    <h4 style="color:red">下方组件的总人数是：{{personList.length}}</h4>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">求和为奇数时加</button>
    <button @click="incrementWait(n)">等一等再加</button>
</div>

</template>

<script>
//引入
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1  //用户选择的数字
            
        }
    },
    methods: {
        /*
        利用mapMutations
        increment(){
            //this.$store.dispatch('jia',this.n)   不需要进行什么操作，可以直接由vc到mutation
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            //this.$store.dispatch('jian',this.n)
            this.$store.commit('JIAN',this.n)
        },*/
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        /*利用mapActions 
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        }
        */
       ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
    computed:{
        /*对象写法，编译器自动生成计算属性sum为$store.state.sum */
        ...mapState({sum:'sum',name:'name',subject:'subject',personList:'personList'}),
        //即sum(){
            //return this.$store.state.sum
        //}
        /*数组写法，只能用state中的名字 */
        //...mapState['sum','name','subject']

        ...mapGetters({bigSum:'bigSum'}),
    }
}
</script>

<style>
button{
    margin-left:5px
}
</style>