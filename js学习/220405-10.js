// 使用代理控制函数
function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}

let proxy = new Proxy(factorial, {
  apply(func, obj, args) {
    console.time("factorial");
    func.apply(this, args);
    console.timeEnd("factorial");
  }
});

proxy.apply({}, [10000]);