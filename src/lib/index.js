//提供application类
export default class Application {
  constructor(routes, options){
    this.server = options.server;
    this.registerRoutes(routes);
  }
  registerRoutes(routes){
    for(let path in routes){
      this.addRouter(path, routes[path]);
    }
  }
  addRouter(path, handler){
    this.server.route({
      path,
      method: 'GET',
      handler
    })
  }
  start(){
    this.server.start();
  }
}