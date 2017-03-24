/**
 * Created by 严俊东 on 2017/3/23.
 */

// this.vm.$http.get(
//     '/api/mobile-user-service/rs/account/login/loginbyverifycode?callback=jQuery1111005482065579084616_1490073131896&promotionUserId=0&phone=18958478815&verifyCode=7777&_=1490073131897',
// ).then((res) => {

// });

// gameId
// name
// gameType
function saveHistory(item, logined = false) {
    console.log(item);
    return new Promise((resolve) => {
        console.log(item);
        if (logined) {
            this.vm.$http.post(
                '/api/mobile-searchCenter-service/rs/userCache/save',
                {mapRequest: {gameId: item.gameId}}
            ).then((res) => {
                resolve();
            }, () => {
                resolve();
            });
        } else {
            if (localStorage.getItem('searchHistory')) {
                let list = JSON.parse(localStorage.getItem('searchHistory')).list;
                list = list.filter((val, index) => {
                    /**
                     * 清理：
                     *  1. 和我塞入新item的 名字相同或id相同
                     *  2. 只保留30条
                     */
                    if (val.name == item.name || val.gameId == item.gameId || index >= 29 )return false;
                    else return true;
                });
                list.unshift(item);
                localStorage.setItem('searchHistory', JSON.stringify({list: list}));
            } else {
                localStorage.setItem('searchHistory', JSON.stringify({list: [item]}));
                resolve({list: []})
            }
        }
    })
}

export {saveHistory};
