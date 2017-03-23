import Vue from 'vue'
import Router from 'vue-router'
import VueResourece from 'vue-resource'
import Help from '@/components/Help'
import SearchAll from '@/components/search-all/SearchAll'
import ChooseClass from '@/components/search-all/ChooseClass'
import {quickLogin} from './quickLogin.js'

Vue.use(Router);
Vue.use(VueResourece);

const routes = [];
routes.push(quickLogin);

routes.push(...[
    {
        path: '/help',
        name: 'Help',
        component: Help
    }, {
        path: '/search-all',
        name: 'SearchAll',
        component: SearchAll
    }, {
        path: '/search-all/choose-class',
        name: 'ChooseClass',
        component: ChooseClass
    }, {
        path: '*',
        redirect: '/help'
    }
]);
export default new Router({
    routes
})
