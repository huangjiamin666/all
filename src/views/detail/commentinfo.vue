<template>
      <div v-if="Object.keys(commentInfo).length !==0" >
            <div >
                <div>用户评价</div><div >更多
                    </div></div>
                    <div><img :src="commentInfo.user.avatar">
                    <span>{{commentInfo.user.uname}}</span>
                    </div>
                    <div>
                        <p>{{commentInfo.content}}</p>
                        <div>
                            <span>{{commentInfo.created|showDate}}</span>
                            <span>{{commentInfo.style}}</span>
                        </div>
                        <div >
                            <img :src="item" v-for="item in commentInfo.images"
                            :key="item">
                            </div>
                    </div></div>
</template>
<script>
import {formatDate} from '../../network/detail'
export default {
    props:['commentInfo'],
    filters:{
           showDate:function(value){
            let date=new Date(value*1000)
            return formatDate(date,'yyyy-MM-dd hh:mm:ss')
        }
    },
    
}
</script>