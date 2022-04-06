let lessons = {
  lists: [
    { name: "js", price: 100 },
    { name: "php", price: 80 },
    { name: "linux", price: 90 }
  ],
  get total() {
    return this.lists.reduce((t, c) => t = t + c.price, 0);
  }
}

console.log(lessons.total);