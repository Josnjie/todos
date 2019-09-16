import Vue from 'vue'
import Vuex from 'vuex'

// 需要use 一下
Vue.use(Vuex)

const state = {
  list: [
    { id: 1, name: '唐浩博', flag: false },
    { id: 2, name: '刘金池', flag: true },
    { id: 3, name: '毛毛虫', flag: true }
  ]
}

const mutations = {
  // 删除
  deltodo (state, id) {
    state.list = state.list.filter(item => item.id !== id)
  },
  // 添加
  addtodo (state, className) {
    state.list.unshift({
      id: +new Date(),
      name: className,
      flag: false
    })
  },
  // 修改falg
  changetodo (state, id) {
    const str = state.list.find(item => item.id === id)
    str.flag = !str.flag
  },
  // 修改值
  editTodo (state, payLoad) {
    // 根据id 找到对应框的值进行修改name
    const todo = state.list.find(item => item.id === payLoad.id)
    todo.name = payLoad.name
  },

  clearTodos (state) {
    state.list = state.list.filter(item => !item.flag)
  }
}

const getters = {
  todolenth (state) {
    return state.list.length
  },
  isTodo (state) {
    return state.list.length > 0
  },
  isShowClear (state) {
    return state.list.filter(item => !item.flag).length
  },
  isg (state) {
    return state.list.some(item => item.flag)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  strict: true
})

// 导出
export default store
