var _fetch = require("node-fetch");
var fetch = function(url,params) {
  _fetch(url,params).then(function (response) { return response.json() }).then(function (data) { console.warn(params.body,data.msg) });
}
var fn = function () {
  var s = setInterval(function (){ 
   
fetch('https://phdjapp.ucantech.com/home/couponget', {
  method: 'POST',
  headers: {
      'cookie': 'ASP.NET_SessionId=mlfgbl3ighcfl5n5dku0f3jm; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=856bg58ce%3ae259e8WI%7bSXoYrOV%5dhfmX9ccg2834ff444eh971; UM_distinctid=175acd88075e6-012c873420f1af-6c4d0816-51a6b-175acd8807611; CNZZDATA1278910924=1931704191-1604919063-%7C1604919063; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604922672; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604922672; SERVERID=88f940f68e86a245b3a3ff789d73a89b|1604922706|1604922670',
      'origin': 'https://phdjapp.ucantech.com',
      'accept-language': 'zh-CN,en-US;q=0.9',
      'x-devtools-emulate-network-conditions-client-id': '4A3A00F0E8A26FDD3B04574F18C54C67',
      'x-requested-with': 'XMLHttpRequest',
      'pragma': 'no-cache',
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; MIX 3 Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36;phdj',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'accept': 'application/json, text/javascript, */*; q=0.01',
      'cache-control': 'no-cache',
      'authority': 'phdjapp.ucantech.com',
      'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=22106dc5-f565-4f5a-ae6b-b7585a79feff'
  },
  body: 'VenueID=7&uids=563795&ac=1111_qiang&did=230&sid=0.23619972139909762'
});


},400);
return s;
}

var startFun = function () {
console.log("启动开始");
console.warn((new Date()).toLocaleTimeString());
var st;
for (var i = 0; i < 1; i++) {
  st = fn();
}
  setTimeout(function () { clearInterval(st) },4000);
}

startFun()
// //实际启动
// var ttl =((new Date("2020-11-6 12:00:00")) - (new Date()));
// console.log("当前时间:"+(new Date()).toLocaleTimeString())
// console.log("剩余时间"+parseInt(ttl/1000))
// setTimeout(startFun, ttl);


// //保活
// var ssi = 0;
// var max_ssi = 8;
// var sss = setInterval(
//   function(){
//     ssi++;
//     fetch('https://phdjapp.ucantech.com/home/couponget', {
//       method: 'POST',
//       headers: {
//           'Host': 'phdjapp.ucantech.com',
//           'accept': 'application/json, text/javascript, */*; q=0.01',
//           'origin': 'https://phdjapp.ucantech.com',
//           'x-requested-with': 'XMLHttpRequest',
//           'user-agent': 'Mozilla/5.0 (Linux; Android 10; GM1910 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045410 Mobile Safari/537.36',
//           'sec-fetch-mode': 'cors',
//           'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//           'sec-fetch-site': 'same-origin',
//           'referer': 'https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=304cabc9-5179-47e3-9511-36e16a7286ab',
//           'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
//           'Cookie': 'ASP.NET_SessionId=30fge3sgallmrfmbp5bkr3df; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=5%3a%3a2gh65574c5d91WH%5dSWm4rNZITWG%5dO%5bJrwPS%40%3d%3a33ff9h2g%3bgf244eA; UM_distinctid=17598f73db41f5-09944b3d75ad36-401f0566-59b90-17598f73db519c; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604591064; CNZZDATA1278910924=721985618-1604587879-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604624847; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604628162; SERVERID=d324a9f9bedeb6fd4fa34c12dd57422c|1604628162|1604627278'
//       },
//       body: 'VenueID=7&uids=1562253&ac=1111mj&did=2279&sid=0.20817721266762446'
//     });
//     if(ssi>=max_ssi){
//       clearInterval(sss);
//     }
//   }
//   ,60000*6);




    



