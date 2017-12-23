import Hapi from 'hapi';

import nunjucks from 'nunjucks';

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
  }, nameObj, request.query)
}

server.route({
  method: 'GET',
  path: '/hello/{name*}',
  handler: function(request, reply){

    //取回模板并且编译返回
    nunjucks.render('./dist/index.html', {
      ...getName(request)
    }, function(err, html){
      //返回html
      console.log(err);
      reply(html)
    });
    //reply('报错啦,world');
  }
})
server.start();