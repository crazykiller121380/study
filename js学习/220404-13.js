// 构造函数创建对象
function User(name) {
  this.name = name;
  this.show = function() {
    console.log(this.name);
  }
}

let SJ = new User("SJ");
SJ.show();