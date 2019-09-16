import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './style/base.css'
import './style/index.css'
// import TodoHeader from './components/TodoHeader'

Vue.config.productionTip = false

// 自定义组件 ，（全局注册）
// Vue.component('todo-header', TodoHeader)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
