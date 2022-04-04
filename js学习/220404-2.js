let user = {
  name: "yangtianqi",
  "my age": 18
}
// console.log(user.name)
// console.log(user["name"])
// console.log(user["my age"])

// for(const key in user) {
//   console.log(key + ":" + user[key])
// }

// 运行结果
// name:yangtianqi
// my age:18

user.age = 19;
user.get = function() {
  return `${ this.name }的年龄: ${ this.age }`;
}
// 删除对象属性
delete user.age;
console.log(user.get());