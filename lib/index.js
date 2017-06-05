'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPixelRatio = exports.getEventPosition = exports.RadialChartAdapt = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDom = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadialChartAdapt = exports.RadialChartAdapt = function (_React$Component) {
  _inherits(RadialChartAdapt, _React$Component);

  function RadialChartAdapt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadialChartAdapt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialChartAdapt.__proto__ || Object.getPrototypeOf(RadialChartAdapt)).call.apply(_ref, [this].concat(args))), _this), _this.resize = function (e) {
      var ctx = _this.props.ctx;
      var onResize = _this.props.onResize;

      var ratio = getPixelRatio(ctx);
      var $parentNode = ReactDom.findDOMNode(_this).parentNode;
      var clientWidth = $parentNode.clientWidth;
      var clientHeight = $parentNode.clientHeight;
      var ratioWidth = clientWidth * ratio;
      var ratioHeight = clientHeight * ratio;
      if (onResize) onResize({ ratio: ratio, clientWidth: clientWidth, clientHeight: clientHeight, ratioWidth: ratioWidth, ratioHeight: ratioHeight }, e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadialChartAdapt, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return React.createElement(
        'div',
        { style: { position: 'relative', width: '100%', height: '100%' } },
        children
      );
    }
  }]);

  return RadialChartAdapt;
}(React.Component);

// Caution: In FireFox, layerX/layerY Mouse position relative to the closest positioned
// ancestor element.
// In FireFox, offsetX/offsetY is always 0.


var getEventPosition = exports.getEventPosition = function getEventPosition(event) {
  var x = null;
  var y = null;
  if (navigator.userAgent.indexOf('Firefox') > -1 && (event.layerX || event.layerX === 0)) {
    x = event.layerX;
    y = event.layerY;
  } else if (event.offsetX || event.offsetX === 0) {
    x = event.offsetX;
    y = event.offsetY;
  }
  return { x: x, y: y };
};

var getPixelRatio = exports.getPixelRatio = function getPixelRatio(context) {
  var backingStore = context && (context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio) || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};