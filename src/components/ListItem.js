import React,{Component} from 'react';
import {Consumer} from '../context.js'
export default class ListItem extends Component{
    handleClick = (id)=>{
        this.props.removeById(id);
    };
    render(){
        let {avatar,username,content,id}=this.props;

        return (
            //Consumer 包裹一个函数 html结构作为返回(return) 结果
            <Consumer>
                {(value)=>{
                    return(
                        <div className="media">
                            <div className="media-left">
                                <img src={avatar}  alt="" />
                            </div>
                            <div className="media-body">
                                <h3>{username}</h3>
                                <div>{content}</div>
                                <button className="btn" onClick={(e)=>{
                                    this.handleClick(id);
                                }}>删除1</button>
                                {/*上下为两种写法*/}
                                <button className="btn" onClick={this.handleClick.bind(null,id)}>删除2</button>
                                <button className="btn" onClick={value.increment}>点赞</button>
                                {value.color}
                            </div>
                        </div>
                    )
                }}
            </Consumer>

        )
    };
}



