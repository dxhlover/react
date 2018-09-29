import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import Add from './Add'
import List from './List'
//二级导航  二级里面包着一级路径
//Switch 匹配一个
export default class User extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    <li><Link to="/user/add">添加用户</Link></li>
                    <li><Link to="/user/list">用户列表</Link></li>

                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path="/user" exact={true} component={Add} />
                        <Route path="/user/add" component={Add} />
                        <Route path="/user/list" component={List} />
                    </Switch>
                </div>
            </div>
        )
    }
}