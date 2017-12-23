import Hapi from 'hapi';

import nunjucks from 'nunjucks';

//创建一个服务器，并配置主机名和端口
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, reply){

    //取回模板并且编译返回
    nunjucks.render('./dist/index.html', {
      fname: 'wu11', lname: 'yang'
    }, function(err, html){
      //返回html
      console.log(err);
      reply(html)
    });
    //reply('报错啦,world');
  }
})
server.start();