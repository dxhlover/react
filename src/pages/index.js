import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//专门负责导航nav内容的

export default class Index extends Component {
    render(){
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-heading">
                            <a className="navbar-brand" >管理系统</a>
                        </div>
                        <div className="nav navbar-nav">
                            <li><Link to="/home">首页</Link></li>
                            <li><Link to="/user">用户列表</Link></li>
                            <li><Link to="/profile">个人中心</Link></li>
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