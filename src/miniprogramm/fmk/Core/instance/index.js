import { initMixin } from './init'
import { stateMixin } from './state'
import { lifecycleMixin } from './lifecycle'
import { renderMixin } from './render'
export function Arl(options) {
    this._init(options);
}

initMixin(Arl);
stateMixin(Arl);
lifecycleMixin(Arl);
renderMixin(Arl);
