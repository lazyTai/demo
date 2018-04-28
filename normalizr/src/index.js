import React from 'react'

import {normalize, schema , arrayOf} from "normalizr";


/**
 * react组件 loading
 * @author 刘明泰 <18819448261>
 * @example
 * <App />
 * @desc
 * 主要App component
 * */
class App extends React.Component{
    componentDidMount() {
        /**
         * @type {Object} userSchema
         * @desc
         * 用来生成 数据的骨架，就是类！！？？
         * what is inside in schema <br/>
         * ![schema](http://p7whtc26y.bkt.clouddn.com/18-4-28/31936984.jpg) <br/>
         * 我们可以看到几个对象，对应我们需要什么，就用什么！！？
         *
         * */
        this.userSchema =new schema.Entity('users');
        debugger
    }
    render(){
        return (
            <div>
                1.this is how to use ~~~Schema~~~
            </div>
        )
    }

}
export  default  App