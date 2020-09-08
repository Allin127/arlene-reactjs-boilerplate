import { initState } from './state'


export function initMixin (Page) {
  Page.prototype._init = function(options){
    const vm = this
    vm._isPage = true;

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = options
    }
    vm._renderProxy = vm

    initState(vm)

    vm.$mount(vm.$options.el)
  }

}

export function initInternalComponent(vm, options) {

}
