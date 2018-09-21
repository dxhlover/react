import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';

//组件有两个东西 一个叫属性(外界给的) 一个叫状态(自己维护)

//为了他能有自己的状态 需要继承父类组件的  通过extends继承
// class Clock extends React.Component{// 类组件Clock继承父类组件 React.Component
//
// }
// Component 这个类中拥有一个方法叫setState 设置状态 每次调用这个方法 就会造成组件刷新
class Clock extends Component{//上面引入时 {Component} 解构出来 就可以直接用Component
    // constructor(){
    //     // super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
    //     // 如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;
    //     // 如果你在constructor中要使用this.props,就必须给super加参数：super(props) ;
    //     // 如果没用到constructor，在render中this.props都是可以使用的，这是React自动附带的。
    //     super();//ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
    //     this.state = {
    //         time:new Date().toLocaleString()
    //     }
    // }

    constructor(){//相当于把这里的this绑好了 重新生成一个新的fn 每次点的时候点fn
        super();
        this.fn = this.handleClick.bind(this);
    }
    state = {//这样写 和上面的 constructor的写法是等价的
        time:new Date().toLocaleString(),
        a:'呵呵'
    };
    componentDidMount(){//生命周期 相当于vue里的mounted  挂在完成  只走一次 挂载完成就不会再走这个方法了 在render之后走这个方法
        console.log('didMount');
        this.timer=setInterval(()=>{//用箭头函数 调用组件当前的方法 this代表Clock实例
            //只会覆盖以前的属性 Object.assign() 不会覆盖掉a:'呵呵' 会合并 只会覆盖掉相同的属性 不相同的会被保留
            this.setState({time:new Date().toLocaleString()})
        },1000);

    }
    handleClick(){
        alert(this);
    }
    handleClick1 = ()=>{//es7中的 箭头函数
        alert(this);
        ReactDOM.unmountComponentAtNode(window.root)
        //ReactDOM中的某个方法 卸载某个组件在哪个节点上
        //卸载之后 定时器就获取不到state了 所以在死掉的生命周期 把setInterval清空
    }
    componentWillUnmount(){//在这个生命周期解绑事件和方法
        //当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
        clearInterval(this.timer) //组件卸载的时候 把定时器清空了
    }
    render(){//默认渲染这个组件会调用render方法
        //绑定this的方式 1.通过箭头函数 不推荐 因为每次点击都会产生一个新的函数 浪费性能 2.bind绑定this 3.通过es7中的箭头函数 绑定this
        console.log('render');
        return <div>
            {this.state.a}：<span>{this.state.time}</span>
            {/*state是这个实例上的 用this*/}
            <button onClick={function(){
                alert(this)
            }}>删除</button>
            <button onClick={()=>{
                alert(this)
            }}>删除</button>
            {/*事件名要大写 不能小写 this 是undefined  如果写成箭头函数 则是父级中的 也就是这个实例 这个地方获取实例中的state 所以这个地方要写箭头函数*/}
            <button onClick={this.handleClick.bind(this)}>删除</button>
            {/*如果不绑定this 也是undefined 跟直接写函数一样 绑定this的话每执行一次render 绑定一次this 也会耗费性能 跟箭头函数一样*/}
            <button onClick={this.fn}>删除</button>
            {/*这种fn的也不建议 每次写一个方法 要写一个fn */}
            <button onClick={this.handleClick1}>删除</button>

        </div>
    }


}




render(<Clock />,window.root);
