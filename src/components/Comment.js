import React,{Component} from 'react';
export default class Comment extends Component{
    content = React.createRef();
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addUser(this.content.current.value);
    }
    render(){
        return (
            //form表单会自己验证 是不是required  表单会提交页面 所以事件里面加个e.preventDefault();
            <form onSubmit={this.handleSubmit}>
                <textarea className="form-control" required></textarea>
                <button type="submit">评论</button>
                {/*<button onClick={this.handleClick}>评论</button>*/}
            </form>
        )
    };
}



