import Hapi from 'hapi';

import nunjucks from 'nunjucks';

import Application from './lib';
import Controller from './lib/Controller';

//创建一个服务器，并配置主机名和端口
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

//获取参数的方式
//1 路径参数
//2 查询参数
//3 默认值
const getName = request => {
  let names = request.params.name ? request.params.name.split('/') : [];
  let nameObj = {};
  if(names.length>0){
    nameObj = {
      fname : names[0],
      lname : names[1]
    }
  }
  return Object.assign({
    fname: 'www',
    lname: 'yyy'
  }, request.query, nameObj);
}

const application  = new Application({
  //将响应内容传至控制器中
  '/{name*}': Controller
}, {
  server
})
application.start();