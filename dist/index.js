'use strict';

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
server.route({
  method: 'GET',
  path: '/hello',
  handler: function handler(request, reply) {

    //取回模板并且编译返回
    _nunjucks2.default.render('./dist/index.html', {
      fname: 'wu11', lname: 'yang'
    }, function (err, html) {
      //返回html
      console.log(err);
      reply(html);
    });
    //reply('报错啦,world');
  }
});
server.start();