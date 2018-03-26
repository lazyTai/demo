import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './components/app.vue'
import Px from './components/px.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/app', component: App,
    },
    {
        path: '/px',
        component: Px
    },

    {
        path: '/',
        redirect: '/app'
    },

]
const router = new VueRouter({ routes })
new Vue({
    router,
    // el: '#root', 
    // template: "<App/>",
    // components: { App },
}).$mount('#root')