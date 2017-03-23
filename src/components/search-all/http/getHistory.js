/**
 * Created by 严俊东 on 2017/3/14.
 */
let data = require('./games.json')

/**
 * 搜索返回数据
 * @param num 数量
 * @returns {Promise} 返回一个含游戏名数组的一个对象
 *  {
   *    list: [<Object>]
   *  }
 */

function getHistory(num = 4) {
    /**
     * 先判断是否登入：
     *   是
     *      拉账号的缓存
     *   否
     *      历史是否存在
     *          是： 拉LS缓存
     *          否： 创建LS缓存
     *
     */
    //


    return new Promise((resolve, reject) => {
        this.vm.$getAccount().then((account) => {
            if (account) {
                console.log("有登入")
                this.vm.$http.post(
                    '/api/mobile-searchCenter-service/rs/userCache/listCache',
                    {pageSize: num}
                ).then((res) => {
                    let resp = res.body;
                    console.log(resp);
                    if (resp.result != null
                        && resp.result.searchCacheEOList != null) {
                        resolve({list: resp.result.searchCacheEOList})
                    }
                }, () => {
                    console.error("请求异常： listCache")
                });
            } else {
                console.log("没登入")
            }
        });
    })
}

export {getHistory};

// module.exports = getSearch;
// return;
//
// getSearch(15).then(function (res) {
//   console.log(res.list.length)
// }, function () {
//   console.log("err");
// });
//
