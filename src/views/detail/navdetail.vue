<template>
    <div class="nav">
           <span slot="left" @click='backclick'> 《</span>
           <span slot="center" class="title">
           <span class="title-item" v-for="(item,index) in titles"
            :key="item.id"
            :class="{active:index===currentIndex}"
            @click="titleClick(index)">{{item}}</span></span>
        </div>
</template>
<script>
import navbar from '../../components/navbar/navbar'
export default {
    components:{
        navbar,
    },
data(){
    return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
    }
},
methods:{
    titleClick(index){
        this.currentIndex=index;
        this.$emit('titleClick',index);
    },
    backclick(){
        this.$router.go(-1)
    }
}
}
</script>
<style lang="scss" scoped>
.nav{
    margin-top:20px
}
span{
    padding-left:30px;
   
}
title{
    display:flex;
    font-size:12px;
}
.title-item{
    flex:1;
}
.active{
    color:pink;
}
</style>