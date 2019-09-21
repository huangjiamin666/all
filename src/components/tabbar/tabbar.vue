<template>

      <!--replace放在router-link处，禁用浏览器前进后退
          tag可以自定义标签名
      -->
    <div id="tab-bar">
        <slot></slot>
     
    </div>

</template>

<style lang="scss">
#tab-bar{
  display:flex;
  background:#f6f6f6;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow: 0 -1px  1px rgba(100,100,100,.1);
}
</style>
