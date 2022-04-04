// 使用工厂函数创建对象
function user(name, age) {
  return {
    name,
    age,
    show() {
      console.log(this.name);
    },
    info() {
      console.log(this.age);
    }
  }
}

let ytq = user("yangtianqi", 18);
let ytq1 = user("yangtianqi1", 181);
ytq.show();
ytq1.info();