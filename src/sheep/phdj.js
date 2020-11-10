var fetch = require("node-fetch");
const HttpsProxyAgent = require('https-proxy-agent');
var useProxy = 'http://127.0.0.1:8888'; //false
var ip = "127.0.0.1";
var port = "8888";



for (var i = 0; i < 1; i++) {
    var st = setInterval(function () {
        fetch("https://phdjapp.ucantech.com/home/couponget", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://phdjapp.ucantech.com/home918/home?source=44481CBE557BDC73F63BB7D01D7B0A26&token=e726f1c3-bb3e-4e2e-960f-f227ee5e0266",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "VenueID=6&uids=563795&ac=918limit&did=2242&sid=" + Math.random(),
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });


    }, 20);
    setTimeout(function () { clearInterval(st) }, 60);

}




for (var i = 0; i < 1; i++) {
    var st = setInterval(function () {
        fetch("https://phdjapp.ucantech.com/home/couponget", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",

            },
            "referrer": "https://phdjapp.ucantech.com/home918/home?source=44481CBE557BDC73F63BB7D01D7B0A26&token=e726f1c3-bb3e-4e2e-960f-f227ee5e0266",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "VenueID=6&uids=563795&ac=918limit&did=2242&sid=" + Math.random(),
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });


    }, 20);
    setTimeout(function () { clearInterval(st) }, 60);

}






for (var i = 0; i < 1; i++) {
    var st = setInterval(function () {
        var fetch = require("node-fetch");
        fetch("https://phdjapp.ucantech.com/home/couponget", {
            "headers": {
              "accept": "application/json, text/javascript, */*; q=0.01",
              "accept-language": "zh-CN,en-US;q=0.9",
              "cache-control": "no-cache",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "pragma": "no-cache",
              "x-devtools-emulate-network-conditions-client-id": "5DF8E7483C8E6E6F93729F52EE7D7CA2",
              "x-requested-with": "XMLHttpRequest",
              "cookie": "ASP.NET_SessionId=mpenzmprkgwp3gxoa0lrsypi; memberuser=no=dd7f37e93e6%3a64egXJxTYpVsPWZignU%3ac%3a46%3b7d7%3a%3b9d4d9cF; UM_distinctid=17586f17e48265-0dde70fd5a0665-6c4d0816-51a6b-17586f17e49241; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604286776; Media=no=124599085C195F4DC0AA801B81307420; CNZZDATA1278910924=1574691971-1604284170-%7C1604326991; SERVERID=d324a9f9bedeb6fd4fa34c12dd57422c|1604328925|1604328923; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604328925",
              "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=a89d1a25-c77f-44dd-8379-db1b232f6b87"
            },
            "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=a89d1a25-c77f-44dd-8379-db1b232f6b87",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": "VenueID=7&uids=563795&ac=1111mj&did=2279&sid=" + Math.random(),
            "method": "POST",
            "mode": "cors"
          }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });
    }, 20);
    setTimeout(function () { clearInterval(st) }, 40000);
}



var fetchAft = function () {
   
    fetch("https://phdjapp.ucantech.com/home/couponget", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": "ASP.NET_SessionId=l5uxtjx401pfhzvwxyivbuwn; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=3gfeb%3ag8ch475e5cWI%7bSXoYrOV%5dhfmX9c3fb4g6e7fe6b295%5d; UM_distinctid=1757c08887e13-025c86c7dbde8-471d0566-59b90-1757c08887f127; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604103736; CNZZDATA1278910924=645950422-1604099855-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604277640; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604281559; SERVERID=d324a9f9bedeb6fd4fa34c12dd57422c|1604281664|1604280764",
            "referer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=abaa2f74-324c-4ff8-85ac-895e5fa0b9fc",
        },
        "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=abaa2f74-324c-4ff8-85ac-895e5fa0b9fc",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": "VenueID=7&uids=563795&ac=1111_qiang&did=191&sid=0.055824633128621404",
        "method": "POST",
        "mode": "cors"
    });
}






11/4
var fetch = require("node-fetch");
var fn = function () {
  var s = setInterval(function () {

    fetch("https://phdjapp.ucantech.com/home/couponget", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ASP.NET_SessionId=0piamd3e51vnzpn0ypqgksa3; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=%3b%3b16%3a51e26c16d56XJxTYpVsPWZignU%3ad55724b147a17ie6b; UM_distinctid=1758bb386c7ae-057046eca2c8bf-51422a7f-51a6b-1758bb386c8270; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604366600; CNZZDATA1278910924=188751946-1604364263-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604403333; SERVERID=02939ef596cab31fade1773768031669|1604404178|1604403852; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604404179",
    "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=96ad9cbb-e299-44b4-bde3-cfb481bdeacc"
  },
  "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=96ad9cbb-e299-44b4-bde3-cfb481bdeacc",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "VenueID=7&uids=563795&ac=1111_qiang&did=188&sid=" + Math.random(),
  "method": "POST",
  "mode": "cors"
}).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });

fetch("https://phdjapp.ucantech.com/home/couponget", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ASP.NET_SessionId=0piamd3e51vnzpn0ypqgksa3; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=%3b%3b16%3a51e26c16d56XJxTYpVsPWZignU%3ad55724b147a17ie6b; UM_distinctid=1758bb386c7ae-057046eca2c8bf-51422a7f-51a6b-1758bb386c8270; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604366600; CNZZDATA1278910924=188751946-1604364263-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604403333; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604404179; SERVERID=02939ef596cab31fade1773768031669|1604404199|1604403852",
    "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=96ad9cbb-e299-44b4-bde3-cfb481bdeacc"
  },
  "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=96ad9cbb-e299-44b4-bde3-cfb481bdeacc",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "VenueID=7&uids=563795&ac=1111_qiang&did=193&sid=" + Math.random(),
  "method": "POST",
  "mode": "cors"
}).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });
  }, 200);
  return s;
}

var startFun = function () {
  console.log("启动开始");
  console.warn((new Date()).toLocaleTimeString());
  var st;
  for (var i = 0; i < 1; i++) {
    st = fn();
  }

  setTimeout(function () { clearInterval(st) }, 300);
}
startFun();

// setTimeout(startFun, 5*60*1000+20*1000);
