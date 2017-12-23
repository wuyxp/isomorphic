import Hapi from 'hapi';

import nunjucks from 'nunjucks';

import Application from './lib';
import Controller from './lib/Controller';
import HelloController from './lib/HelloController';

//创建一个服务器，并配置主机名和端口
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

const application  = new Application({
  //将响应内容传至控制器中
  '/': Controller,
  '/hello/{name*}': HelloController
}, {
  server
})
application.start();