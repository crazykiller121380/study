function upload(params) {
  let config = {
    type: "*.jpg",
    size: "1000"
  }
  config = { ...config, ...params};
  console.log(config);
}

upload({size: "10", type: "*.gif"})