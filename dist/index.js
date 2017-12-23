'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

var _Controller = require('./lib/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _HelloController = require('./lib/HelloController');

var _HelloController2 = _interopRequireDefault(_HelloController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//创建一个服务器，并配置主机名和端口
var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

var application = new _lib2.default({
  //将响应内容传至控制器中
  '/': _Controller2.default,
  '/hello/{name*}': _HelloController2.default
}, {
  server: server
});
application.start();