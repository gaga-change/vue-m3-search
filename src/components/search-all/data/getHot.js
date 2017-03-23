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
                console.log(res.result)
                resolve({list: res.result});
            }
        }, () => {
            console.log("请求错误！");
            resolve({list: []})
        });
    })
}

export {getHot};
