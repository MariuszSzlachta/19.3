
const ADD_COMMENT = 'ADD_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
// akcja łapki
function thumbUpComment(id, thumbs_up) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    thumbs_up: thumbs_up + 1
  }
}
// akcja koment
function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: Math.random(),
    text: text,
    thumbs_up: 0,
    thumbs_down: 0
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function editComment(id, newText) {
  return {
    type: EDIT_COMMENT,
    id,
    text: newText
  }
}

// stan początkowy
const initialState = {
  comments: [],
  users: []
}
const store = {
  comments: [],
  users: [],
  baba:'ona'
}
// reducer
function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [
          {
            id: action.id,
            text: action.text,
            thumbs_up: 0,
            thumbs_down: 0
          }, ...state.comments]
      })

    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      })
    
    case EDIT_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id){
            return {...comment, text: action.text }
          }
          return comment
        })
      })  

    case THUMB_UP_COMMENT: 
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id){
            return {...comment, thumbs_up: comment.thumbs_up + 1}
          }
          return comment
        })
      })

    default:
      return state;
  }
}



