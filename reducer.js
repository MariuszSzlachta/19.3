import {ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
  comments: [],
  users: []
}

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
          }, ...state]
      })

    case REMOVE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => comment.id !== action.id)
      })
      
    case THUMB_UP_COMMENT: 
      return Object.assign({}, state, {
        comments: state.comment.map(comment => {
          if (comment.id === action.id){
            return {...comment, thumbs_up: thumbs_up + 1}
          }
          return comment
        })
      })

    default:
      return state;
  }
}
export default reducer;