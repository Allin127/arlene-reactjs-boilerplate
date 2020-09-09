import { h } from 'snabbdom/build/package/h'


/** todo:组件相关 */
/*
let cachaComp = {}

export function initRender (vm) {
  vm._c = (tag, options) => {
    var Ctor = vm.constructor.options['components'][tag]
    var sub
    // 缓存组件，避免已初始化的组件被重新初始化
    if (cachaComp[tag]) {
      sub = cachaComp[tag]
    } else {
      sub = cachaComp[tag] = new Ctor(Ctor.options)
    }
    return Ctor.options.render.call(sub, h)
    // const vnode = createComponent(Ctor, data, context, children, tag)
    // return vnode
  }
}

function createComponent(Ctor) {

}
*/
export function renderMixin (Arl) {
  Arl.prototype._render = function () {
    const vm = this;
    const { render, _parentVnode } = vm.$options;
    vm.$vnode = _parentVnode;

    let vnode = render.call(vm, h);
    vnode.parent = _parentVnode;
    return vnode;
  }

}