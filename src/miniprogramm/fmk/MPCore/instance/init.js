import { initState } from './state'

/** todo 组件渲染 _c方法 **/
// import { initRender } from './render' 

let uid = 0;
//扩展init方法
export function initMixin (Arl) {
  Arl.prototype._init = function(options){
    const vm = this;
    vm._isArl = true;
    vm._uid = uid++;
    vm.$options = options;
    initState(vm);
    vm.setData();
    /** todo:组件相关 */
    // if (options && options._isComponent) {
    //   initInternalComponent(vm, options)
    // } else {
      // vm.$options = options;
    // }
    // vm._renderProxy = vm

    /** todo:组件相关 */
    // initRender(vm)

    // callHook(vm, 'beforeCreate')

    // initState(vm);
    //if (vm.$options.el) {
      // vm.$mount(vm.$options.el)
      // vm.setData();
    // }
  }

}

export function initInternalComponent(vm, options) {

}
