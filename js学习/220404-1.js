let name1 = "yangtianqi";
let grade = [
  { name: "js", score: 99 },
  { name: "docker", score: 80 }
];
function average1(grade, name) {
  let averageRes = grade.reduce((f, s) => f + s.score, 0);
  // return name + ":" + averageRes / grade.length + "分";
  return `${ name }:${ averageRes / grade.length }分`
}
// console.log(average1(grade, name1))

let user = {
  name: 'yangtianqi',
  grade: [
    { name: "js", score: 99 },
    { name: "docker", score: 80 }
  ],
  average: function() {
    let averageRes = this.grade.reduce((f, s) => f + s.score, 0);
    return `${ this.name }:${ averageRes / this.grade.length }分`
  }
}
console.log(user.average())

// let name = "向军";
// let grade = [
//   { lesson: "js", score: 99 },
//   { lesson: "mysql", score: 85 }
// ];
// function average(grade, name) {
//   const total = grade.reduce((t, a) => t + a.score, 0);
//   return name + ":" + total / grade.length + "分";
// }
// console.log(average(grade, name));
