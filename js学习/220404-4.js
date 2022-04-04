let user = { name: 'SJ', age: 18 };
let usernew = {...user, grade: '99' }
console.log(usernew)

function upload(params) {
    let config = {
        type: "*.jpeg,*.png",
        size: 80
    }
    // 后面属性会把前面的进行覆盖
    config = {...config, ...params }
    return config
}
console.log(upload({ size: 99 }))

