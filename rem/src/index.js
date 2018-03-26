import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './components/app.vue'
import Px from './components/px.vue'
import Rem1 from './components/rem1.vue'

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
        path: '/rem1',
        component: Rem1
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