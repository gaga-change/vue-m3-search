/**
 * Created by 严俊东 on 2017/3/23.
 */
/**
 * 获取账号信息
 * @returns {Promise}
 */
function getAccount() {
    return new Promise((resolve) => {
        this._http.post(
            '/login/mobile-user-service/rs/account/queryCurrentUserInfo',
            {},
            {
                headers: {
                    contentType: "application/json; charset=UTF-8",
                    dataType: "json"
                }
            }
        ).then((res) => {
            let resq = res.body;
            resolve(resq);
        }, () => {
            console.error("请求异常： getAccount")
        })
    })

};

export  {getAccount}