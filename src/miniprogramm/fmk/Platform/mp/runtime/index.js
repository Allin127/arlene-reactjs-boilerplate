import {Arl} from '../../../MPCore/instance'
import { mountComponent } from '../../../MPCore/instance/lifecycle'

Arl.prototype.$mount = function (el) {
  return mountComponent(this, el)
}
export {Arl}
