/**
 * Created by 严俊东 on 2017/3/14.
 */
let data = require('./games.json')
// data = null;
// data.success = false;

/**
 * 搜索返回数据
 * @param num 数量
 * @returns {Promise} 返回一个含游戏名数组的一个对象
 *  {
   *    list: [<Object>]
   *  }
 */

function getSearch(num, str = '') {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let res = data;
      if (
        res == null
        || res['success'] == null
        || res['categoryList'] == null
        || res['success'] == false
      ) {
        reject()
      }
      else if (res.success) {
        if (
          typeof res['categoryList'] == 'object'
          &&
          res['categoryList'] instanceof Array
        ) {
          num = str == '' ? 0 : Math.floor(num / (str.length * 2 - 1));
          let list = res['categoryList'].filter((val, index) => {
            if (index < num) {
              return true;
            } else {
              return false;
            }
          });
          resolve({list: list})
        }
      }
    }, 200);
    return []
  })
}
export {getSearch}

// module.exports = getSearch;
// return;
//
// getSearch(15, 'avcdffddfsa').then(function (res) {
//   console.log(res.list.length)
// }, function () {
//   console.log("err");
// });

