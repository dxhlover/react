import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

//第三方的包 验证属性  校验不通过 也会渲染 只是会有警告

// Person.propTypes = {}  //一般人都这样写

class Person extends Component{
    static defaultProps = {//默认静态属性 传了就用传的 不传就用默认的
        name:'zfpx'
    }
    static propTypes = {//用propTypes   这样写更合理  用来校验的
        name:PropTypes.string.isRequired, //希望name是个字符串型的 如果传过来的不是 浏览器console里面就会出现警告 不加isRequired 不传不会报错 加了之后 就说明是必传的 不传会有警告
        gender:PropTypes.oneOf(['男','女']),//单选框
        hobby:PropTypes.arrayOf(PropTypes.string), //数组时  数组里面是字符串
        pos:PropTypes.shape({//对象时
            x:PropTypes.number.isRequired,
            y:PropTypes.number.isRequired
        }),
        salary(obj,key,p){//薪水大于0 不能用PropTypes校验了  写个函数自己校验
            console.log(arguments);
            if(obj[key]<=3000){
                throw new Error('工资太多');
            }
        }


    }
    //如果是一个函数的话 跑到构造函数的第一个参数里去了
    // constructor(props){
    //     super();
    //     console.log(props);
    // }
    //React.Component 会把当前传递的属性挂在到当前的实例上 所以在render中可以直接取
    render(){
        let {name,gender,age,hobby,pos,salary} = this.props
        return (
            <div>
                {JSON.stringify(this.props)}
                {name}{age}{gender}
            </div>
        )
    }
}

//组件有两个东西 一个叫属性(外界给的) 一个叫状态(自己维护)
//属性校验 校验字符串 数字 正负等
let obj = {
    name:'zfpx',
    gender:'男',
    age:9,
    hobby:['游泳','看书','跑步'],
    pos:{x:433,y:888},
    salary:3000
}
render(<Person {...obj}></Person>,window.root);
//{...obj}就把所有属性都传过去了


