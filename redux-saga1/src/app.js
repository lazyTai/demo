import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import Routes from './router'


function render() {
    ReactDOM.render(<Routes />
        , document.getElementById('root'))
}


if (module.hot) {
    render()
    module.hot.accept();
}