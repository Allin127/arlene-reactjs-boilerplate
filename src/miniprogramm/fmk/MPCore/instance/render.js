// import { h } from 'snabbdom/build/package/h'
import { patch, h, toVNode } from '../../../fmk/mp-page-js-framework'

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

    let vm = this;
    console.log(this);
    let vnode = h("div", [h('button', { on: { click: vm.someFn } }, vm.num,), h("img", {
      attrs: {
        src: require("../../../../assets/lss-small.jpg"),
        className: "profile"
      }
    }), h("h3", [vm.title]), h("h3", ["text2"])]);
    if (vm._vnode) {
      patch(vm._vnode, vnode)
    } else {
      patch(document.querySelector(vm.$options.el), vnode)
    }
    vm._vnode = vnode
    // const vm = this;
    // const { render, _parentVnode } = vm.$options;
    // vm.$vnode = _parentVnode;

    // let vnode = render.call(vm, h);
    // vnode.parent = _parentVnode;
    // return vnode;
  }

}