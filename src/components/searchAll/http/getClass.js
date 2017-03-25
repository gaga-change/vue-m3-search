/**
 * Created by 严俊东 on 2017/3/24.
 */

/**
 * 获取商品类型
 * @returns {Promise}
 */
function getClass(params) {
    // console.log(params.gameId);
    // params = {gameId: 'YX16063013384155600402'};
    return new Promise((resolve, reject) => {
        this.vm.$http.jsonp(
            // "https://m.5173.com/api/mobile-category-service/rs/category/searchgoodstypebygameid",
            this.vm.$CONSTANTS.APICategory + "category/searchgoodstypebygameid",
            {
                params: params,
                jsonp: 'callback'
            }
        ).then(
            (res) => {
                if (res.body.goodsTypeList) {
                    resolve({list: res.body.goodsTypeList})
                } else {
                    // console.log("(或不存在该商品)", res);
                    resolve({list: []});
                }
            }, () => {
                console.error("请求错误: getClass");
                reject()
            }
        );
    })
}

export {getClass};
