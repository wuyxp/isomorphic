'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//提供application类
/**
 * @param{ Object } 路由对象 {路径：事件}
 * @param{ Object } 配置对象 {server}
 * @author wy
 * @date 2017年12月23日16:39:43
 * 
 * @returns { Application }
 */
var Application = function () {
  function Application(routes, options) {
    _classCallCheck(this, Application);

    this.server = options.server;
    this.document = options.document;
    this.registerRoutes(routes);
  }

  _createClass(Application, [{
    key: 'registerRoutes',
    value: function registerRoutes(routes) {
      for (var path in routes) {
        this.addRouter(path, routes[path]);
      }
    }
  }, {
    key: 'addRouter',
    value: function addRouter(path, Controller) {
      var _this = this;

      this.server.route({
        path: path,
        method: 'GET',
        handler: function handler(request, reply) {
          var controller = new Controller(_extends({}, request));
          controller.index(_this, request, reply, function (err) {
            if (err) {
              return reply(err);
            }
            controller.toString(function (err, html) {
              if (err) {
                return replay(err);
              }
              _this.document(_this, controller, request, reply, html, function (err, html) {
                // 将document的html传入到index路由定义中，再返回来的时候是组装好的html字符串
                if (err) {
                  return reply(err);
                }
                reply(html);
              });
            });
          });
        }
      });
    }
  }, {
    key: 'start',
    value: function start() {
      this.server.start();
    }
  }]);

  return Application;
}();

exports.default = Application;