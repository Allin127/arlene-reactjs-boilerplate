import _ from 'lodash'

export default function (target) {
    var targetDom = target || window;
    //检测用户在什么地方停留
    var sd = {
        track: function (type, param) {
            console.log(type, param);
        }
    }
    _.addEvent = function () {
        function fixEvent(event) {
            if (event) {
                event.preventDefault = fixEvent.preventDefault;
                event.stopPropagation = fixEvent.stopPropagation;
                event._getPath = fixEvent._getPath;
            }
            return event;
        }
        fixEvent._getPath = function () {
            var ev = this;
            var polyfill = function () {
                try {
                    var element = ev.target;
                    var pathArr = [element];
                    if (element === null || element.parentElement === null) {
                        return [];
                    }
                    while (element.parentElement !== null) {
                        element = element.parentElement;
                        pathArr.unshift(element);
                    }
                    return pathArr;
                } catch (err) {
                    return [];
                }

            };
            return this.path || (this.composedPath && this.composedPath()) || polyfill();
        };
        fixEvent.preventDefault = function () {
            this.returnValue = false;
        };
        fixEvent.stopPropagation = function () {
            this.cancelBubble = true;
        };


        var register_event = function (element, type, handler) {
            var useCapture = true;
            if (element && element.addEventListener) {
                element.addEventListener(type, function (e) {
                    e._getPath = fixEvent._getPath;
                    handler.call(this, e);
                }, useCapture);
            } else {
                var ontype = 'on' + type;
                var old_handler = element[ontype];
                element[ontype] = makeHandler(element, handler, old_handler);
            }
        };

        function makeHandler(element, new_handler, old_handlers) {
            var handler = function (event) {
                event = event || fixEvent(window.event);
                if (!event) {
                    return undefined;
                }
                event.target = event.srcElement;

                var ret = true;
                var old_result, new_result;
                if (typeof old_handlers === 'function') {
                    old_result = old_handlers(event);
                }
                new_result = new_handler.call(element, event);
                if ((false === old_result) || (false === new_result)) {
                    ret = false;
                }
                return ret;
            };
            return handler;
        }

        register_event.apply(null, arguments);
    };



    var interDelay = function (param) {
        var interDelay = {};
        interDelay.timeout = param.timeout || 1000;
        interDelay.func = param.func;
        interDelay.hasInit = false;
        interDelay.main = _.debounce(function (para) {
            this.func(para);
        }, param.timeout);


        interDelay.go = function () {
            var para = {};
            console.log("debounce1",targetDom.scrollTop)
            para.$viewport_position = targetDom.scrollTop || 0;
            para.$viewport_position = Math.round(para.$viewport_position) || 0;
            para.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
            para.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
            interDelay.main(para);
        };
        return interDelay;
    };


    var delayTime = interDelay({
        timeout: 4000,
        func: function (para) {
            var offsetTop = targetDom.scrollTop;
            console.log("debounce2",targetDom.scrollTop)
            var current_time = new Date();
            var delay_time = current_time - this.current_time;
            console.log("debounce",delay_time,offsetTop - para.$viewport_position)
            if ((delay_time > 4000 && offsetTop - para.$viewport_position !== 0)) {
                para.$url = location.href;
                para.$title = document.title;
                para.$url_path = location.pathname;
                para.$viewport_position = offsetTop;
                para.event_duration = parseInt(delay_time) / 1000;
                sd.track('$WebStay', para);
            }
            this.current_time = current_time;
        }
    });

    delayTime.current_time = new Date();
    //工具方法 检测参数是否检测页面停留
    var checkPage = function () {
        return true;
    };

    //开始监控
    _.addEvent(targetDom, 'scroll', function () {
        //这里可以增加类似url白名单或者系统开关配置等
        if (!checkPage()) {
            return false;
        }
        delayTime.go();
    });
}

