'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Label = function Label(props) {
  var customClassName = props.className,
      component = props.component,
      variant = props.variant,
      rest = _objectWithoutProperties(props, ['className', 'component', 'variant']);

  var className = (0, _classnames2.default)(customClassName, 'uk-label', _defineProperty({}, 'uk-label-' + variant, !!variant));

  return _react2.default.createElement(component, _extends({
    className: className
  }, rest));
};

Label.propTypes = {
  variant: _propTypes2.default.oneOf(['primary', 'success', 'warning', 'danger'])
};

Label.defaultProps = {
  component: 'span'
};

exports.default = Label;