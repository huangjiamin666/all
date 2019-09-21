<template>
    <div class="buttom-bar">
<div>
        <checkbutton/>
        <span>全选</span></div>
        <div>合计{{totalprice}}</div>

        <div>
            去计算：{{checklength}}

        </div>
    </div>

</template>
<script>
import checkbutton from '../detail/checkbutton'
export default {
   
    data(){
        return{
            checklength:0,
            totalprice:0
        }
    },
    components:{
        checkbutton
    },
    computer:{
        totalprice(){
            return "$"+ this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue+item.price*item.count
            },0).toFixed(2)
        },
        checklength(){
            return this.$store.state.cartList.filter(item=>item.checked).length
        }
    }
}
</script>
<style lang="scss" scoped>
.buttom-bar{
    height:100px;
    background:red;
  position:relative;
    bottom:-400px;
}
</style>