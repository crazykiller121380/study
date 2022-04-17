<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学校名称:{{ name1 }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        msg: 'props study'
      }
    },
    // 简单传值
    // props: ['name1', 'address']
    // 限定传值
    props: {
      name1: {
        type: String, // 限制数据类型
        required: true // 限制必须传值
      },
      age: {
        type: Number,
        default: 99 // 可以不传值，默认为99
      },
      address: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .school {
    background-color: grey;
  }
</style>