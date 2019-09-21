import {request} from './require'
export function getDetail(iid){
    return request({
        url:'/api/v1/detail',
        params:{
            iid
        }
    })

  
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.newPrice
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    }
}

export function formatDate(date,fmt){
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1,(date.getFullYear()+"").substr(4-RegExp.$1.length));}
        let o={
            'M+':date.getMonth()+1,
            'd+':date.getDate(),
            'h+':date.getHours(),
            'm+':date.getMinutes(),
            's+':date.getSeconds()
        };
        for(let k in o){
            if(new RegExp(`(${k})`).test(fmt)){
                let str=o[k]+'';
fmt=fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str))
          
}
        }
        return fmt;
    }
function padLeftZero(str){
    return('00'+str).substr(str.length)
}
export function getRecommend(){
    return request({
        url:'/api/v1/recommend'
    })
}

export function debounce(func,delay){
    let timer=null
   return   function(...args){
            if(timer)clearTimeout(timer)
            timer=setTimeout(()=>{
              func.apply(this,args)
            },delay)
          }
  }