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
        //将每个路由对应的controller实例化，并且将参数传入进去
        // 按照顺序执行，index-》toString（将组装好body后的html返回来，准备调用实例化application中的document方法）
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
              // 将document的html传入到index路由定义中，再返回来的时候是组装好的html字符串
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