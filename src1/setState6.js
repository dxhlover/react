import React,{Component} from 'react';
import {render} from 'react-dom';

//更新组件有两种方式 1.给组件传递新的属性 2.让组件调用setState
class Counter extends Component{
    state = {
        num:0
    };
    handleClick = () =>{
        //setState 批量更新 setState是同步还是异步  有时候是同步 有时候是异步
        //this.setState({num:this.state.num+1});
        //this.setState({num:this.state.num+100});
        // this.setState({num:this.state.num+1},function(){//写个回调 一个执行完再执行另一个  异步的 这样的写法不推荐 太啰嗦
        //     this.setState({num:this.state.num+2},function() {
        //         this.setState({num: this.state.num + 3});
        //     })
        // });
        //this.state.num+=1;//这样写状态变了 但是视图不会更新 不能这么写
        this.setState((prevState)=>{//prevState   依赖于上次更新的状态再次更新
            return {num:prevState.num+1}
        });
        this.setState((prevState)=>{//
            return {num:prevState.num+1}
        });
        this.setState((prevState)=>{
            return {num:prevState.num+1}
        });
        //推荐这种写法 跟上面的嵌套的等价 用prevState

    };
    render(){
        return (<div>
            {this.state.num}
            <button onClick={this.handleClick}>+</button>
        </div>)
    }
}

render(<Counter></Counter>,window.root);

//复合组件 把组件套起来 父组件里面套子组件 拆分的更细致一些
// 生命周期


