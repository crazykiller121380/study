const user = {
  name: 'yangtianqi',
  title: 'header'
};

// 将对象封住，不能添加新属性，不能删除属性
Object.seal(user);

if(!Object.isSealed(user)) {
  user.site = 'www.baidu.com';
}

console.log(user);

// 冻结对象之后不能对对象的属性进行修改
Object.freeze(user);
if(!Object.isFrozen(user)) {
  user.title = 'iii';
}
console.log(user);