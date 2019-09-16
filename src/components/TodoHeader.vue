<template>
  <header class="header TodoHeader">
      <h1>todos</h1>
      <input  v-model="className" class="new-todo" placeholder="What needs to be done?" @keyup.enter="addtodo"/>
  </header>
</template>

<script>
export default {
  data () {
    return {
      className: ''
    }
  },
  methods: {
    addtodo () {
      this.$store.commit('addtodo', this.className)
      this.className = ''
    }
  }
}
</script>

<style>

</style>
