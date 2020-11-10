// import {Arl} from './fmk/mp-service-js-framework'
import {Arl} from 'MPService'
// h, patch, proxy, 
// window._sd =()=>{
//     alert(123);
// }

// var vnode = h("div", [h("img", {
//     attrs: {
//         src: "avatar.png",
//         className: "profile"
//     }
// }), h("h3", ["text"]), h("h3", ["text2"])]);

// let domNode = document.querySelector("#root");
// patch(domNode, vnode);


// var testProxy = {a:"1",b:"2",_mydata:{a:"3",b:"4"}};
// proxy(testProxy,"_mydata","a");
// proxy(testProxy,"_mydata","b");
// console.log("proxy测试",testProxy.a,testProxy.b);



var vm = new Arl({
    el: '#app',
    data: {
        title: 'prev',
        num: 1,
        // watchMsg:"init watch"
    },
    // computed: {
    //     computedNum() {
    //         return this.num * 10
    //     }
    // },
    // watch: {
    //     num(newVal, oldVal) {
    //       this.watchMsg = newVal + ' apples'
    //     },
    //   },
    render(h) {
        // return h("div", [h('button', { on: { click: this.someFn } }, this.num), h("img", {
        //     attrs: {
        //         src: require("../assets/lss-small.jpg"),
        //         className: "profile"
        //     }
        // }), h("h3", ["text"]), h("h3", ["text2"])]);
    },
    methods: {
        someFn() {
            this.num++;
        }
    }
});
console.log(Arl)
var timerId = setInterval(function(){vm.someFn()},2000);
setTimeout(function(){clearInterval(timerId)},9000);


