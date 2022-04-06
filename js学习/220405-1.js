// 抽象
function User(name, age) {
  // 私有属性和方法
  let data = { name, age };
  let info = function() {
    console.log(data.name);
  };
  // 外部可访问
  this.show = function() {
    info()
  };
}

let ytq = new User('yangtianqi');
ytq.show();