import React,{Component} from 'react';

export default class List extends Component {
    state={
        users:[]
    }
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
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        )
    }
}