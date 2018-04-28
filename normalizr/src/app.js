import React from 'react'

import ReactDOM from 'react-dom'
import App from './index'

/**
 * render func
 * @author 刘明泰 <18819448261>
 * @desc
 * render mount the app to the dom#root
 * */
function render(){
    ReactDOM.render(<App/>,document.getElementById("root"))
}

if (module.hot) {
    render()
    module.hot.accept();
}

render()
/**
 *  文件入口
 *
 * @desc
 * 文件入口
 * */
export  const app =null ;
