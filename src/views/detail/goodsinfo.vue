<template>
     <div v-if="Object.keys(goods111).length!==0" class="base-info">
                    <div class="info-title">{{goods111.title}}</div>
                    <div class="info.price">
                        <span class="n-price">{{goods111.newPrice}}</span>
                        <span class="o-price">{{goods111.oldPrice}}</span>
                        <span v-if="goods111.discount" class="discount">{{goods111.discount}}</span>
                    </div>
                    <div class="info-other">
                        <span>{{goods111.columns[2]}}</span>
                        <span>{{goods111.columns[1]}}</span>
                        <span>{{goods111.services[goods111.services.length-1].name}}</span>
                    </div>
                    <div class="info-service">
                        <span class="info-service-item" v-for="index in goods111.services.length-1" :key="index">
                    <img :src="goods111.services[index-1].icon">
                    <span>{{goods111.services[index-1].name}}</span>
                        </span>
                    </div>
                    </div>
</template>
<script>
export default {
    props:['goods111']
}
</script>