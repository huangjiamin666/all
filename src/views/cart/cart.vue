<template>
  <div class="cart">
    <!--导航-->
<navbar class="navbar">
  <div slot="center">购物车({{cartLength}})</div>
</navbar>
<!--商品列表-->
<cartlist 
v-for="(item,index) in cartList" :key="index" :item="item"
/>
<!--底部汇总-->
<cartbuttonbar/>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '../../components/navbar/navbar'
import cartlist from './cartlist'
import {mapGetters} from 'vuex'
import cartbuttonbar from './cartbuttonbar'
export default {
  name: 'cart',
  components: {
    HelloWorld,navbar,cartlist,cartbuttonbar
  },
  computed:{
    cartLength(){
      return this.$store.getters.cartLength
    },
     cartList(){
      return this.$store.getters.cartList
    }
  }
}
</script>
<style lang="scss" scoped>
.cart{
  height:100vh;
  position:relative;
}
.navbar{
  background:pink;
  position:fixed;
  left:0;
  right:0;
  z-index:99
}
</style>
