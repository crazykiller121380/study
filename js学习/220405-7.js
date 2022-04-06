// 使用symbol将属性封起来，以后使用类会更简单
const DATA = Symbol();
let user = {
  [DATA]: {
    name: 'yangtianqi',
    age: 10,
  },
  set name(value) {
    this[DATA].name = value;
  },
  get name() {
    return this[DATA].name;
  }
}

// user.name = "ppp";
console.log(user);