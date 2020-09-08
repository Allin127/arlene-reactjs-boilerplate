// import Page from './platforms/web/entry-runtime'

// var vm = new Page({
//   el: '#app',
//   data: {
//     title: 'prev',
//     num: 1,
//     deep: {
//       num: 1
//     }
//   },

//   methods: {
//     someFn() {
//       this.num++
//     }
//   },  render(h) {
//     return h('button', {on: {click: this.someFn}}, this.num);
//   }
// })

// console.log(vm);

import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
import { propsModule } from 'snabbdom/build/package/modules/props'
import { attributesModule } from 'snabbdom/build/package/modules/attributes'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes
import { toVNode } from 'snabbdom/build/package/tovnode'
var patch = init([ // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
    attributesModule
  ])
   

//  function h(){
//     if(arguments.length>3){
//       return pf.call(this,arguments[0],arguments[1],Array.prototype.slice.call(arguments,2))
//     }else{
//       return pf.apply(this,arguments);
//     }
//  } 
// let vnode = h('wxview', 'Hello World');


// let app = document.querySelector("body");
// console.log(toVNode(`<view class="container">
// <view class="userinfo">
//   <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
//   <block wx:else>
//     <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
//     <text class="userinfo-nickname">{{userInfo.nickName}}</text>
//   </block>
// </view>
// <view class="usermotto">
//   <text class="user-motto">{{motto}}</text>
// </view>
// </view>`))

var vnode = h("div", [h("img", {
  attrs: {
    src: "avatar.png",
    className: "profile"
  }
}), h("h3", ["text"]), h("h3", ["text2"])]);

let domNode = document.querySelector("#root");
patch(domNode,vnode);