//提供application类
/**
 * @param{ Object } 路由对象 {路径：事件}
 * @param{ Object } 配置对象 {server}
 * @author wy
 * @date 2017年12月23日16:39:43
 * 
 * @returns { Application }
 */
export default class Application {
  constructor(routes, options){
    this.server = options.server;
    this.document = options.document;
    this.registerRoutes(routes);
  }
  registerRoutes(routes){
    for(let path in routes){
      this.addRouter(path, routes[path]);
    }
  }
  addRouter(path, Controller){
    this.server.route({
      path,
      method: 'GET',
      handler: (request, reply) => {
        const controller = new Controller({...request});
        controller.index(this, request, reply, err => {
          if(err){
            return reply(err)
          }
          controller.toString((err, html) => {
            if(err){
              return replay(err)
            }
            this.document(this, controller, request, reply, html, (err, html) => {
              if(err){
                return reply(err)
              }
              reply(html)
            });
          })
        })
      }
    })
  }
  start(){
    this.server.start();
  }
}