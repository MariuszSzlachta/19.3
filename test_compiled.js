'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var state = {
  users: [{
    id: 1,
    name: 'Mark',
    counter: 4
  }, {
    id: 2,
    name: 'John',
    counter: 0
  }, {
    id: 3,
    name: 'Rick',
    counter: 3
  }]
};

function inc(id, counter) {
  return {
    id: id,
    counter: counter + 1
  };
}

function reducer(state, action) {
  var obj = Object.assign({}, state, {
    users: state.users.map(function (user) {
      return user.id === action.id ? _extends({}, user, { counter: user.counter + 1 }) : user;
    })
  });
  console.log(obj);
}
