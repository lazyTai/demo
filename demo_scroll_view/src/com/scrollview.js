/* 
使用
import ScrollView from '../../src'
Vue.use(ScrollView) */
import Vue from 'vue/dist/vue.js'
var ScrollView= {
    name: 't-scroll-view',
    render(h) {
        return h("div", ['ScrollView'])
    },
    install(Vue, options) {
        Vue.component(ScrollView.name, ScrollView)
    }
};

export default ScrollView