// 使用特征的形式定义访问器
// function User(name, age) {
//   let data = { name, age };
//   Object.defineProperties(this, {
//     name: {
//       get() {
//         return data.name;
//       },
//       set(value) {
//         data.name = value;
//       }
//     },
//     age: {
//       get() {
//         return data.age;
//       },
//       set(value) {
//         data.age = value;
//       }
//     }
//   })
// }

// let yyy = new User("yangtianqi", 18);
// console.log(yyy.name);

// 使用类
const DATA = Symbol();
class User {
  constructor(name, age) {
    this[DATA] = { name, age };
  }
  get name() {
    return this[DATA].name;
  }
  set name(value) {
    this[DATA].name = value;
  }
  get age() {
    return this[DATA].age;
  }
  set age(value) {
    this[DATA].age = value;
  }
}

let uu = new User('uuuu', 19);
console.log(uu);