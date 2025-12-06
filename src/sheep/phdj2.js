var _fetch = require("node-fetch");

// var bodys =  ['VenueID=7&uids=1562253&ac=1111_qiang&did=288','VenueID=7&uids=1562253&ac=1111_qiang&did=287']

// 13621776555
// 13482265182
// 18918552201
// 15000368195
// 13918542535


var fetch = function (url, params) {
  // params.body=bodys[0]+"&sid="+Math.random();
  _fetch(url, params).then(function (response) { console.log("response--->", response); return response.text() }).then(function (data) {
    console.log((new Date()).toLocaleTimeString(), data)
    // if (params.body, data.msg.indexOf("恭喜") > -1 || params.body, data.msg.indexOf("抢光") > -1 || params.body, data.msg.indexOf("领完") > -1) {
    // }
  }, function (errdata) {
    console.log("发生错误了->", errdata)
  });
}




var gDate = "2022-7-13";

var questionFun = function () {
  var f1 = function () {


  }

  var fn = function () {
    var s = setInterval(f1, 200);
    return s;
  }

  var startFun = function () {
    console.log("启动开始");
    console.warn((new Date()).toLocaleTimeString());
    var st;
    for (var i = 0; i < 1; i++) {
      st = fn();
    }

    setTimeout(function () { clearInterval(st) }, 3 * 1000);
  }

  var ttl = ((new Date(gDate + " 10:59:59")) - (new Date()));
  console.log("当前时间:" + (new Date()).toLocaleTimeString())
  console.log("剩余时间" + parseInt(ttl / 1000))
  setTimeout(startFun, ttl);
}


var cp = function () {
  var f1 = function () {
    /// start 抢
    fetch("https://phwap.spdbph.com/e/extspdbphrt/pgw/equity/receivePhdjCoupon/ba3bab14eaf7445485168933535e4bba", {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "_icla=957411901.686755715; c__utmc=957411901.686755715; x-s3-sid=S1i1Dwq042Yrm14rzwiyke336; SESSION=01443d4d-f5c8-42d3-b5ac-841390ada874; c__utma=957411901.686755715.1238467299.1648867499.1657675214.2; x-s3-rtk=Td21cp35smm6oldstPCq1GvYi01rHdMcNry42r; c__utmb=957411901.686755715.1657675214.1657675361.4; x-s3-tid=c1711c49790531f037dd7ddb7cbca6cf920b9e3a:GvYi01_cNry:4c1a70a0-024a-11ed-969a-5954278ba1b9:ae97f50450",
        "Referer": "https://phwap.spdbph.com/h/page/1238467299/ba3bab14eaf7445485168933535e4bba?token=VFVSQmQwMUJQVDA9bef3475e-1edb-469e-85e7-c4b4b66c61fa",
        "Referrer-Policy": "no-referrer-when-downgrade"
      },
      "body": "{\"prizeId\":\"MjAyMjA3MTE4NTM5MzY0NXdiMjVOUkRVPQ==\",\"verifyKey\":\"5cc9a75e8ab04eb597467b8b0bb9f305\",\"sectionId\":\"section859\",\"token\":\"VFVSQmQwMUJQVDA9bef3475e-1edb-469e-85e7-c4b4b66c61fa\",\"source2\":\"2012\",\"source6\":\"0000\",\"source8\":\"0000\",\"source7\":\"ba3bab14eaf7445485168933535e4bba\",\"source5\":\"H5\",\"eveSource\":\"GvYi01_cNry\",\"eveSid\":\"S1i1Dwq042Yrm14rzwiyke336\",\"eveToken\":\"Td21cp35smm6oldstPCq1GvYi01rHdMcNry42r\",\"dvToken\":\"DT_3V6TcZOfXgjut-C0RztOzaSilA2P4N8NsefVNrRo9Z5\",\"device\":\"H5\"}",
      "method": "PUT"
    });


    // fetch("https://huamairj.com/pf_spring_outing/groupKill/share/getTodayGroupInfo", {
    //   "headers": {
    //     "accept": "application/json, text/plain, */*",
    //     "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    //     "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmRjOTVmMzQ5Nzc4MTRkMzBhM2M4ZDk3M2VlZDYyMjAiLCJtb2JpbGUiOiI0ZjEzM2FhODgxMmRhODc0MmI5MTM2ZDU2MmFhYmNiNyIsImV4cCI6MTY0ODI2OTY4MiwiaWF0IjoxNjQ4MjYyNDgyfQ.zyZRUcvKYEvmu-zgV5m4VtIisZCjuISaRcGZY3mzgds",
    //     "cache-control": "no-cache",
    //     "pragma": "no-cache",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "com.baoli.blzj",
    //     "cookie": "x-s3-sid=S1t0qfhrkpjzl14rzwiyk4n14; c__utma=1151655373.1637339825.1238467299.1648257856.1648262393.4; c__utmc=1151655373.1435581514; x-s3-rtk=Tyzwiyk4ngbKugtkpa4l1GvYi01ryvmcNry4z8; x-s3-tid=2f262c37ac951cb4dbec1a6f43b3809ef390b3fb:GvYi01_cNry:34302479-acae-11ec-969a-5954278ba1b9:ae97f504b8; c__utmb=1151655373.911350909.1648262393.1648262478.2",
    //     "Referer": "https://huamairj.com/puhuispring/group?token=VFVSQmQwMUJQVDA9b9a731d2-d670-4c57-ad3f-be74541ef8c4&goodsCode=623db23fe4b03e7bae3f50b3",
    //     "Referrer-Policy": "no-referrer-when-downgrade"
    //   },
    //   "body": null,
    //   "method": "POST"
    // });

    // fetch("https://huamairj.com/pf_spring_outing/groupKill/share/killCoupon", {
    //   "headers": {
    //     "accept": "application/json, text/plain, */*",
    //     "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    //     "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmRjOTVmMzQ5Nzc4MTRkMzBhM2M4ZDk3M2VlZDYyMjAiLCJtb2JpbGUiOiI0ZjEzM2FhODgxMmRhODc0MmI5MTM2ZDU2MmFhYmNiNyIsImV4cCI6MTY0NzgzODgwMSwiaWF0IjoxNjQ3ODMxNjAxfQ.EIDB-qnf1qTWbxo80wr2iq4JH4k5lViNobLRK2F4_O4",
    //     "cache-control": "no-cache",
    //     "content-type": "application/json",
    //     "pragma": "no-cache",
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-origin",
    //     "x-requested-with": "com.baoli.blzj",
    //     "cookie": "c__utma=1151655373.1637339825.1238467299.1647830117.1647830117.1; c__utmc=1151655373.1637339825; x-s3-sid=S15x8GmjdhYSl14rzwiyk4n2g; x-s3-rtk=TYzwiyk4nqxUpmjdhXhl1GvYi01rYKtcNry42n; x-s3-tid=81273408503b0aa724ffd554a2280a7774e562dd:GvYi01_cNry:7890a62a-a8c2-11ec-969a-5954278ba1b9:ae97f504aa; c__utmb=1151655373.1762863257.1647830117.1647831605.44",
    //     "Referer": "https://huamairj.com/puhuispring/index",
    //     "Referrer-Policy": "no-referrer-when-downgrade"
    //   },
    //   "body": "{\"businessChannel\":\"0000\",\"eveSource\":\"GvYi01_cNry\",\"eveToken\":\"TYzwiyk4nqxUpmjdhXhl1GvYi01rYKtcNry23232342n\",\"eveSid\":\"S15x8GmjdhYSl14rzwiyk4n2g\",\"dvToken\":\"DT_yXbDY_Dl0NOSI_4t_7V_N_Q94hTMgqalYx8K1zkGAgI\"}",
    //   "method": "POST"
    // }
    // );


    /// end 抢
  }

  var fn = function () {
    var s = setInterval(f1, 200);
    return s;
  }

  var startFun = function () {
    console.log("启动开始");
    console.warn((new Date()).toLocaleTimeString());
    var st;
    for (var i = 0; i < 1; i++) {
      st = fn();
    }
    //3秒后暂停
    setTimeout(function () { clearInterval(st) }, 3 * 1000);
  }

  var ttl = ((new Date(gDate + " 9:59:59")) - (new Date()));
  console.log("当前时间:" + (new Date()).toLocaleTimeString())
  console.log("剩余时间" + parseInt(ttl / 1000))
  setTimeout(startFun, ttl);
}



// questionFun();
cp();




