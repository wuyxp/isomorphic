//提供controller类
/**
 * @param{ Object } 路由对象 {路径：事件}
 * @param{ Object } 配置对象 {server}
 * @author wy
 * 
 * @returns { Application }
 */
export default class Controller {
  constructor(context){
    //包含于路由相关的元数据
    this.context = context;
  }
  index(application, request, reply, callback){
    //application Application引用
    //request, reply 是hapi上的方法
    //callback 如果第一个参数是null，那么就会正常进入请求，响应的声明周期中
    callback(null);
  }
  toString(callback){
    //如果callback，成功执行并且没有出现错误，那么将会调用这个方法。
    callback(null, 'success');
  }
}