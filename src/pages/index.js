import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import Logo from './Logo';
import MenuLink from './MenuLink';//自己封装一个导航 点击在li上加active

//专门负责导航nav内容的

export default class Index extends Component {
    render(){
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-heading">
                            <Logo></Logo>
                        </div>
                        <div className="nav navbar-nav">
                            {/*1.渲染这个组件 2.我还想知道有没有匹配到*/}
                            <MenuLink to="/home">首页</MenuLink>
                            <MenuLink to="/user">用户列表</MenuLink>
                            <MenuLink to="/profile">个人中心</MenuLink>
                            <MenuLink to="/login">登录</MenuLink>





                        </div>
                    </div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>

            </div>
        )
    }
}