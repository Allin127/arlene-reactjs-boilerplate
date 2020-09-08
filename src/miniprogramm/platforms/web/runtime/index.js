import Page from '../../../core/index'
import { mountComponent } from '../../../core/instance/lifecycle'

// install platform patch function
// Vue.prototype.__patch__ = patch
// public mount method
Page.prototype.$mount = function (el) {
  return mountComponent(this, el)
}

export default Page
