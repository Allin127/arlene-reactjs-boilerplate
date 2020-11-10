

const queue = [];
const renderQueue = [];
var flushID = 0;
export function enqueueSetData(dataChange, component) {
  if (queue.length === 0) {
    console.log("flush hahahaha:" + (++flushID))
    defer(flush);
  }
  queue.push({
    dataChange,
    component
  });
  // 如果renderQueue里没有当前组件，则添加到队列中
  if (!renderQueue.some(item => item === component)) {
    renderQueue.push(component);
  }
}

let defer = function (fn) {
  return Promise.resolve().then(fn);
}

function flush() {
  let item;
  // 遍历
  while (item = queue.shift()) {
    const { dataChange, component } = item;
    // 如果没有prevState，则将当前的state作为初始的prevState
    // if (!component._prevData) {
    //   component._prevData = Object.assign({}, component._data);
    // }

    // TODO:考虑设置是方法 如果dataChange是一个方法，也就是setState的第二种形式
    // if ( typeof dataChange === 'function' ) {
    //     Object.assign( component.state, dataChange( component.prevState, component.props ) );
    // } else {
    Object.assign(component._data, dataChange);
    // }
    // 渲染每一个组件
    // component._prevData = component._data;
  }
  //真正触发渲染
  let renderComp;
  while (renderComp = renderQueue.shift()) {
    renderComp._render();
  }
}
