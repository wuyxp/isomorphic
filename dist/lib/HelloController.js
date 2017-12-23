'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _Utils = require('./Utils.js');

var _Controller2 = require('./Controller');

var _Controller3 = _interopRequireDefault(_Controller2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //重新封装controller方法


var HolleController = function (_Controller) {
  _inherits(HolleController, _Controller);

  function HolleController() {
    _classCallCheck(this, HolleController);

    return _possibleConstructorReturn(this, (HolleController.__proto__ || Object.getPrototypeOf(HolleController)).apply(this, arguments));
  }

  _createClass(HolleController, [{
    key: 'toString',
    value: function toString(callback) {
      _nunjucks2.default.renderString('<p>hello {{fname}} {{lname}} </p>', (0, _Utils.getName)(this.context), function (err, html) {
        if (err) {
          return callback(err, null);
        }
        callback(null, html);
      });
    }
  }]);

  return HolleController;
}(_Controller3.default);

exports.default = HolleController;