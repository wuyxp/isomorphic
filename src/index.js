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

//全局配置nunjuks不能自动转义
nunjucks.configure({
  autoescape: false
});

const APP_FILE_PATH = '/application.js'

const application  = new Application({
  //将响应内容传至控制器中
  '/': Controller,
  '/hello/{name*}': HelloController
}, {
  server,
  document: function(application, controller, request, reply, body, callback){
    // 只是将传过来的body与html模板组装好，并且返回给application的document回调函数进行reply
    nunjucks.render('./dist/index.html', { body, application:APP_FILE_PATH }, (err, html) => {
      if(err){
        return callback(err, null);
      }
      callback(null, html)
    })
  }
})
server.route({
  method: 'GET',
  path: APP_FILE_PATH,
  handler: (request, reply) => {
    return reply.file('./dist/build/application.js');
  }
})

application.start();