import {debounce}from '../../network/detail'
export const detaillister={
    data(){
        return{
            detaillister:null,
        }
    },
    components:{

    },
    methods:{

    },
    mounted(){
        //图片加载完成的事件监听
         const refresh=this.debounce(this.$refs.scroll.refresh,1000)
      this.detaillister=()=>{
      //     console.log("混入了")
            refresh()
          // this.$refs.scroll.refresh()
          }
           
      }
}




import backtop from '@/components/backtop/backtop'
export const backTopMixin={
    components:{
        backtop
    },
    data(){
        return{
            isshow:false,
        }
    },
    methods:{
        backclick(){
            //this.$refs.scroll  拿到组件对象
         this.$refs.scroll.scrollTo(0,0,500)
          }
    }
}