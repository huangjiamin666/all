<template>

<!--wrapper里面只能有一个元素-->
  <div class="wrapper" ref="aaa">
 <ul class="content">
   <li>1111</li>
      <li>1111</li>
         <li>1111</li>
            <li>1111</li>
               <li>1111</li>
                  <li>1111</li>
                     <li>1111</li>
                        <li>1111</li>
                           <li>1111</li>

                              <li>1111</li>
                                 <li>1111</li>
                                    <li>1111</li>
                                       <li>1111</li>   <li>1111</li>   <li>1111</li>   <li>1111</li>   <li>1111</li>
                                          <li>1111</li>
                                             <li>1111</li>

                                                <li>1111</li>

                                                   <li>1111</li>
                                                      <li>1111</li>
                                                         <li>1111</li>
                                                            <li>1111</li>
                                                               <li>1111</li>
                                                                  <li>1111</li>
                                                                     <li>1111</li>
                                                                        <li>1111</li>
                                                                           <li>1111</li>
                                                                              <li>1111</li>
                                                                                 <li>1111</li>
                                                                                    <li>1111</li>
                                                                                       <li>1111</li>
                                                                                          <li>1111</li>
                                                                                             <li>1111</li>
                                                                                                <li>1111</li>
                                                                                                   <li>1111</li>
 </ul>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BScroll from 'better-scroll'
export default {
  name: 'home',
  components: {
    HelloWorld
  },

  //created  组价创建完没有来得及渲染，拿不到东西
  //mounted 挂载完成，可以拿到
  mounted(){
     //默认是不可以实时监听滚动位置，要监听位置必须增加
     //probeType=3 实时侦测
   this.scroll= new BScroll(this.$refs.aaa,{
    probeType:3,
    pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
    console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
      console.log('啊啊啊啊');
    })
  },
  data(){
    return{
    scroll:null//定义变量，确认不被销毁
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  height:150px;
  background:red;

}
</style>
