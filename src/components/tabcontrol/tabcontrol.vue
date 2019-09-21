<template>
    <div class="tab-control">
     <div v-for='(item,index) in titles' 
     :key="item.id" class="tab-control-item" 
     :class="{active:index===current}" 
     @click="itemclick(index)">
         <span>{{item}}</span>
     </div>
        </div>
</template>
<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            current:0
        }
    },
    methods:{
        itemclick(index){
            this.current=index;
            this.$emit('tabclick',index)
        }
    }
}
</script>
<style lang="scss" scoped>
.tab-control{
    display:flex;
    text-align:center;
// 下面的可以继承
      height:40px;
        line-height:40px;
        font-size:14px;
        background:#fff;
    .tab-control-item{
        flex:1;
      span{
          padding:10px
      }
    }
}
.active{
    color:pink;
  span{
        border-bottom:3px solid pink;
  }
}
</style>