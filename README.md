## src 下的App.js  里面放主的组件
## 默认情况下 运行的是src 下的 index.js文件  把这个文件作为入口打包到项目里

## npm install prop-types 验证属性的包

##  属性和状态区别 属性是别人给的 状态是自己的

## 非受控可以操作dom

## Context Api

## key 不能作为属性传递给子元素


## 路由
- 通过不同的路径  返回不同的内容
- res.setHeader('Location','pathname');  后端跳转

## 路径变了 改变对应的内容

- 组件（spa） 点击切换组件
- 路径改变 （hash的方式 hash路径） 想让路径变 不跳页面 hash最合适 有#号
- h5的api pushState 没有#号   开发选择hash的 也可以pushState， 上线肯定选pushState（onhashchange）
- 在create-react-app中使用h5的api没有问题(里面用了webpack插件 history-fallback)

## 路由4.0
- yarn add react-router-dom