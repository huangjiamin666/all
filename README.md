# shangcheng

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1 划分目录
2 在app.vue里引入第三方css
3 vue.config.js文件 配置别名
4 项目模块划分

在父组件中拿不到子组件中的元素，通过$el拿
所有的组件都有一个$el,用于获取组件中的元素

 <!--监听组件的点击必须加native-->
 created只是挂载模板，一般的元素，渲染等在mounted中执行