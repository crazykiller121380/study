// var CQueue = function() {
//   this.stack1 = [];
//   this.stack2 = [];
// };

// /** 
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function(value) {
//   this.stack1.push(value);
//   return null;
// };

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function() {
//   // console.log(this.stack1);
//   if(this.stack2.length !=0) {
//     return this.stack2.pop();
//   } else {
//     if (this.stack1.length == 0) {
//       return -1;
//     } else {
//       console.log('常旭',this.stack1.length);
//       for (let i=0;i<this.stack1.length;i++) {
//         this.stack2.push(this.stack1.pop());
//         console.log('yunxing1');
//       }
//       // console.log(this.stack2);
//       // console.log(this.stack1);
//       return this.stack2.pop();
//     }
//   }
// };

// var obj = new CQueue();
// console.log(obj.appendTail(1));
// console.log(obj.appendTail(2));
// console.log(obj.deleteHead());
// console.log(obj.appendTail(3));
// console.log(obj.deleteHead());
// console.log(obj.deleteHead());


var CQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value);
  return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if(this.stack2.length !=0) {
    return this.stack2.pop();
  } else {
    if (this.stack1.length == 0) {
      return -1;
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */