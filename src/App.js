// 根组件 里面可以渲染n个页面级组件

import React,{Component} from 'react';
import Home from './pages/Home';
import User from './pages/User';
import Profile from './pages/Profile';
import Login from './pages/Login';

import Protected from './pages/Protected';//受保护的组件 自己写的

 import {HashRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';//开发用这个 带#号

//Link  BBrowserRouter的话是方法 HashRouter的话是链接
// import {BrowserRouter as Router,Route} from 'react-router-dom';  //上线用这个

//最外层要包一个路由容器
//路径一般不大写 大写也行
//Router 只能有一个儿子元素  Router整个项目加一个


// 负责路由


//react 路由渲染有三种方式 component  children默认不匹配也会执行


import Index from './pages/index'
export default class App extends Component {
    render(){
        return (
            <Router>
                <Index>
                    {/*Index 组件可以通过属性传参 中间也可以放东西 Index组件会替换掉这中间的代码 为了不让替换掉 在pages/index页面里 写{this.props.children} 通过children把这中间的传到Index  不会被替换掉 父传子 */}
                    {/*exact={true} 代表的是严格匹配  */}
                    {/*Switch组件*/}
                    <Switch>
                        <Route path='/home' exact={true} component={Home} />
                        <Route path='/home/123' exact={true} component={Home} />
                        {/*如果用户没有登录 应该重定向到登录页*/}
                        {/*<Route path='/profile' component={Profile} />*/}

                        <Protected path='/profile' component={Profile} />



                        <Route path='/user' component={User} />
                        <Route path='/login' component={Login} />
                        <Redirect to="/home" />
                        {/*Redirect 写在最下面 重定向 都匹配不到跳转到home*/}
                    </Switch>
                </Index>
            </Router>
        )
    }
}