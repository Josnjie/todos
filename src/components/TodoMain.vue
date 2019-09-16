<template>
  <section class="main TodoMain">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: item.flag, editing: item.id === now }" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.flag" @change="changetodo(item.id)"/>
          <label @dblclick="dbTodo(item.id)">{{ item.name }}</label>
          <button class="destroy" @click="deltodo(item.id)"></button>
        </div>
        <input @keyup.enter="editTodo" class="edit" :value=" item.name " />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      now: -1
    }
  },
  // 计算属性， 只要值发生变化重新计算
  computed: {
    // list () {
    //   return this.$store.state.list
    // }
    ...mapState(['list'])
  },
  // vuex 中的数据交给vuex去改
  methods: {
  // 删除
    // deltodo (id) {
    //   this.$store.commit('deltodo', id)
    // },
    // // 修改flag
    // changetodo (id) {
    //   this.$store.commit('changetodo', id)
    // },
    ...mapMutations(['deltodo', 'changetodo']),
    // 双击出现对话框
    dbTodo (id) {
      console.log(id)
      this.now = id
    },
    // 修改
    editTodo (e) {
      this.$store.commit('editTodo', {
        id: this.now,
        name: e.target.value
      })
      this.now = -1
    }
  }
}
</script>

<style>

</style>
