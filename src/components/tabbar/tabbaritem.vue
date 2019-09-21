<template>
<div class="tab-bar-item" @click="itemclick">

<div v-if="!isactive" ><slot name="item-icon"></slot></div>
<div  v-else ><slot name="item-icon-active"></slot></div>
<div :style="activeStyle" ><slot name="item-text"></slot></div>
<!--<div :class="{active:isactive}" ><slot name="item-text"></slot></div>-->
<!--
    
    <slot v-if="!isactive" name="item-icon"></slot><
<slot v-else name="item-icon-active"></slot>
    <slot :class="{active:isactive}" name="item-text"></slot>
text替换过来直接覆盖插槽，所以包在div内，因为颜色能继承

给插槽包装一层div
-->
</div>
     
</template>
<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
           //isactive:true
        }
    },
    methods:{
        itemclick(){
            //this.$router.replace() 禁用浏览器中的前进后退
            this.$router.push(this.path)
        }
    },
    computed:{
        isactive(){
            return this.$route.path.indexOf(this.path)!=-1
        },
        activeStyle(){
            return this.isactive?{color:this.activeColor}:{}
        }
    }
}
</script>
<style lang="scss" scoped>
  .tab-bar-item{
   flex:1;
    text-align:center;
    height:49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      margin-top:3px;
      vertical-align:middle;//去除图片默认3像素
      
  }
  //.active{
     // color:red;
 // }
</style>