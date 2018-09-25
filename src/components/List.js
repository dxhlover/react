import React,{Component} from 'react';
import ListItem from './ListItem';
export default class List extends Component{
    render(){
        return (
            <div>
                {this.props.users.map((item,index)=>{
                    return (
                        // {/*如果需要写序号 需要传递index 可以传递index*/}
                        <ListItem {...item} key={index} removeById={this.props.removeById}></ListItem>
                    )
                })}
            </div>
        )
    };
}



