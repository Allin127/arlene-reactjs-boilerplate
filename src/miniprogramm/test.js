import { Arl } from './fmk/mp-service-js-framework'


var vm = new Arl({
    el: '#app',
    data: {
        title: 'It is Title',
        num: 1
    },
    // methods: {
        someFn() {
            var num = ++this.num;
            this.setData({ num });
        }
    // }

});

var timerId = setInterval(function () { vm.someFn();vm.someFn();vm.someFn();vm.someFn();vm.someFn(); }, 2000);
setTimeout(function () { clearInterval(timerId) }, 9000);


