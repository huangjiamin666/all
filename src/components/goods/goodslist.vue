<template>
    <div class="goods">
        <router-link class="goods-item" v-for="item in goods" :key="item.id" :to="'/detail/'+item.iid">
        
         <img :src="item.show.img" @load="imageload">
         <p>{{item.title}}</p>
         <span class="price">{{item.price}}</span>
         <span class="collect">{{item.cfav}}</span>
        
         </router-link >
      
    </div>
</template>
<script>

export default {
    data(){
        return{
          
        }
    },
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }

        }
    },
  /*  computed:{
    showImage(){
        return this.item.image||this.item.show.img
    }
    }*/
    methods:{
        //解决首页中可滚动区域的问题
        //原生监听图片加载img.onload=function(){}
        //vue  @load      
        //发射
        imageload(){
         this.$bus.$emit('itemimageload')
        }
    }
}
</script>
<style lang="scss" scoped>
.goods{
    display: flex;
	flex-wrap: wrap;
     //均等分
    justify-content: space-between;
    
   // padding-bottom:50px;
  .goods-item{
      //width:49%
      width:30%;
      border:1px solid #ccc;
     // box-shadow:0 0 8px #ccc;
     margin:3px 0;
    font-size:12px;
     display:flex;
     //改变主轴的方向为y轴  align-items:center;纵向居中
     flex-direction:column;
     justify-content: space-around;
     min-height:290px;
      img{
          width:100%;
          margin:0;
          padding:0;
      }
}
}










.aaa{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    //文本超过部分显示、、、、nowrap 所有的东西放在一行
}
</style>