'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  comments: [],
  users: []
};

function comments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _actions.ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [{
          id: action.id,
          text: action.text,
          votes: 0
        }].concat(_toConsumableArray(state.comments))
      });

    case _actions.REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(function (comment) {
          return comment.id !== action.id;
        })
      });

    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(function (comment) {
          if (comment.id === action.id) {
            return _extends({}, comment, { text: action.text });
          }
          return comment;
        })
      });

    case _actions.THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(function (comment) {
          if (comment.id === action.id) {
            return _extends({}, comment, { votes: comment.votes + 1 });
          }
          return comment;
        })
      });

    case _actions.THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(function (comment) {
          if (comment.id === action.id) {
            return _extends({}, comment, { votes: comment.votes - 1 });
          }
          return comment;
        })
      });

    default:
      return state;
  }
}

exports.default = comments;
