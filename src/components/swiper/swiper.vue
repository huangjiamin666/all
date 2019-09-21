<template>
<div>
       <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key   计算表达式要加v-bind  (:)-->
      <mt-swipe-item v-for="item in parentmsg" :key="item.id">
       <a :href="item.link"> <img :src="item.image" alt="" @load='imageload'></a>
      
      </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
export default {
props:["parentmsg"],
data(){
  return{
    isload:false
  }
},
methods:{
  imageload(){
    //只调用一次，考虑到性能
    if(!this.isload){
     this.$emit('swiperimageload')
     return this.isload=true
    }
    
  }
}
}
</script>

<style lang="scss">
.mint-swipe {
  height: 200px;

  

    img {
      width: 100%;
      height: 100%;
   
  }

  
}
.mint-swipe-indicator.is-active{
  background:red !important;
}
</style>
