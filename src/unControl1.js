//受控组件 非受控组件
// 输入框获取值:非受控组件:操作dom 很方便
//受控组件 受状态控制  很快的进行校验 默认值操作 缺点 受状态控制


import React,{Component} from 'react';
import {render} from 'react-dom';
// react 一般都是操作数据
// 16.3的api  React.createRef  1.方便 2可以和一些第三方库结合使用
class UnControl1 extends Component{
    b=React.createRef();
    handleClick = () =>{
        alert(this.a.value);//写法1
        alert(this.b.current.value);//写法2
    }

    render(){
        return (<div>
            <input type="text" id="username" ref={(dom)=>{this.a=dom}} />{/*参数dom 就是指的这个input输入框  把dom放到a上*/}
            <input type="text" id="username" ref={this.b} />
                {/*获取输入框的值的两种写法*/}
            <button onClick={this.handleClick}>按钮</button>
            </div>
        )
    }
    componentDidMount(){

    }

}

render(<UnControl1></UnControl1>,window.root);



