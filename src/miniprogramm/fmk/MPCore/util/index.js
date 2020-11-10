
export * from './lang'


export function noop () {}


export function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}