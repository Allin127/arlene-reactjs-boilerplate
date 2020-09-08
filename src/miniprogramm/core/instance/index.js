import { initMixin } from './init'

function Page(options) {
  this._init(options)
}

initMixin(Page)


export default Page