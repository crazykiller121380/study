let user = {
  name: 'SJ',
  url: 'www.baidu.com'
};
// 浅拷贝 复制值
let obj = Object.assign({}, user);
let obj1 = { ...user }

console.log(obj)
console.log(obj1)