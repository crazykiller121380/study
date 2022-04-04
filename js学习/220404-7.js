function upload(params) {
  let option = {
    size: 9999
  };
  // 使用assign进行合并
  return Object.assign(option, params);
}

console.log(JSON.stringify(upload({size:99, num: 90}), null, 2));