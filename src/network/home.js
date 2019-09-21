//为什么用{}，因为没有default 导出
import{request} from './require'
export function getHomeMultidata(){
    return request({
        url:'/api/v1/home/multidata'
    })
} 
export function getHomeGoods(type,page){
    return request({
        url:'/api/v1/home/data',
        params:{
            type,
            page
        }
    })
}