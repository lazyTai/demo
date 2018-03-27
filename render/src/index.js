import Vue from 'vue'
import App from './app.vue'
new Vue(
    { render: (h) => { App } }
).$mount('#root')