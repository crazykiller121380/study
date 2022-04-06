// 使用访问器保护数据
const user = {
  data: {
    name: 'yangtianqi',
    age: 18
  },
  set age(value) {
    if (typeof value != 'number') {
      throw new Error("年龄格式错误");
    }
    this.data.age = value;
  },
  get age() {
    return this.data.age + '岁';
  }
}

user.age = 97;
console.log(user.age);