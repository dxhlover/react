import React,{Component} from 'react';
import  {Route,Redirect} from 'react-router-dom'

export default class Protected extends Component {
    render() {
        //Protected里面有path 有component
        let login = localStorage.getItem('login');
        // return login ? <Route {...this.props}></Route> : <Redirect to='/login' state={"from":'/profile'} />

        return login ? <Route {...this.props}></Route> : <Redirect to={{pathname:"/login",state:{"from":'/profile'}}} />


        //拦截的作用  from 写成任何都行 如state={"aaa":'/profile'}
    }
}