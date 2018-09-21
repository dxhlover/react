//react 好处api少 vue 大量api

//React 负责生成组件  ReactDom 负责渲染
//let React = require('react'); node引入 以前的写法
//import React from 'react'; //React大写规定好的 es6语法 import引入
// import ReactDOM from 'react-dom';
//
// //react 特点是语法 jsx javascript + xml
//
// let h1 = <h1 name="zfpx">hello,word</h1>;
// //ReactDOM.render(h1,document.getElementById('root'));//public 下的html里面的root
// console.log(h1);//用来描述节点的对象  虚拟dom(就是用对象描述解构)
// ReactDOM.render(h1,window.root);//也可以这样写

let React = {
    // createElement(type,props,children1,children2...){
    //     console.log(arguments);
    //     return {type,props,children1,children2...}; //vnode(虚拟dom,虚拟节点)
    // }
    createElement(type,props,...children){
        console.log(arguments);
        return {type,props,children}; //vnode
    }
};
//React.createElement('h1',{name:'zfpx'},'hello');
let el = <h1 name="zfpx">hello<span>word</span></h1>//这个和上面那个等价的 上面的比较难写 所以开发了一个这样的语法糖  通过babel转译成上面的

console.log(el);
function render(vnode,container){//vnode代表元素 虚拟dom  container代码容器
    if(typeof vnode==='string') return container.appendChild(document.createTextNode(vnode));
    let {type,props,children} = vnode;
    let tag = document.createElement(type);
    for(let key in props){
        tag.setAttribute(key,props[key]);
    }
    children.forEach(child =>{
        render(child,tag);
    })
    container.appendChild(tag);
};

render(el,window.root);