import React,{component} from 'react';

export default class Detail extends Component{
    state = {
        user:{}
    };
    componentWillMount(){
        let s = this.props.location.state;

        if(s){//s有值 表示用户点过来的
            this.setState({user:s});
        }else{//直接刷新
            console.log(this.props.match.params);
            let users = JOSN.parse(localStorage.getItem('lists'));
            //this.props.match.params.id 取出来的结果是字符串 (从url中取值都是字符串)
            let user = users.find(user=>user.id==this.props.match.params.id)||{};
            this.setState({user});
        }
    };
    render(){
        console.log(this.props);
        console.log(this.state.user);

        return (
            <div>
                {this.state.user.id?<div>{this.state.user.id}{this.state.user.username}</div>:null}
            </div>
        )
    }
}