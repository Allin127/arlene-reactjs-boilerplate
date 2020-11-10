var _fetch = require("node-fetch");
var fetch = function(url,params) {
  _fetch(url,params).then(function (response) { return response.json() }).then(function (data) { console.warn(params.body,data.msg) });
}
var fn = function () {
  var s = setInterval(function (){

    
    fetch('https://phdjapp.ucantech.com/home/couponget', {
      method: 'POST',
      headers: {
          'Host': 'phdjapp.ucantech.com',
          'accept': 'application/json, text/javascript, */*; q=0.01',
          'origin': 'https://phdjapp.ucantech.com',
          'x-requested-with': 'XMLHttpRequest',
          'user-agent': 'Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045410 Mobile Safari/537.36',
          'sec-fetch-mode': 'cors',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'sec-fetch-site': 'same-origin',
          'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=8dfb7cbf-bca4-4f8f-a788-94b8de0c8f0c',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7',
        'cookie': 'ASP.NET_SessionId=t32xpj0kuzhazpddm1mah13g; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=%3c8bg5f74gfec75cdYG2yUk2XQVWcP2N%3b%3c8be7ee44758%3ceg4K; UM_distinctid=1759cc55cf6460-05f61828a26713-26592509-49599-1759cc55cf7258; CNZZDATA1278910924=1807175806-1604649496-%7C1604649496; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604587477; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604652982; SERVERID=d324a9f9bedeb6fd4fa34c12dd57422c|1604652983|1604652980'
      },
      body: 'VenueID=7&uids=1562253&ac=1111mj&did=2279&sid=0.2342345'
    });




//   var fetch = require('node-fetch');

// fetch('https://phdjapp.ucantech.com/home/couponget', {
//     method: 'POST',
//     headers: {
//         'Host': 'phdjapp.ucantech.com',
//         'accept': 'application/json, text/javascript, */*; q=0.01',
//         'x-requested-with': 'XMLHttpRequest',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
//         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'origin': 'https://phdjapp.ucantech.com',
//         'sec-fetch-site': 'same-origin',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-dest': 'empty',
//         'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=5bf00352-6b27-497a-a093-102b8e79fb9f',
//         'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7',
//         'Cookie': 'ASP.NET_SessionId=danjpvpygpnkltrsob5ycvh4; UM_distinctid=174fe451ce3c54-0c3868165def8e-316c7304-1aeaa0-174fe451ce5d9d; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=a1h84ce5ac3e4c49VG%5cVVl3uMYHWVF%5cRZIqzOR%3f%409%3ahhf5g821%3b776%3ai%3c; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604587477; SERVERID=88f940f68e86a245b3a3ff789d73a89b|1604587879|1604587189; CNZZDATA1278910924=1072148627-1601991728-%7C1604587879; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604587880'
//     },
//     body: 'VenueID=7&uids=1562253&ac=1111_qiang&did=207&sid=0.9734571540945902'
// }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });


// var fetch = require('node-fetch');

// fetch('https://phdjapp.ucantech.com/home/couponget', {
//     method: 'POST',
//     headers: {
//         'Host': 'phdjapp.ucantech.com',
//         'accept': 'application/json, text/javascript, */*; q=0.01',
//         'x-requested-with': 'XMLHttpRequest',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
//         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'origin': 'https://phdjapp.ucantech.com',
//         'sec-fetch-site': 'same-origin',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-dest': 'empty',
//         'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=9e09f7e2-1808-4c50-813f-129c58bf5104',
//         'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7',
//         'Cookie': 'ASP.NET_SessionId=danjpvpygpnkltrsob5ycvh4; UM_distinctid=174fe451ce3c54-0c3868165def8e-316c7304-1aeaa0-174fe451ce5d9d; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=a1h84ce5ac3e4c49VG%5cVVl3uMYHWVF%5cRZIqzOR%3f%409%3ahhf5g821%3b776%3ai%3c; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604587477; CNZZDATA1278910924=1072148627-1601991728-%7C1604587879; SERVERID=88f940f68e86a245b3a3ff789d73a89b|1604588044|1604587189; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604588045'
//     },
//     body: 'VenueID=7&uids=1562253&ac=1111_qiang&did=207&sid=0.713425613352896'
// });

// var fetch = require('node-fetch');

// fetch('https://phdjapp.ucantech.com/home/couponget', {
//     method: 'POST',
//     headers: {
//         'Host': 'phdjapp.ucantech.com',
//         'accept': 'application/json, text/javascript, */*; q=0.01',
//         'x-requested-with': 'XMLHttpRequest',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
//         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'origin': 'https://phdjapp.ucantech.com',
//         'sec-fetch-site': 'same-origin',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-dest': 'empty',
//         'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=14c8e416-fb1a-496d-bc8c-95127c08493c',
//         'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7',
//         'Cookie': 'ASP.NET_SessionId=danjpvpygpnkltrsob5ycvh4; UM_distinctid=174fe451ce3c54-0c3868165def8e-316c7304-1aeaa0-174fe451ce5d9d; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=a1h84ce5ac3e4c49VG%5cVVl3uMYHWVF%5cRZIqzOR%3f%409%3ahhf5g821%3b776%3ai%3c; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604587477; CNZZDATA1278910924=1072148627-1601991728-%7C1604587879; SERVERID=88f940f68e86a245b3a3ff789d73a89b|1604588254|1604587189; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604588255'
//     },
//     body: 'VenueID=7&uids=1562253&ac=1111_qiang&did=207&sid=0.3187600177443417'
// });
  },600);

  return s;
}

var startFun = function () {
  console.log("启动开始");
  console.warn((new Date()).toLocaleTimeString());
  var st;
  for (var i = 0; i < 1; i++) {
    st = fn();
  }
  setTimeout(function () { clearInterval(st) }, 4000);
}
startFun();
