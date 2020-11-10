import { noop} from '../util/index'
import Watcher from '../observer/watcher'
// import {patch} from '../../index'
// var _c = function(a,b){console.log(b.num);}
export function mountComponent (vm, el) {
  vm.$el = el
  var hasBinding = false;
  let updateComponent = () => {
    //这里触发最后更新
    // vm.$options.render.call(vm);
    //trigger Watcher Binding
    if(!hasBinding){
      Object.keys(vm._data).forEach(function(key){
        vm._data[key];
      });
      hasBinding=true;
    }
    // console.log(123);
       
    // _c("/page/first",vm._data);
    vm.$options.render.call(vm);//同目录下的render.js文件中定义
    // vm._update(vnode) // 本文件中的_update方法
  }

  new Watcher(vm, updateComponent, noop)
}


export function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode) {
    // const vm = this
    // if (vm._vnode) {
    //     patch(vm._vnode, vnode)
    //   } else {
    //     patch(document.querySelector(vm.$el), vnode)
    //   }
    //   vm._vnode = vnode
  }
}