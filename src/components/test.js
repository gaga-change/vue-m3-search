var body = {
    q: 123,
    a: {q: '123'},
    b: [
        {
            q: {a: 123}
        },
        {
            q: [{
                q: 123
            }]
        },
        {
            q: 123,
            list: [{
                q: 123
            }]
        }, {
            q: 123,
            list: [{
                q: 123
            }]
        }
    ]
};
// console.log(  [1, 2] instanceof Array);
// console.log( {} instanceof Object);
// console.log( a instanceof Object);

function each(obj, keyMap) {
    for (let i in obj) {
        if (keyMap[i]) {
            obj[keyMap[i]] = obj[i];
            delete obj[i];
            i = keyMap[i];
        }
        if (obj[i] instanceof Array) {
            obj[i].map(function (val) {
                if (val instanceof Object) {
                    each(val, keyMap)
                }
            })
        } else if (obj[i] instanceof Object) {
            each(obj[i], keyMap)
        } else { // 不是对象也不是数组

        }
    }
}
each(body, {'q': 'query'});
console.log(body);
