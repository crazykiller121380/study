let user = {
  name: 'SJ',
  age: 18,
  position: 'student',
  // 自定义序列化 js对象变为字符串
  toJSON: function() {
    return {
      title: this.name
    };
  }
};

// let json = JSON.stringify(user, ["name", "age"], 2);
let json = JSON.stringify(user, null, 2);
console.log(json);

let obj = JSON.parse(json, (key, value) => {
  if(key == "name") {
    value = "SJ-" + value;
  }
  return value;
})
console.log(obj);

let arr = ["php", "study"];
let arrjson = JSON.stringify(arr, null, 2);
console.log(arrjson);