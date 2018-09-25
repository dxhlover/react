import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from './request';
import  Comment from './components/Comment';
import  List from './components/List';
// let Context = React.createContext();
// Context.Provider   Context.Consumer
import {Provider} from './context'
//创建上下文

//App.js负责获取数据

// React API contextApi  实现跨组件传递（不超过3级 都可以传）

//ajax是异步的，就算写到willMount里面也是在render之后执行 肯定会渲染两遍 第一遍是获取数据之前 渲染空数组 第二次获取之后渲染

export default class App extends React.PureComponent{
    state = {
        users:[],
        count:0
    };
    increment = () =>{
        this.setState({count:this.state.count+1});
    };
    addUser = (val)=>{
        // react 最好不要操作同一个对象
        // 每次更新状态都需要返回一个新的状态 PureComponent
        // PureComponent优化了shouldComponentUpdate方法，发现如果返回的是一个状态还是以前的引用地址不会更新
        // 必须返回新对象
        console.log(val);
        let users=[...this.state.users,{avatar:'',content:val,username:'zfpx'}];
        this.setState({users});
    };
    removeById = (id) =>{
        let users = this.state.users.filter(user=>user.id!==id);
        this.setState({
            users
        });
    }
    componentWillMount(){//也可以在这里面获取数据 但是不建议在这个里面获取 因为快要被废弃了

    };

    async componentDidMount(){//在这个里面获取数据
        try{//成功
            let users = await axios.get('./user.json');
            //this.setState({users:users});
            this.setState({users});
            console.log(users);
        }catch(e){//失败
            console.log(e);
        }
    };
    render(){
        return (
            //value 规定好的 名字就叫value  value传个对象 {}里面是个对象 是两个{}
            //
            <Provider value={{increment:this.increment,color:'red'}}>
                <div className="container">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            评论
                        </div>
                        <div className="panel-body">
                            {/*<List users={this.state.users}></List>*/}
                            <List {...this.state} removeById={this.removeById}></List>
                        </div>
                        <div className="panel-footer">
                            <Comment addUser={this.addUser}></Comment>
                        </div>
                        <div>{this.state.count}</div>
                    </div>
                </div>
            </Provider>
        )
    };
}



