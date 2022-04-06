const user = {
  name: 'yangtianqi',
  title: 'student'
}

console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2));

Object.defineProperties(user, {
  name: {
    value: 'uuu',
    writable: true,
    enumerable: true,
    configurable: true
  },
  title: {
    value: 'uuu',
    writable: true,
    enumerable: true,
    configurable: true
  }
})

console.log(Object.keys(user));

// 禁止向对象中添加新属性
Object.preventExtensions(user);

// 判断是否允许添加新属性
if(Object.isExtensible(user)) {
  user.site = 'www.baidu.com';
}
console.log(user);


// enumerable可遍历
// writable可修改
// configurable可删除该属性
// {
//   "name": {
//     "value": "yangtianqi",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   },
//   "title": {
//     "value": "student",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
// }
