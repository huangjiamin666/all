<template>
<!--

  代码组织
  业务逻辑（不要立即动手）
  处理bug
-->
  <div class="home" >
 <navbar class="homw-nav"><div slot="center">购物街</div></navbar>
 <tabcontrol 
   ref="tabtop1" 
   :titles="['流行','新款','精选']"
    @tabclick="tabclick"
    class="tab-control"
    v-show="isTabfixed"
   ></tabcontrol>
<scroll class="content" 
@scroll="contentscroll" 
ref="scroll" 
:probe-type="3"
@pullingUp="loadmore"
:pull-up-load='true'
>
     <swiper :parentmsg="banner" @swiperimageload="swiperimageload"></swiper>
   <recommend :recommends="recommends"></recommend>
   <recommend :recommends="recommends"></recommend>
   <recommend :recommends="recommends"></recommend>
   <recommend :recommends="recommends"></recommend>
<recommend :recommends="recommends"></recommend>
   <recommend :recommends="recommends"></recommend>
   <tabcontrol 
   ref="tabtop2" 
   :titles="['流行','新款','精选']"
    @tabclick="tabclick"
   ></tabcontrol>
 <goodslist :goods="goods[currentType].list"></goodslist>
 </scroll>
 <!--监听组件的点击必须加native-->
  <backtop @click.native="backclick" v-show="isshow"></backtop>

</div>
</template>

<script>
/* @ is an alias to /src 安装better-scroll解决移动端滚动


npm install better-scroll --save


*/
//为什么用{}，因为没有default 导出
import {
  getHomeMultidata,
getHomeGoods
} from '@/network/home'
import scroll from '@/components/scroll/scroll'
import HelloWorld from '@/components/HelloWorld'
import navbar from '@/components/navbar/navbar'
import swiper from '@/components/swiper/swiper'
import recommend from './recommend'
import tabcontrol from '@/components/tabcontrol/tabcontrol'
import goodslist from '@/components/goods/goodslist'
//import backtop from '@/components/backtop/backtop'
import { setTimeout } from 'timers';
import {detaillister,backTopMixin} from '../detail/mixin'
export default {
    components: {
    HelloWorld,navbar,swiper,recommend,tabcontrol,goodslist,scroll,
    //backtop
  },
  data(){
  return{
    banner:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    //isshow:false,
    taboffsettop:0,
    isTabfixed:false,
    saveY:0,
    //detaillister:null,
  }
  },
destroyed(){
  console.log('home destroyed')
},
//进来
activated(){
 // console.log(this.saveY)
 this.$refs.scroll.scrollTo(0,this.saveY,500)

 this.$refs.scroll.refresh()

},
//离开
deactivated(){
  //保存y值
this.saveY=this.$refs.scroll.getScrollY()
//取消全局函数的监听
this.$bus.$off('itemimageload',this.homelister)
},
  mixins:[detaillister,backTopMixin],
  mounted(){
    //图片加载完成的事件监听 防抖
     const refresh111=this.debounce(this.$refs.scroll.refresh,1000)
  this.homelister=()=>{
        refresh111()
      this.$refs.scroll.refresh()
      }
         this.$bus.$on('itemimageload',this.homelister)
//  this.$bus.$on('itemimageload',()=>{     
//          refresh111()
//        })

// //这种调用太频繁
//  this.$bus.$on("itemimageload",()=>{
//         console.log("1111")
//         this.$refs.scroll.refresh()
//       })

  },
  
  created(){
    
    //1.请求多个数据
    this.getHomeMultidata()
     //2.请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
      //监听item中图片加载完成
      //接收   但是不要在这里  因为created里数据可能还没有渲染
      // this.$bus.$on("itemimageload",()=>{
      //   console.log("1111")
      //   this.$refs.scroll.refresh()
      // })
  },
  methods:{
  //防止图片请求速度太快，防抖函数
  debounce(func,delay){
    let timer=null
   return   function(...args){
            if(timer)clearTimeout(timer)
            timer=setTimeout(()=>{
              func.apply(this,args)
            },delay)
          }
  },
     /**事件监听 获取到子组件传过来的index*/
     tabclick(index){
       switch(index){
         case 0:
           this.currentType="pop"
           break;
           case 1:
             this.currentType="new"
              break;
             case 2:
               this.currentType="sell"
                break;
       }
       this.$refs.tabtop1.current=index;
        this.$refs.tabtop2.current=index;
     },
 backclick(){
     //this.$refs.scroll  拿到组件对象
  this.$refs.scroll.scrollTo(0,0,500)
   },
   //切换返回顶部按钮
 contentscroll(position){
   //判断返回顶部按钮是否显示
  if((-position.y)>1000){
    this.isshow=true
  } else{
    this.isshow=false
  }
  //决定tabcontrol是否吸顶 (-position.y> this.taboffsettop)此处为true
 this.isTabfixed=(-position.y> this.taboffsettop)
 },
 swiperimageload(){
    //获取tabcontral的offsettop属性
      //所有的组件都有一个$el,用于获取组件中的元素
      //console.log(this.$refs.tabtop.$el.offsetTop)
      this.taboffsettop=this.$refs.tabtop2.$el.offsetTop
  
 },
 //加载图片
 loadmore(){
 this.getHomeGoods(this.currentType)
  //this.$refs.scroll.refresh()
 },
    /**调用网络请求 */
    getHomeMultidata(){
       /**网络请求 */
          getHomeMultidata().then(res=>{
   //    console.log(res.data)
       this.banner=res.data.banner.list;
       this.recommends=res.data.recommend.list;
     })
    },
    //请求商品数据
    getHomeGoods(type){
      const page=this.goods[type].page+1
          getHomeGoods(type,page).then(res=>{
           // console.log(res)
            this.goods[type].list.push(...res.data.list)
            //把data中的数组依次取出放到goods[type].list中
           
           this.goods[type].page+=1
            //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
     })
    }

  }
}
</script>
<style lang="scss" scoped>
.home{
  //padding-top:44px;
  //视f口高度
  height:100vh;
  position:relative;
}
.homw-nav{
  color:#fff;
  background:pink;

/*在使用浏览器原生滚动时，为了让导航不跟着一起滚动
position:fixed;
left:0;
right:0;
top:0;
z-index:9*/
}
/*
到达一定高度后固定导航的类ie不兼容
.tabcontral{
  position:sticky;
  top:44px;
  z-index:9
}*/
//1
.content{
  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
  overflow:hidden;
}
//2
/*
.content{
  height:calc(100%,-93px);
  overflow:hidden;
  margin-top:44px;}*/
  .fixed{
    top:44px;
    left:0;
    right:0;
    position:fixed;
  }
  .tab-control{
    position: relative;
    z-index: 9;
    top:-1px;
  }
</style>
