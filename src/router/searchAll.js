/**
 * Created by 严俊东 on 2017/3/25.
 */


const SearchAllApp = resolve => {
    require.ensure(['./../components/searchAll/SearchAllApp.vue'], () => {
        resolve(require('./../components/searchAll/SearchAllApp.vue'));
    }, 'SearchAll');
};

const SearchAll = resolve => {
    require.ensure(['./../components/searchAll/SearchAll.vue'], () => {
        resolve(require('./../components/searchAll/SearchAll.vue'));
    }, 'SearchAll');
};

const ChooseClass = resolve => {
    require.ensure(['./../components/searchAll/ChooseClass.vue'], () => {
        resolve(require('./../components/searchAll/ChooseClass.vue'));
    }, 'ChooseClass');
};
export const searchAll = {
    path: '/vue/search-all-app',
    name: '',
    component: SearchAllApp,
    children: [
        {
            path: '',
            name: "SearchAll",
            component: SearchAll
        },
        {
            path: 'search-class',
            name: "ChooseClass",
            component: ChooseClass
        }
    ]
};