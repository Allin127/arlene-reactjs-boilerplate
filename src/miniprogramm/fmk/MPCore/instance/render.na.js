// import { h } from 'snabbdom/build/package/h'
import { patch, h, toVNode } from '../../mp-page-js-framework'

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
    _c(this._pageId, this._data);
  }

}