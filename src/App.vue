<template>
  <div id="app">
   
      <!--replace放在router-link处，禁用浏览器前进后退
          tag可以自定义标签名
     home   1 为了不被销毁加keep-alive
            2 保持原来的位置
          离开时保存一个位置，
          进来时用这个位置设置了keep-alive离开时要取消可以在 deactivated
          取消事件，在没有设置的时候用destroy取消
            
           


          
      -->

<keep-alive exclude="detail">
      <router-view/>
      </keep-alive>
 <maintabar></maintabar>
    
  
  </div>
</template>
<script>
import maintabar from '@/components/tabbar/maintabar'

export default {
  components:{
   maintabar
  }
}
</script>
<style lang="scss">
@import './assets/commen/normalize.css';

</style>
