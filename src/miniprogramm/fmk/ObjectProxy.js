
const noop = function(){}

const sharedPropertyDefinition = {
  enumerable: true,/** 是否可迭代 for in**/
  configurable: true, /** 能否删除当前属性 */
  get: noop,
  set: noop
}

/*
  target的key映射到sourceKey下
  比如：proxy(vm,"_data","key1"); 
  vm.key1 = vm._data.key1
*/
export function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

