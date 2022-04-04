let user = {
  name: 'yangtianqi',
  balance: '45.7'
};
// 打印属性
console.log(Object.keys(user));
// 打印属性值
console.log(Object.values(user));
// 属性名和属性值一起获取
console.log(JSON.stringify(Object.entries(user), null, 2));