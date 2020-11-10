var fetch = require("node-fetch");
var fn = function () {
  var s = setInterval(function () {
    fetch("https://phdjapp.ucantech.com/home/couponget", {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,en-US;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "pragma": "no-cache",
        "x-devtools-emulate-network-conditions-client-id": "100F2B020DD3B733857AAF82BACC0B63",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "ASP.NET_SessionId=rafyg0lpaunvwjpa40r5txhj; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=%3be862%3bcg5%3af86ebgXJ1xTn1WPYVbO5M%3a%3b52de%3c02h87e953f6; UM_distinctid=17592cd84a913a-04851bf9de2839-32386971-51a6b-17592cd84aa274; CNZZDATA1278910924=1423329224-1604483116-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604483116; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604485744; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604485985; SERVERID=02939ef596cab31fade1773768031669|1604485998|1604485719",
        "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=eeab44dd-5684-43f2-bb3c-bef81da4b42d"
      },
      "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=eeab44dd-5684-43f2-bb3c-bef81da4b42d",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "VenueID=7&uids=615580&ac=1111_qiang&did=197&sid=" + Math.random(),
      "method": "POST",
      "mode": "cors"
    }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });

    fetch("https://phdjapp.ucantech.com/home/couponget", {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,en-US;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "pragma": "no-cache",
        "x-devtools-emulate-network-conditions-client-id": "100F2B020DD3B733857AAF82BACC0B63",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "ASP.NET_SessionId=rafyg0lpaunvwjpa40r5txhj; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=%3be862%3bcg5%3af86ebgXJ1xTn1WPYVbO5M%3a%3b52de%3c02h87e953f6; UM_distinctid=17592cd84a913a-04851bf9de2839-32386971-51a6b-17592cd84aa274; CNZZDATA1278910924=1423329224-1604483116-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604483116; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604485744; SERVERID=02939ef596cab31fade1773768031669|1604485985|1604485719; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604485985",
        "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=eeab44dd-5684-43f2-bb3c-bef81da4b42d"
      },
      "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=eeab44dd-5684-43f2-bb3c-bef81da4b42d",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "VenueID=7&uids=615580&ac=1111_qiang&did=199&sid=" + Math.random(),
      "method": "POST",
      "mode": "cors"
    }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });

    fetch("https://phdjapp.ucantech.com/home/couponget", {
      "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,en-US;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "pragma": "no-cache",
        "x-devtools-emulate-network-conditions-client-id": "100F2B020DD3B733857AAF82BACC0B63",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "ASP.NET_SessionId=rafyg0lpaunvwjpa40r5txhj; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=%3be862%3bcg5%3af86ebgXJ1xTn1WPYVbO5M%3a%3b52de%3c02h87e953f6; UM_distinctid=17592cd84a913a-04851bf9de2839-32386971-51a6b-17592cd84aa274; CNZZDATA1278910924=1423329224-1604483116-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604483116; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604485744; SERVERID=02939ef596cab31fade1773768031669|1604485985|1604485719; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604485985",
        "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=eeab44dd-5684-43f2-bb3c-bef81da4b42d"
      },
      "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=eeab44dd-5684-43f2-bb3c-bef81da4b42d",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "VenueID=7&uids=615580&ac=1111_qiang&did=198&sid=" + Math.random(),
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
        "cookie": "ASP.NET_SessionId=wiepqg3krzbuzhsvudlv2b1d; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=e31ed8e2hc187f%3a8YF%5bUYk2tPXGVYE%5bQ%5dHpyRQ%3e%3fd8bef8945336d2ffC; UM_distinctid=175916bc4202b6-036c1d33de6bf5-51422a7f-51a6b-175916bc4212f7; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604462562; CNZZDATA1278910924=609216699-1604459079-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604483301; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604485226; SERVERID=f643490401aef39818e49afface795ab|1604485255|1604485100",
        "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=71ef53a0-1607-4440-9ade-443cfefdc95e"
      },
      "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=71ef53a0-1607-4440-9ade-443cfefdc95e",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "VenueID=7&uids=1562253&ac=1111_qiang&did=198&sid=" + Math.random(),
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
        "cookie": "ASP.NET_SessionId=wiepqg3krzbuzhsvudlv2b1d; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=e31ed8e2hc187f%3a8YF%5bUYk2tPXGVYE%5bQ%5dHpyRQ%3e%3fd8bef8945336d2ffC; UM_distinctid=175916bc4202b6-036c1d33de6bf5-51422a7f-51a6b-175916bc4212f7; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604462562; CNZZDATA1278910924=609216699-1604459079-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604483301; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604485226; SERVERID=f643490401aef39818e49afface795ab|1604485255|1604485100",
        "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=71ef53a0-1607-4440-9ade-443cfefdc95e"
      },
      "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=71ef53a0-1607-4440-9ade-443cfefdc95e",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "VenueID=7&uids=1562253&ac=1111_qiang&did=197&sid=" + Math.random(),
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
        "cookie": "ASP.NET_SessionId=wiepqg3krzbuzhsvudlv2b1d; Media=no=124599085C195F4DC0AA801B81307420; memberuser=no=e31ed8e2hc187f%3a8YF%5bUYk2tPXGVYE%5bQ%5dHpyRQ%3e%3fd8bef8945336d2ffC; UM_distinctid=175916bc4202b6-036c1d33de6bf5-51422a7f-51a6b-175916bc4212f7; Hm_lvt_2856c873410ac9615e28f285edc30d98=1604462562; CNZZDATA1278910924=609216699-1604459079-https%253A%252F%252Fphdjapp.ucantech.com%252F%7C1604483301; Hm_lpvt_2856c873410ac9615e28f285edc30d98=1604485226; SERVERID=f643490401aef39818e49afface795ab|1604485255|1604485100",
        "referer":"https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=71ef53a0-1607-4440-9ade-443cfefdc95e"
      },
      "referrer": "https://phdjapp.ucantech.com/home1111/home?source=124599085C195F4DC0AA801B81307420&token=71ef53a0-1607-4440-9ade-443cfefdc95e",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": "VenueID=7&uids=1562253&ac=1111_qiang&did=199&sid=" + Math.random(),
      "method": "POST",
      "mode": "cors"
    }).then(function (response) { return response.json() }).then(function (data) { console.warn(data) });

  }, 100);
  
  return s;
}

var startFun = function () {
  console.log("启动开始");
  console.warn((new Date()).toLocaleTimeString());
  var st;
  for (var i = 0; i < 1; i++) {
    st = fn();
  }
  setTimeout(function () { clearInterval(st) }, 200);
}
startFun();

// var ttl =((new Date("2020-11-4 11:59:57")) - (new Date()));
// console.log("当前时间:"+(new Date()).toLocaleTimeString())
// console.log("剩余时间"+parseInt(ttl/1000))
// setTimeout(startFun, ttl);