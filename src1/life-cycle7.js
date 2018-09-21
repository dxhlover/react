import React,{Component} from 'react';
import {render} from 'react-dom';
// 生命周期
// React16.3 推出了新的生命周期 没有用


class Counter extends Component{
    static defaultProps = {//静态属性 不是生命周期 一个组件里调用最早的  不算生命周期  1
       a:1
    };
    constructor(props){//这里面的props就包括上面的默认属性 构造函数 第2调用
       console.log(props);
        super();
    }
    state = {
        a:0
    };
    handleClick = () =>{
        this.setState({a:this.state.a+0});
    };
    componentWillMount(){//3  挂载之前   react16.3中标识了这个方法会被废弃掉
        console.log('parent-componentWillMount')
        //后期有需求的话 可以放在constructor中替代掉
    }
    shouldComponentUpdate(){//react 的性能优化 immutablejs
        console.log('parent-shouldComponentUpdate');
        return true; //默认return true  当return false时 如果状态不变 不会调用render方法 性能优化
    }
    componentWillUpdate(){
        console.log('parent-componentWillUpdate');
    }
    render(){
        console.log('parent-render');
        return (<div>
            {this.state.a}
            <button onClick={this.handleClick}>+</button>
            <ChildCounter n={this.state.a}></ChildCounter>
            {/*调用子组件 并给子组件传参*/}
        </div>)
    }
    componentDidMount(){
        console.log('parent-didmount');
    }
    componentWillUnmount(){//平时不会调用这个  组件卸载时才调用
        console.log('parent-组件卸载');
    }
}
class ChildCounter extends Component{//儿子组件 只要是组件 就会有自己的生命周期
    componentWillMount(){
        console.log('child-componentWillMount');
    }
    render(){//不能更改属性的值
        //this.props.n =100;//不能这么写 不能更改属性的值
        console.log('child-render');
        return (
            <div>child counter  {this.props.n}</div>
        )
    }
    componentDidMount(){
        console.log('child-componentDidMount');
    }
    componentWillReceiveProps(){//有个bug  第一次不执行  之后再传属性才会执行  16.3中这个方法废弃了
        console.log('儿子接收到了新的属性');
        //接收到某个属性后 把这个属性变成了当前组件的状态
    }
}

//只有componentWillReceiveProps/componentWillMount/componentDidMount可以调用setState方法  其余调用都是死循环  不应该在componentWillReceiveProps中调用setState(但大家还是这么用)
render(<Counter></Counter>,window.root);

//复合组件 把组件套起来 父组件里面套子组件 拆分的更细致一些
// 生命周期
// 父组件render的时候 发现还有子组件 执行子组件的生命周期 最后 parent-didMmount
// parent-componentWillMount
// parent-render
// child-componentWillMount
// child-render
// child-componentDidMount
// parent-didmount

