import { initMixin } from './init'
import { dataMixin } from './data'
// import { stateMixin } from './state'
// import { lifecycleMixin } from './lifecycle'
import { renderMixin } from './render'
export function Arl(options) {
    this._init(options);
}

initMixin(Arl);
dataMixin(Arl);
renderMixin(Arl);
// stateMixin(Arl);
// lifecycleMixin(Arl);
// renderMixin(Arl);
