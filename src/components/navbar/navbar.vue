<template>
    <div class="nav-bar">
        <!--若给定样式，插槽要用div包起来-->
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"> </slot></div>
        <div class="right"><slot name="right"></slot></div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.nav-bar{
    display:flex;
    line-height:44px;
    height:44px;
    text-align:center;
    box-shadow: 1px 1px rgba(100,100,100,0.5);
}
.left,.right{
    width:60px;
   // background:red;
}
.center{
    flex:1;
   // background:blue
}
</style>