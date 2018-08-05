import {ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
  comments: [],
  users: []
}

function comments(state = initialState, action) {
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

    case THUMB_DOWN_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment => {
          if (comment.id === action.id){
            return {...comment, thumbs_down: comment.thumbs_down + 1}
          }
          return comment
        })
      })

    default:
      return state;
  }
}

export default comments;