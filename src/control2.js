//受控组件 非受控组件
// 输入框获取值:非受控组件:操作dom 很方便
//受控组件 受状态控制  很快的进行校验 默认值操作 缺点 受状态控制

//


import React,{Component} from 'react';
import {render} from 'react-dom';
// react 一般都是操作数据
// 16.3的api  React.createRef  1.方便 2可以和一些第三方库结合使用
class Control extends Component{
    state={
        a:'hello',
        b:'world'
    }
    changeHandler = (e)=>{
        console.log(e.target.name);
        let val = e.target.name
        this.setState({
            [val]:e.target.value //val是变量 用[]括起来
        });
        console.log(e.target.value);
    }

    render(){
        return (
            <div>
                <input type="text" name="a" value={this.state.a} onChange={this.changeHandler} />{this.state.a}
                <input type="text" name="b" value={this.state.b} onChange={this.changeHandler} />{this.state.b}

            </div>
        )
    }


}

render(<Control></Control>,window.root);



