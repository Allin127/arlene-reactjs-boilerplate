import {h,patch} from 'snb'

var vnode = h("div", [h("img", {
    attrs: {
        src: "avatar.png",
        className: "profile"
    }
}), h("h3", ["text"]), h("h3", ["text2"])]);

let domNode = document.querySelector("#root");
patch(domNode, vnode);