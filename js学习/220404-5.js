// let test = {};
// test.name = "yangtianqi";
// test["age"] = 19;
// 检测是否含有某个属性
// console.log(test.hasOwnProperty("age"))

// arr = [];
// 只检查自己
// console.log(arr.hasOwnProperty("length"))
// 检查自己和父亲
// console.log("concat" in arr)

// let a = {
//   name: 'yangtianqi'
// };
// let b= {
//   url: 'www.baidu.com'
// };
// // 给a设置一个父亲b
// Object.setPrototypeOf(a, b);
// console.log(a.url);
// console.log("url" in a)

// 做检测功能
function oss(option) {
  if (!option.hasOwnProperty("port")) {
    throw new Error("必须设置主机端口");
  }
}
oss({ user: 'admin' })

