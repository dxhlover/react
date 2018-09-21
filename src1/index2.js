import React from 'react';//React 必须大写
// import reactDOM from 'react-dom';//reactDom 可以随便写 因为是用里面的render等方法 reactDOM.render
// reactDOM.render(<h1>helloword</h1>,window.root);

import {render} from 'react-dom';//可以这样写 reactDOM是一个对象 可以解构写

//jsx语法  javascript + xml
//jsx 有一些不一样的熟悉 class for style dangerouslyInnerHML(会导致xss攻击)
//class => className  for =>htmlFor

//let el = <div></div><span></span>  这样不可以 渲染只能渲染一个 必须有个根元素  得包裹在根元素内
// let el =
//     <div>
//         <h1>hello</h1>
//         <span>word</span>
//     </div>//这样写不会报错 但是一般这样写的话 外面加个()
// let el = <div>
//         <h1>hello</h1>
//         <span>word</span>
//     </div> //这样写也可以

//jsx元素(或者叫react元素) 用<号标识  看到{ 会认为里面装的是js代码
let str='<h1>love</h1>';
let el =(
    <div>
        <h1>hello</h1>
        <span>word</span>
        <label htmlFor='username' >用户名：</label>
        <input type='text' id='username' />
        <div style={{color:'red'}}>hello</div>
        {/*
            注释这样 用{}  style 用 双个{{}}  {}里面的{color:'red'}是js
        */}
        <div>{str}</div>
        {/*
            str是js 用{}包起来 把js的值取出来   显示到页面上是 <h1>love</h1>
        */}

        <div dangerouslySetInnerHTML={{__html:str}}></div>
        {/*
            danerouslyInnerHTML 把带标签的显示成正常的不带标签的 不常用 危险
            注意__html是两个_
        */}
        {/*
            {}叫取值表达式  可以把返回值显示到页面上 相当于vue中的{{}}
        */}
    </div>
);//一般都这样写 加个()

//React.Fragment起到包裹的作用 无别的意义
// null 和void 0 功能一样
let str1 = 'hello';
function a(){
    return <h1>hello</h1>;
}
let obj = {a:1};
let el1 = (
    <React.Fragment>
        <div>{str1}</div>
        <div>{a()}</div>{/*方法的话必须有返回值*/}
        <div>{JSON.stringify(obj)}</div> {/*不能直接渲染对象 可以转化为字符串*/}
        <div>{true?<span>你好</span>:null}</div>
        <div>{false?<span>你好</span>:void 0}</div>{/*三元 判断*/}
        </React.Fragment>
)
// 用一个div包起来多了一层 而且会占用空间 可以用<React.Fragment></React.Fragment>包起来 碎片 在页面上不会生成div 不占用空间

//循环 用map  不能用forEach  forEach没有返回值
// key 的要求 最好不要用数组的索引 最好用id 这里没有id 用索引
// key 是给每个li起了个号 再添加li时不会全部重新渲染 变更时根据key变更  dom-diff 会去比对
let arr = [1,2,3];
let el2 = (
    arr.map((item,index) =>{
        return <li key={index}>{item}</li>
    })
)
render(el2,window.root);//引入用{render}方式写  渲染时render前面就不用加reactDOM了