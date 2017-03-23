/**
 * Created by 严俊东 on 2017/3/23.
 */

function getAccount() {
    return new Promise((resolve, reject) => {
        this.$http.post(
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
            if (resq.responseStatus != null
                && resq.responseStatus.code != null) {
                if (resq.responseStatus.code == '00') {
                    this.account = resq.userInfo;
                    resolve(resq.userInfo);
                } else {
                    resolve(null);
                }
            } else {
                console.error("服务器返回参数异常", resq);
                reject()
            }
        }, () => {
            reject();
            console.error("请求异常： getAccount")
        })
    })
}
export  {getAccount}