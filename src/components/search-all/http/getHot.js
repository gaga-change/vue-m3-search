/**
 * Created by 严俊东 on 2017/3/14.
 */

/**
 * 搜索返回数据
 * @param num 数量
 * @returns {Promise} 返回一个含游戏名数组的一个对象
 *  {
   *    list: [<Object>]
   *  }
 */

function getHot(num) {

    // this.vm.$http.post(
    //     '/api/mobile-searchCenter-service/rs/userCache/save',
    //     {mapRequest: {gameId: 'YX17030721535028100230'}}
    // ).then((res) => {
    //
    // });


    return new Promise((resolve) => {
        this.vm.$http.post(
            '/api/mobile-searchCenter-service/rs/hotSearchService/queryAllHotSearch',
            {
                pageIndex: 1,
                pageSize: num
            },
            {
                headers: {
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json"
                }
            }
        ).then((res) => {
            res = res.body;
            if (res.responseStatus.code == '00') {
                resolve({list: res.result});
            }
        }, () => {
            console.log("请求错误！");
            resolve({list: []})
        });
    })
}

export {getHot};
