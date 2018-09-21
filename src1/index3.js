import React from 'react';
import {render} from 'react-dom';

// 什么叫组件 组件是干什么的?
// 组件的目的就是1.复用  2.方便维护 3.提高工作效率
// react 声明组件的方式 函数声明(还叫函数) 类声明
//  组件的特点 首字母大写
// 函数声明缺点 1.没有this   2.没有状态  3.没有生命周期
// 类组件:1.有this   2.有状态  3.有生命周期



// function build(title,content){
//     return (
//         <div>
//             <div>{title}</div>
//             <div>{content}</div>
//         </div>
//     )
// }// 函数声明 变成组件 把函数名变为首字母大写
// render(build('标题','内容'),window.root);

// function Build(props){
//     return (
//         <div>
//             <div>{props.title}</div>
//             <div>{props.content}</div>
//         </div>
//     )
// }

function Build(props){
    let {title,content} = props;//一般解构出来 下面直接就是title和content
    return (
        <div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}
render(<div>
    <Build title="1" content="1xxx"></Build>
    <Build title="2" content="2xxx"></Build>
    <Build title="3" content="3xxx"></Build>
</div>,window.root);
//调用组件可以直接<Build></Build>  通过属性传参


//写个时钟
// render是有优化机制的 只更新数据有变化的
function Clock(props){
    return <div>呵呵：<span>{props.time}</span></div>
}
setInterval(()=>{
    render(<Clock time={new Date().toLocaleString()} />,window.root);
},1000);
//render(<Clock>123</Clock>,window.root);//和下面的区别就是一个可以写值 一个不可以
// 这样不能自己动 需要每隔一秒传一次  想要自己动 这种组件就不适合了  可以用类组件