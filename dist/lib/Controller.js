'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//提供controller类
/**
 * @param{ Object } 路由对象 {路径：事件}
 * @param{ Object } 配置对象 {server}
 * @author wy
 * 
 * @returns { Application }
 */
var Controller = function () {
  function Controller(context) {
    _classCallCheck(this, Controller);

    //包含于路由相关的元数据
    this.context = context;
  }

  _createClass(Controller, [{
    key: 'index',
    value: function index(application, request, reply, callback) {
      //application Application引用
      //request, reply 是hapi上的方法
      //callback 如果第一个参数是null，那么就会正常进入请求，响应的声明周期中
      callback(null);
    }
  }, {
    key: 'toString',
    value: function toString(callback) {
      //如果callback，成功执行并且没有出现错误，那么将会调用这个方法。
      callback(null, 'success');
    }
  }]);

  return Controller;
}();

exports.default = Controller;