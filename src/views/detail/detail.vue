<template>
    <div id="detail">
       <navdetail class="navbar" @titleClick="titleClick" ref="nav">
        </navdetail>
            <!--属性：topImages 传入值：top-images-->
            <scroll class="content" ref="scroll" @scroll="contentScroll">    
             <swiper1 :parentmsg="topImages"></swiper1>
               <goodsinfo :goods111="goodsinfo1"/>
                    <!--创建店铺信息-->
                 <shopinfo :shop="shop"/>
<detailimageinfo :info="detailInfo" @imageLoad="imageload"/>
<params ref="params" :paramInfo="paramInfo"/>
<commentinfo ref="comment" :commentInfo="commentInfo"/>
<goodslist1 ref="recommend" :goods="recommends"></goodslist1>
           </scroll>
            <backtop @click.native="backclick" v-show="isshow"></backtop>
           <bottomnavbar @addCart="addToCart11"/>
        </div>



</template>
<script>
import bottomnavbar from './bottomnavbar'
import {detaillister,backTopMixin} from './mixin'
import commentinfo from './commentinfo'
import params from './params'
import detailimageinfo from './detailimageinfo'
import shopinfo from './shopinfo'
import goodsinfo from './goodsinfo'
import navdetail from './navdetail'
import {getDetail,Goods,getRecommend} from '../../network/detail'
import swiper1 from '../../components/swiper/swiper1'
import scroll from '@/components/scroll/scroll'
import goodslist from '@/components/goods/goodslist'
import goodslist1 from '@/components/goods/goodslist1'

export default {
    data(){
        return{
            iid:this.$route.params.iid,
            titles:['商品','参数','评论','推荐'],
            currentindex:0,
            topImages:[],
            goodsinfo1:[],
            shop:{},
            detailInfo:{},
            counter:0,
            imagesLength:0,
            paramInfo:{},
            commentInfo:{},
           recommends:[],
          // detaillister:null,
           themeTopYs:[],
           getThemeTopY:null,
           currentIndex:''
        }
    },
    mixins:[detaillister,backTopMixin],
    created(){
        //根据iid请求详情数据
      getDetail(this.iid).then(res=>{
      // console.log(res);
       //获取顶部轮播图数据
       const data=res.result
       this.topImages=data.itemInfo.topImages
   //获取商品信息
   this.goodsinfo1=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
  //创建店铺信息
 this.shop=data.shopInfo
 //商品详细信息
 this.detailInfo=data.detailInfo
 //获取参数信息
 this.paramInfo=data.itemParams.info
//评论信息
if(data.rate.cRate !==0){
    this.commentInfo=data.rate.list[0]
}
//渲染完执行这个函数
/*this.$nextTick(()=>{
    //根据最新的数据，对应的dom是已经渲染出来的
    //但是图片依然是没有价值完（目前获取到的offsettop不包含其中的图片）
    //offstop不对时，一般都是因为图片的问题
this.themeTopYs=[]
   this.themeTopYs.push(0)
   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
   console.log(this.themeTopYs)
  })*/
})

  getRecommend().then(res=>{
    // console.log(res.data.list)
     this.recommends=res.data.list
  })
  //给getThemeopY赋值、、debounce是防抖函数
  this.getThemeTopY=this.debounce(()=>{
      this.themeTopYs=[]
   this.themeTopYs.push(0)
   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    this.themeTopYs.push(Number.MAX_VALUE)
   console.log(this.themeTopYs)
  },1000)
    },
     /* mounted(){
    //图片加载完成的事件监听
     const refresh=this.debounce(this.$refs.scroll.refresh,1000)
  this.detaillister=()=>{
       console.log("11")
        refresh()
      // this.$refs.scroll.refresh()
      }
         this.$bus.$on('itemimageload',this.detaillister)
  },*/
  destroyed(){
      this.$bus.$off('itemimageload',this.detaillister)
  },
  mounted(){
  
  },
  updated(){
      /*this.themeTopYs=[]
   this.themeTopYs.push(0)
   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
   console.log(this.themeTopYs)*/
  
  },
    methods:{
        titleClick(index){
           // console.log(index)
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
        },
        //防止图片请求速度太快，防抖函数
      imageload(){
          this.$refs.scroll.refresh()
          this.getThemeTopY()
         //  console.log( this.getThemeTopY())
      },
     debounce(func,delay){
    let timer=null
   return   function(...args){
            if(timer)clearTimeout(timer)
            timer=setTimeout(()=>{
              func.apply(this,args)
            },delay)
          }
  },
  contentScroll(position){
      //获取y值
if((-position.y)>1000){
    this.isshow=true
  } else{
    this.isshow=false
  }

      const positionY=-position.y
      //
      let length=this.themeTopYs.length
      for(let i=0;i<length-1;i++){
         // console.log(i)
    if(this.currentIndex!==i&&(positionY>=this.themeTopYs[i]&&
    positionY<this.themeTopYs[i+1])){
       this.currentIndex=i
       this.$refs.nav.currentIndex=this.currentIndex
    }
      }
     
  },
  addToCart11(){
 //获取购物车需哟啊展示的信息
 const product={}
 product.image=this.topImages[0]

product.iid=this.iid;

//将商品添加到购物车 使用vuex中保存的数据
this.$store.dispatch('addCart',product)
console.log(product)


  }
    },
    
    components:{
        navdetail,swiper1,scroll,goodslist,goodsinfo,shopinfo,detailimageinfo,params,commentinfo,
        goodslist1,bottomnavbar
    }
}
</script>
<style lang="scss" scoped>
#detail{
    background:#fff;
    position:relative;
    z-index: 999;
    height:100vh
}
.content{
  position:absolute;
  top:44px;
  bottom:70px;
  left:0;
  right:0;
  overflow:hidden;}

.info-title{
    color:#222;
}
.info-price{
    margin-top:10px;
}
.info-price .info-price{
    font-size:12px;
    color:red;
}
.info-price .o-price{
    font-size:13px;
    margin-left:5px;
    text-decoration:line-through;
}
.base-info{
margin-top:15px;
padding:0 8px;
color:#999;
border-bottom:5px solid #f2f5f8;
}
.info-price .discount{
    font-size:12px;
    padding:2px 5px;
    color:#fff;
    background:red;
    border-radius:8px;
    margin-left:5px;
    position:relative;
    top:-8px;
}
.info-other{
    margin-top:15px;
    line-height:30px;
    display:flex;
    font-size:13px;
    border-bottom:1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}
.info-service-item img{
    width:14px;
    height:14px;
    position:relative;
    top:2px;

}
.info-service-item span{
    font-size:13px;
    color:#333;
   

}
.navbar{
    position:relative;
    z-index:9;
    background:#fff;
}
</style>