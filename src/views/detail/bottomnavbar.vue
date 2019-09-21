<template>
    <div class="bottombar">
        <div class="bar-item bar-left">
            <div>
                <span class="text"> 客服</span></div>
                <div>
                <span class="text"> 店铺</span></div>
                <div>
                <span class="text"> 收藏</span></div>
                <div>
                <span class="text" @click="addToCart"> 加入购物车</span></div>
                <div>
                <span class="buy">购买</span>
                </div>
        </div>
        
    </div>
</template>
<script>
export default {
    methods:{
        addToCart(){
            this.$emit('addCart')
        }
    }
}
</script>
<style lang="scss">
.bottombar{
    height:49px;
    background:pink;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
 
}
.bar-item {
    display:flex;
    div{
        flex:1;
        font-size:14px;
      
    
    }
}
</style>