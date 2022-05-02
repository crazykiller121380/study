// 区块链
// block
// chain

// data
// 之前区块的hash
// 自己的hash
const sha256 = require('./sha256')
class Block {
  constructor(data, previousHash) {
    this.data = data
    this.previousHash = previousHash
    this.hash = this.computeHash()
  }

  computeHash() {
    return sha256(this.data + this.previousHash).toString()
  }
}

// 区块链
class Chain {
  constructor() {
    this.chain = [this.bigBang()]
  }

  bigBang() {
    const genesisBlock = new Block('祖先区块', '')
    return genesisBlock
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  // 添加到区块链上
  addBlockToChain(newBlock) {
    // data
    // 找到最近一个block的hash
    // 这个hash就是最近新区块的previousHash
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.computeHash()
    this.chain.push(newBlock)
  }

  // 验证这个区块链是否合法
  // 当前区块链是否被篡改
  // 验证区块的previousHash是否等于previous区块的hash
  validateChain() {
    if (this.chain.length === 1) {
      if (this.chain[0].hash !== this.chain[0].computeHash()) {
        return false
      }
      return true
    }
    // 从第二区块开始验证
    // 验证到最后一个区块
    for (let i=1; i<=this.chain.length-1; i++) {
      const blockToValidate = this.chain[i]
      if (blockToValidate.hash !== blockToValidate.computeHash()) {
        console.log('数据篡改')
        return false
      }
      // 验证previousHash
      const previousBlock = this.chain[i-1]
      if(blockToValidate.previousHash !== previousBlock.hash) {
        console.log('区块链断裂')
        return false
      }
    }
    return true
  }
}

const block = new Block('转10原', '123')
console.log(block)
const ytqChain = new Chain()
console.log(ytqChain)