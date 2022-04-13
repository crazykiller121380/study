<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的Dom元素</button>
    <school id="school" ref="sch"/>
  </div>
</template>

<script>
  import School from './components/SchoolView.vue'
  export default {
    name: 'App',
    components: { School },
    data() {
      return {
        msg: 'Study Vue'
      }
    },
    methods: {
      showDom() {
        console.log(this.$refs) // 对象中包含三个属性
        console.log(this.$refs.title) // 真实Dom元素
        console.log(this.$refs.sch) // School组件的实例对象（vc）
        console.log(document.querySelector("[id='school']"))
      }
    },
  }
</script>

<style>

</style>