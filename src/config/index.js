/**
 * Created by 严俊东 on 2017/3/17.
 */

import {CONSTANTS} from './constants'

import {getAccount} from './getAccount'

const CONFIG = {};
CONFIG.install = function (Vue, options) {
    Vue.CONSTANTS = CONSTANTS;
    Vue.prototype.$CONSTANTS = CONSTANTS;
    Vue.prototype.$getAccount= getAccount;
};

export {CONFIG};
