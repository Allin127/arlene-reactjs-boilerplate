import { noop, isPlainObject } from '../util/index'
import { observe } from '../observer'
import Watcher from '../observer/watcher'
import Dep from '../observer/dep'


const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

const computedWatcherOptions = { lazy: true }

export function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState(vm) {
  const opts = vm.$options;
  
  //初始化data
  if (opts.data) {
    initData(vm);
  } 
  //将methods绑定到vm.xxx 并且将this指向vm
  initMethods(vm, opts);
}

/**
 * 1. 把data代理到_data
 * 2. 给data设置getter setter
 *
 * @param {*} vm
 */
function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? data.call(vm, vm)
    : data || {}
  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    proxy(vm, `_data`, key)
  }

  // observe(data, true /* asRootData */)
}

/**
 * 1. 根据白名单将methods绑定到vm.xxx
 * 2. 并且将this指向vm
 *
 * @param {*} vm
 */

const __EXCLUDE_KEY_WORDS = ["data"] 
function initMethods(vm, methods) {
  for (const key in methods) {
    if(__EXCLUDE_KEY_WORDS.indexOf(key)===-1){
      vm[key] = typeof methods[key] !== 'function' ? noop : methods[key].bind(vm)
    }
  }
}

function initComputed(vm, computed) {
  vm._computedWatchers = Object.create(null) // 用于保存计算watcher

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    vm._computedWatchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)

    defineComputed(vm, key, userDef)
  }
}

function defineComputed(target, key, userDef) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      debugger;
      const watcher = this._computedWatchers && this._computedWatchers[key]
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate()
        }
        if (Dep.target) {
          watcher.depend()
        }
        return watcher.value
      }
    },
    set: noop,
  })
}

function initWatch(vm, watch) {
  debugger;
  for (const key in watch) {
    const handler = watch[key]
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}

export function stateMixin(Arl) {
  Arl.prototype.$watch = function (expOrFn, cb, options) {
    const vm = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    // return function unwatchFn () {
    //   watcher.teardown()
    // }
  }
}