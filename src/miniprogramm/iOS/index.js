var Arl = _$g.Arl; var _rp = function (k, v) { _$g.page[k] = v; }; var _e = function (pageId, method, params) { _$g.page[pageId][method](params); }; var Page = function (pageId, options) { let _vm = new Arl(options); _vm._pageId = pageId; _rp(pageId, _vm); return _vm; };