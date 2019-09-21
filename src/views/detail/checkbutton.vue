<template>
    <span class="check-button" :class="{check:isChecked}">
        <img src='../../assets/img/55.png'>
        </span>
</template>
<script>
export default {
    props:['isChecked'],
    
}
</script>
<style lang="scss" scoped>

.check{
    background:yellow;
}
</style>