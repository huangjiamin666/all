<template>
  
   <div>
      <!--replace放在router-link处，禁用浏览器前进后退
          tag可以自定义标签名
          dom里加别名~
      -->
    
  <tabbar>
     <tabbaritem  path="/home" activeColor="pink">
       <img slot="item-icon" src="@/assets/img/1.png">
        <img slot="item-icon-active" src="@/assets/img/11.png">
       <div slot="item-text">首页</div >
     </tabbaritem>
      <tabbaritem path="/categroy" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/2.png">
          <img slot="item-icon-active" src="@/assets/img/22.png">
       <div  slot="item-text" >分类</div >
      </tabbaritem>
      <tabbaritem  path="/cart" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/3.png">
           <img slot="item-icon-active" src="@/assets/img/33.png">
       <div  slot="item-text" >购物车</div >
      </tabbaritem>
     <tabbaritem path="/profie" activeColor="pink">
       <img slot="item-icon" src="@/assets/img/4.png">
        <img slot="item-icon-active" src="@/assets/img/44.png">
       <div  slot="item-text" >个人</div >
     </tabbaritem>
  </tabbar>
    
  </div>
 
</template>
<script>
import tabbar from './tabbar'
import tabbaritem from './tabbaritem'
export default {
  components:{
    tabbar,
    tabbaritem
  }
}
</script>
<style lang="scss">


</style>
