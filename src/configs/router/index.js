import Vue from 'vue'
import Router from 'vue-router'

let modules = require.context('@/modules/', true, /^.*\/router\/index\.js$/)

const routes = []

modules.keys().forEach(function (module) {
  routes.push(...modules(module).default)
})

// 解決跳轉同一路由時會報錯
const ORIGINAL_PUSH = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return ORIGINAL_PUSH.call(this, location, onResolve, onReject)
  }
  return ORIGINAL_PUSH.call(this, location).catch((err) => err)
}
const ORIGINAL_REPLACE = Router.prototype.replace
Router.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return ORIGINAL_REPLACE.call(this, location, onResolve, onReject)
  }
  return ORIGINAL_REPLACE.call(this, location).catch((err) => err)
}

Vue.use(Router)

export default new Router({
  base: process.env.VUE_APP_MAIN_ROUTER_BASE,
  mode: 'hash', 

  routes,
})
