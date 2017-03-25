/**
 * Created by 严俊东 on 2017/3/14.
 */

import {getSearch} from './getSearch.js'
import {getHistory} from './getHistory.js'
import {getHot} from './getHot.js'
import {saveHistory} from './saveHistory.js'
import {getClass} from './getClass.js'
import Vue from 'vue'


export default  {
    vm: new Vue(),
    getSearch,
    getHistory,
    getHot,
    saveHistory,
    getClass
}
