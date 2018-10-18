import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
//render prompt (基本用到confirm)
// 因为我要判断当前路径有没有匹配到 通过Route渲染出来的 match给li加个样式
export default class MenuLink extends Component {
    render(){
        return (
            // children是一定会渲染
           <Route path={this.props.to}  children={(match)=>{
               return <li className={match?"active":''}><Link to={this.props.to}>{this.props.children}</Link></li>
           }}></Route>
        )
    }
}