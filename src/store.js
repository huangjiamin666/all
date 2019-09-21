import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       cartList:[]
  },
  mutations: {
              //mutations唯一的目的就是修改state中状态
              //mutations中的每个方法尽可能做到单一
          addCounter(state,payload){
            payload.count++
          },
          addToCart(state,payload){
            payload.checked=true
          state.cartList.push(payload)
          }
  },
  actions: {
          addCart(context,payload){
            //payload新添加的商品'
            //查找之前数组中是否有该商品
            let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
            //判断oldproduct
            if(oldProduct){
            // oldProduct.count+=1
            context.commit('addCounter',oldProduct)
              }else{
              payload.count=1
              //context.state.cartList.push(payload)
              context.commit('addToCart',payload)
            }
          }
  },
  getters:{
            cartLength(state){
              return  state.cartList.length
            },
            cartList(state){
              return state.cartList
            }
  }
})
