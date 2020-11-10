// web only
import {enqueueSetData} from './rqueue'


export function dataMixin(Arl) {
  Arl.prototype.setData = function (dataChange) {
    enqueueSetData(dataChange, this);
    /*
    let vm=this;
    Object.assign(vm._data,dataChange);
    _setWebData.call(this);
    */
  }
}

