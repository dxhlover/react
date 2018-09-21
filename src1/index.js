import React,{Component} from 'react';
import {render} from 'react-dom';
// 生命周期
// React16.3 推出了新的生命周期 没有用


class Counter extends Component{
    static defaultProps = {
       a:1
    };
    constructor(props){
       console.log(props);
        super();
    }
    state = {
        a:0
    };
    handleClick = () =>{
        this.setState({a:this.state.a+0});
    };
    shouldComponentUpdate(){
        console.log('parent-shouldComponentUpdate');
        return true;
    }
    render(){
        console.log('parent-render');
        return (<div>
            {this.state.a}
            <button onClick={this.handleClick}>+</button>
            <ChildCounter n={this.state.a}></ChildCounter>

        </div>)
    }
    componentDidMount(){
        console.log('parent-didmount');
    }
    componentWillUnmount(){//平时不会调用这个  组件卸载时才调用
        console.log('parent-组件卸载');
    }

    getSnapshotBeforeUpdate(){//获取拍照更新之前  相当于componentWillUpdate  不能和componentWillUpdate一起用 不能和componentWillMount一起用  也必须要返回一个值 返回一个value 或者 null 还必须和componentDidUpdate配套用
        console.log('componentWillUpdate');
        return 100 //更新之前可以把这个值记录下来 传给更新之后
    }
    componentDidUpdate(newProps,newState,z){
        console.log(arguments);
        //arguments第一个更新后的属性 第二个更新后的状态 第三个 是上面的传的100
    }
}
class ChildCounter extends Component{//儿子组件 只要是组件 就会有自己的生命周期
    state ={
        a:0
    }
    render(){//不能更改属性的值
        //this.props.n =100;//不能这么写 不能更改属性的值
        console.log('child-render');
        return (
            <div>child counter  {this.state.a}</div>
        )
    }
    componentDidMount(){
        console.log('child-componentDidMount');
    }
    //可以直接调用 并且不需要写setState了 也不能写 因为他是一个静态方法 setState得在类上 实例上写
    static getDerivedStateFromProps(newProps){//获取衍生的状态从属性  是个静态方法 不再是生命周期了 但相当于 componentWillReceiveProps 要用这个 必须有个状态 state 定义一个状态  不能和componentWillMount一起用 用了这个必须return 一个新的状态
        console.log('儿子接收到了新的属性');
        console.log(newProps);//父亲传过来的属性
        return {a:1}//必须返回个状态值
    }



}

render(<Counter></Counter>,window.root);



