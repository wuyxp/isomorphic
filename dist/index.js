'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

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
  }, nameObj, request.query);
};

server.route({
  method: 'GET',
  path: '/hello/{name*}',
  handler: function handler(request, reply) {

    //取回模板并且编译返回
    _nunjucks2.default.render('./dist/index.html', _extends({}, getName(request)), function (err, html) {
      //返回html
      console.log(err);
      reply(html);
    });
    //reply('报错啦,world');
  }
});
server.start();