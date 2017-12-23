'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

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
    reply('hel1a333bc4312,world');
  }
});
server.start();