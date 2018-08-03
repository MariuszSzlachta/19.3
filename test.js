const state = {
  users: [
    {
      id: 1,
      name: 'Mark',
      counter: 4
    },
    {
      id: 2,
      name: 'John',
      counter: 0
    },
    {
      id: 3,
      name: 'Rick',
      counter: 3
    }
  ]
};

function inc(id, counter){
  return {
    id: id,
    counter: counter + 1
  }
}

function reducer(state, action){
  var obj = Object.assign({}, state, {
    users: state.users.map(user => user.id === action.id ? {...user, counter: user.counter + 1} : user)
  })
  console.log(obj)
}


