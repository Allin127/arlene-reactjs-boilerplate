import {Arl} from '../../../Core/instance'
import { mountComponent } from '../../../Core/instance/lifecycle'

Arl.prototype.$mount = function (el) {
  return mountComponent(this, el)
}
export {Arl}
