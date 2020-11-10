
/** snabbdom **/
import { classModule } from 'snabbdom/build/package/modules/class'
import { propsModule } from 'snabbdom/build/package/modules/props'
import { attributesModule } from 'snabbdom/build/package/modules/attributes'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h' // helper function for creatin*g vnodes
import { toVNode } from 'snabbdom/build/package/tovnode'
var patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
  attributesModule
])

export { patch, h, toVNode }

