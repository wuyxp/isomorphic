'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

var _Controller = require('./lib/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//创建一个服务器，并配置主机名和端口
var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

//获取参数的方式
//1 路径参数
//2 查询参数
//3 默认值
var getName = function getName(request) {
  var names = request.params.name ? request.params.name.split('/') : [];
  var nameObj = {};
  if (names.length > 0) {
    nameObj = {
      fname: names[0],
      lname: names[1]
    };
  }
  return Object.assign({
    fname: 'www',
    lname: 'yyy'
  }, request.query, nameObj);
};

var application = new _lib2.default({
  //将响应内容传至控制器中
  '/{name*}': _Controller2.default
}, {
  server: server
});
application.start();