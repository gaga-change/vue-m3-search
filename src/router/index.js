import Vue from 'vue'
import Router from 'vue-router'
import VueResourece from 'vue-resource'
import Help from '@/components/Help'
import {quickLogin} from './quickLogin.js'
import {searchAll} from './searchAll.js'

Vue.use(Router);
Vue.use(VueResourece);

const routes = [];
routes.push(quickLogin);
routes.push(searchAll);
routes.push(...[
    {
        path: '/help',
        name: 'Help',
        component: Help
    }

]);
export default new Router({
    routes
})
