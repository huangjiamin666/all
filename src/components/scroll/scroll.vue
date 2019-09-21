<template>
<!--ref一般绑定到子组件
 ref 如果是绑定在组件上的，那么可以通过 this.$refs.refname 获取到这个组件对象
-->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            scroll:null
        }
    },
    props:{
     probeType:{
         type:Number,
         default:0
     },
        pullUpLoad:{
         type:Boolean,
         default:false
     }
    },
    mounted(){
        //创建bscroll对象
        this.scroll=new BScroll(this.$refs.wrapper,{
        //控制内部div等是否可以点击
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
        })
       //监听滚动的位置
       this.scroll.on('scroll',(position)=>{
         //  console.log(position)
           this.$emit('scroll',position)
       })
     //监听scroll滚动到底部
    //  if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
             this.$emit('pullingUp')
             //console.log("111")
          })
     // }
    },
    methods:{
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,500)
        },
        //执行这个方法才能多次下拉加载 
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
            console.log('-----hahaha-----')
            this.scroll.refresh()
        },
       getScrollY(){
           return this.scroll?this.scroll.y:this.scroll.y
       }
    }
}
</script>
<style lang="less" scoped>

</style>