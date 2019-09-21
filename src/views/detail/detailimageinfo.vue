<template>
    <div v-if="Object.keys(info).length !==0" class="goods-info">
                                    <div class="info-desc clear-fix">
                                        <div class="start">
                                        </div>
                                        <div class="desc">{{info.desc}}</div>
                                        <div class="end"></div></div>
                                        <div class="info-key">{{info.detailImage[0].key}}</div>
                                        <div class="info-list">
                                            <img v-for="(item,index) in info.detailImage[0].list" :key="index"
                                            :src="item" @load="imgload">
                                        </div></div> 
</template>
<script>
export default {
    props:['info'],
    data(){
        return{
            counter:0,
            imagesLength:0
        }
    },
    methods:{
        imgload(){

          //等图片加载完再触发   只回调一次 性能
        if(++this.counter===this.imagesLength)
              {
                    this.$emit('imageLoad')
              }
         
          },
         
    },
   watch:{
       detailInfo(){
           //获取图片的个数 
           this.imagesLength=this.info.detailImage[0].list.imagesLength
       }
   }
}
</script>