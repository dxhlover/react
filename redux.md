## redux  组件数据的传递  父子组件通信 靠的就是属性  跨组件交互用Context Api
## 平级组件交互 兄弟组件(需要找到共同的父级) redux的方式 统一资源状态管理(解决组件间数据的传递的问题)

## 流程 store > state > getState > 在组件中发布一个action > reducer管理员 > 更改状态
-- 先要有个容器store，容器里面放着状态state(对象或者数组,就是数据)，所有组件都可以调用状态getState
-- 在组件中不可以直接更改状态，可以通过在组件中发布一个action发送给管理员reducer进行更改

--store.subscribe() 接收的参数是一个函数，每次 state 改变的时候会执行一次这个函数。而不是组件。