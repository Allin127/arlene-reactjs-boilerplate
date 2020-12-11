var _fetch = require("node-fetch");

// var bodys =  ['VenueID=7&uids=1562253&ac=1111_qiang&did=288','VenueID=7&uids=1562253&ac=1111_qiang&did=287']
var fetch = function (url, params) {
  // params.body=bodys[0]+"&sid="+Math.random();
  _fetch(url, params).then(function (response) { return response.json() }).then(function (data) {
    console.log((new Date()).toLocaleTimeString(), params.body, data.msg)
    if (params.body, data.msg.indexOf("恭喜") > -1 || params.body, data.msg.indexOf("抢光") > -1 || params.body, data.msg.indexOf("领完") > -1) {
      // bodys.shift()
    }
  });
}


var f1 = function () {
  fetch('https://phdjapp.ucantech.com/home/couponget', {
    method: 'POST',
    headers: {
        'sec-fetch-mode': 'cors',
        'origin': 'https://phdjapp.ucantech.com',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'x-requested-with': 'XMLHttpRequest',
        'cookie': 'ASP.NET_SessionId=5rt3lce12mi0boqf3sbp5m2g; Media=no=124599085C195F4DC0AA801B81307420; UM_distinctid=1762b6a2fe4344-000925b5e6f02c-621c4653-51a6b-1762b6a2fecf8; Hm_lvt_2856c873410ac9615e28f285edc30d98=1606779292,1607046149; memberuser=no=e9df5%3a%3a30ffe437%3cVHzVWnXuNU%5ckelW%3c8dg706hgf17gd769P; CNZZDATA1278910924=860039358-1607044041-%7C1607082052; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1607082619; SERVERID=88f940f68e86a245b3a3ff789d73a89b|1607082627|1607082619',
        'pragma': 'no-cache',
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; MIX 3 Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045410 Mobile Safari/537.36;phdj',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'cache-control': 'no-cache',
        'authority': 'phdjapp.ucantech.com',
        'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=7bbf9d37-9d98-46fd-933a-767da6d047fa',
        'sec-fetch-site': 'same-origin'
    },
    body: 'VenueID=7&uids=615580&ac=1111_qiang&did=371&sid=0.4445925956894059'
});

fetch('https://phdjapp.ucantech.com/home/couponget', {
    method: 'POST',
    headers: {
        'sec-fetch-mode': 'cors',
        'origin': 'https://phdjapp.ucantech.com',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'x-requested-with': 'XMLHttpRequest',
        'cookie': 'ASP.NET_SessionId=5rt3lce12mi0boqf3sbp5m2g; Media=no=124599085C195F4DC0AA801B81307420; UM_distinctid=1762b6a2fe4344-000925b5e6f02c-621c4653-51a6b-1762b6a2fecf8; Hm_lvt_2856c873410ac9615e28f285edc30d98=1606779292,1607046149; memberuser=no=e9df5%3a%3a30ffe437%3cVHzVWnXuNU%5ckelW%3c8dg706hgf17gd769P; CNZZDATA1278910924=860039358-1607044041-%7C1607082052; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1607082619; SERVERID=88f940f68e86a245b3a3ff789d73a89b|1607082627|1607082619',
        'pragma': 'no-cache',
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; MIX 3 Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045410 Mobile Safari/537.36;phdj',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'cache-control': 'no-cache',
        'authority': 'phdjapp.ucantech.com',
        'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=7bbf9d37-9d98-46fd-933a-767da6d047fa',
        'sec-fetch-site': 'same-origin'
    },
    body: 'VenueID=7&uids=615580&ac=1111_qiang&did=369&sid=0.4445925956894059'
});

}

var fn = function () {
  var s = setInterval(f1, 400);
  return s;
}

var startFun = function () {
  console.log("启动开始");
  console.warn((new Date()).toLocaleTimeString());
  var st;
  for (var i = 0; i < 1; i++) {
    st = fn();
  }
  setTimeout(function () { clearInterval(st) }, 20 *1000);
}

// startFun()
var ttl = ((new Date("2020-12-04 19:59:55")) - (new Date()));
console.log("当前时间:" + (new Date()).toLocaleTimeString())
console.log("剩余时间" + parseInt(ttl / 1000))
setTimeout(startFun, ttl);

