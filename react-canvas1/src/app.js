import dva from 'dva';
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import routes from './router'
var app = null;

app = dva({
    onAction: createLogger()
});
// app = dva({});


app.router(routes);
app.start("#root");

if (module.hot) {
    app.start("#root");
    module.hot.accept();
}