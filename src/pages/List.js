import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class List extends Component {
    state={
        users:[]
    };
    componentWillMount(){
        let users=JSON.parse(localStorage.getItem('lists'))||[];
        this.setState({users});
    }
    componentDidMount(){
        //这里不在didmount里获取数据 在这里面获取的话 render会走两次
    }
    render(){
        console.log(1);
        //写table时必须有thead 和tbody
        return (
            <table className="table tab-content">
                <thead>
                    <tr>
                        <th>用户id</th>
                        <th>用户名</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((item)=>{
                        // 里面必须加return
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                {/*<td><Link to={"/user/detail/"+item.id}>{item.username}</Link></td>*/}
                                <td><Link to={{pathname:"/user/detail/"+item.id,state:item}}>{item.username}</Link></td>
                                {/*state是固定的 就叫这个名 写了它 在下一个页面可以通过location获取到state  通过state给跳转的页面传参数 只有点击的那一瞬间会把参数值带过去 刷新下一个页面是没有的*/}
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        )
    }
}