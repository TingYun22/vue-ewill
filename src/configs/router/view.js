export function modulesView(module, name) {
  return function (resolve) {
    require(['@/modules/' + module + '/views/' + name + '.vue'], resolve)
  }
}
