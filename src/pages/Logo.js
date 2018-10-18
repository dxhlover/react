import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Logo extends Component {
    change = ()=>{
        //在此方法中实现 组件的跳转
        console.log(this.props);
        this.props.history.push('/login');
    };
    render(){
        return (
            <div>
                <a className="navbar-brand" onClick={this.change} >管理系统</a>
            </div>
        )
    }
}

//高阶组件
export default withRouter(Logo);

//相当于在内部把这个组件包装成一个新的组件 <Route><Logo></Logo></Route>