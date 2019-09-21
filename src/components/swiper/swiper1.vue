<template>
<div>
       <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key   计算表达式要加v-bind  (:)-->
      <mt-swipe-item v-for="item in parentmsg" :key="item.id">
      <img :src="item" alt="">
      
      </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
export default {
props:["parentmsg"],
data(){
  return{
   
  }
},
methods:{

}
}
</script>

<style lang="scss" scopedSlots>
.mint-swipe {
  height: 900px;

  

    img {
      width: 100%;
      height: 100%;
   
  }

  
}
.mint-swipe-indicator.is-active{
  background:red !important;
}
</style>
