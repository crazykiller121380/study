// 深拷贝（对象的属性中包含对象或者数组的情况）
let obj = {
  name: 'SJ',
  health: {
    heart: 72
  },
  list: []
}

function copy(obj) {
  let res = obj instanceof Array ? [] : {};
  for (const [k, v] of Object.entries(obj)) {
    res[k] = typeof v == "object" ? copy(v) : v;
  }
  return res;
}

let new_obj = copy(obj);
new_obj.list.push("arr");

console.log(JSON.stringify(obj, null, 2));
console.log(JSON.stringify(new_obj, null, 2));