<template>
  
    <div class="cart-list">

      <scroll class="content" ref="scroll">
    
               <div >
                     
          <checkbutton @click.native="checkedChange" :isChecked="item.checked"></checkbutton>
                  
                  <img :src="item.image">  
                          <span>{{item.iid}}</span>
                          <div>{{item.count}}</div>
                           
                        
                          </div>
    </scroll>
    </div>

</template>
<script>
import checkbutton from '../detail/checkbutton'
import scroll from '@/components/scroll/scroll'
export default {
  data(){
    return{
      checked:''
    }
  },
  props:['item'],
components:{
    scroll,checkbutton
},
  computed:{
  
   
  },
  activated(){
      console.log('对高度重新刷新')
   this.$refs.scroll.refresh()
  },
methods:{
  checkedChange(){
    this.item.checked=!this.item.checked
  }
}
}
</script>
<style lang="scss" scoped>

.content{
    top:49px;
    bottom:49px;
    position:absolute;
    img{
        width:50%
    }
}
</style>