<template>
       <div class="shop-info">
                        <div class="shop-top">
                            <img :src="shop.shopLogo">
                            <span class="title">{{shop.name}}</span>
                        </div>
                        <div class="shop-middle">
                            <div class="shop-middle-item shop-middle-left">
                                <div class="info-sells">
                                    <div class="sells-count">
                                        {{shop.cSells|sellCountFilter}}
                                    </div>
                                    <div class="sells-text">总销量</div>
                                </div>
                                <div class="info-goods">
                                    <div class="goods-count">
                                        {{shop.cGoods}}
                                    </div>
                                    <div class="goods-text">全部宝贝</div>
                                </div>
                            </div>
                            <div class="shop-middle-item shop-middle-right">
                                <table>
                                    <tr v-for="(item,index) in shop.score" :key="index">
                                        <td>{{item.name}}</td>
                                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                                        <td class="better" :class="{'better-more':item.isBetter}">
                                            <span>{{item.isBetterk?'高':'低'}}</span></td>
                                    </tr>
                                </table>
                            </div></div>
                            <div class="shop-bottom">
                                <div class="enter-shop">进店逛逛</div></div>
                                </div>
</template>
<script>

export default {
    props:['shop'],
    filters:{
   
           sellCountFilter:function(value){
            if(value<10000) return value;
            return (value/10000).toFixed(1)+'万'
        }
    }
}

</script>