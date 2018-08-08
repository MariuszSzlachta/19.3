'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ADD_COMMENT = 'ADD_COMMENT';
var THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
var REMOVE_COMMENT = 'REMOVE_COMMENT';
var EDIT_COMMENT = 'EDIT_COMMENT';
// akcja łapki
function thumbUpComment(id, thumbs_up) {
  return {
    type: THUMB_UP_COMMENT,
    id: id,
    thumbs_up: thumbs_up + 1
  };
}
// akcja koment
function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: Math.random(),
    text: text,
    thumbs_up: 0,
    thumbs_down: 0
  };
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  };
}

function editComment(id, newText) {
  return {
    type: EDIT_COMMENT,
    id: id,
    text: newText
  };
}

// stan początkowy
var initialState = {
  comments: [{
    id: 'a23s',
    text: 'babababa',
    thumbs_up: 1,
    thumbs_down: 3
  }],
  users: []
};
var store = {
  comments: [],
  users: [],
  baba: 'ona'
  // reducer
};function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [{
          id: action.id,
          text: action.text,
          thumbs_up: 0,
          thumbs_down: 0
        }].concat(_toConsumableArray(state.comments))
      });

    case REMOVE_COMMENT:
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

    case THUMB_UP_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(function (comment) {
          if (comment.id === action.id) {
            return _extends({}, comment, { thumbs_up: comment.thumbs_up + 1 });
          }
          return comment;
        })
      });

    default:
      return state;
  }
}

// // OD MICHAŁĄ
// case ADD_COMMENT:
//   return [{
//     id: action.id,
//     text: action.text,
//     ...
//   }
//   , ...state.comments];


// case THUMB_UP_COMMENT: 
// return state.comments.map(comment => {
//     if (comment.id === action.id){
//       return {...comment, thumbs_up: comment.thumbs_up + 1}
//     }
//     return comment
//   })
// })
// // ssssssssssssssssssssssssssssssssss


// case THUMB_UP_COMMENT: 
//       return [...state, state.comments.map(comment => {
//           if (comment.id === action.id){
//             return {...comment, thumbs_up: comment.thumbs_up + 1}
//           }
//           return comment
//         })]
//       })
