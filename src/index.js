import Hapi from 'hapi';

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
    reply('hel1a333bc4312,world');
  }
})
server.start();