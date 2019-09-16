<template>
<!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer TodoFooter" v-if="isTodo">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count">
      <strong>{{ isShowClear }}</strong> item left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="isg" @click="clearTodos" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  // computed: {
  //   isTodo () {
  //     return this.$store.getters.isTodo
  //   },
  //   isShowClear () {
  //     return this.$store.getters.isShowClear
  //   },
  //   isg () {
  //     return this.$store.getters.isg
  //   }
  // }
  computed: { ...mapGetters(['isTodo', 'isShowClear', 'isg']) },

  methods: {
    // clearTodos () {
    //   console.log(1)
    //   this.$store.commit('clearTodos')
    // }
    ...mapMutations(['clearTodos'])
  }
}
</script>

<style>

</style>
