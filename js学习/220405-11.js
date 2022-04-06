// 用代理对数组进行处理
lessons = [
  {
    title: '高等数学1-10单元详细解析'
  },
  {
    title: '高等元素论-草雷反应'
  }
]

let proxy = new Proxy(lessons, {
  get(array, key) {
    const title = array[key].title;
    const overLength = 4;
    array[key].title = title.length > overLength ? title.substr(0, overLength) + ".".repeat(3) : title;
    return array[key];
  }
})

console.log(proxy[0]);