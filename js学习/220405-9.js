// 使用代理控制属性
const SJ = { name: 'sujiu' };
const proxy = new Proxy(SJ, {
  get(obj, property) {
    return obj[property];
  },
  set(obj, property, value) {
    obj[property] = value;
    return true;
  }
})

proxy.name = 'SJ';
console.log(proxy.name);
console.log(proxy);