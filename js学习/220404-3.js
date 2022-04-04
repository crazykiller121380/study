// let user = {};
// let hd = user;
// user.name = "yangtianqi";
// console.log(hd.name);

let user = {
  name: 'yangtianqi'
};
function show(a) {
  a.age = 18;
  console.log(a);
}
show(user);
console.log(user);