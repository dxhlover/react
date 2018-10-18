import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import Logo from './Logo'

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
                            <li><NavLink to="/home">首页</NavLink></li>
                            <li><NavLink to="/user">用户列表</NavLink></li>
                            <li><NavLink to="/profile">个人中心</NavLink></li>
                            <li><NavLink to="/login">登录</NavLink></li>
                            {/*NavLink用来写导航点击时候的激活状态 */}

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