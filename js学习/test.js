const words = ["php", "css"];
const strings = "我喜欢学习php和css";
const status = words.some(word => {
  return strings.includes(word);
})
console.log(status);