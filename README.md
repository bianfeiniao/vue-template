# Vue-cli-template

> A Vue.js project
> 
> 官方vue-cli脚手架自定义模板,加入常用模块

##Including/包含

- **vue**
- **vuex**
- **vue-router**
- **axios** instead of <span style="text-decoration:line-through">vue-resource</span>   
- **sass**

## Build Setup/构建步骤

``` bash
# install dependencies
npm i OR cnpm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

##Content/目录结构
<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build后的目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── views          // 各种页面
│   ├── vuex           // vuex状态管理器
│   ├── filters.js     // 各种过滤器
│   ├── main.js        // Webpack 预编译入口
│   └── router.js      // vue路由的配置
</pre>
