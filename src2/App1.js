import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from './request';



//ajax是异步的，就算写到willMount里面也是在render之后执行 肯定会渲染两遍 第一遍是获取数据之前 渲染空数组 第二次获取之后渲染

export default class App extends Component{
    state = {
        users:[]
    };
    componentWillMount(){//也可以在这里面获取数据 但是不建议在这个里面获取 因为快要被废弃了

    };
    async componentDidMount(){//在这个里面获取数据
        try{//成功
            let users = await axios.get('./user.json');
            //this.setState({users:users});
            this.setState({users});
            console.log(users);
        }catch(e){//失败
            console.log(e);
        }
    };
    render(){
        return (
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        评论
                    </div>
                    <div className="panel-body">
                        {this.state.users.map((item,index)=>{
                            let {avatar,username,content,id}=item;
                            return (
                            <div className="media" key={id}>
                                <div className="media-left">
                                    <img src={avatar}  alt="" />
                                </div>
                                <div className="media-body">
                                    <h3>{username}</h3>
                                    <div>{content}</div>
                                </div>
                            </div>
                            )
                        })}
                        {/*不能用forEach 因为forEach没有返回值*/}
                    </div>
                    <div className="panel-footer">
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
            </div>
        )
    };
}



