import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// // ADD
// {
//   type: ADD_COMMENT,
//   id: uuid.v4(),
//   text: text,
//   thumbs_up: 0,
//   thumbs_down: 0
// }

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text,
    thumbs_up: 0,
    thumbs_down: 0
  }
}
const boundAddComment = text => dispatch(addComment(text));

// // EDIT
// {
//   type: EDIT_COMMENT,
//   id,
//   text: 'newText'

// }

function editComment(id, newText) {
  return {
    type: EDIT_COMMENT,
    id,
    text: newText
  }
}

const boundEditComment = (id, newText) => dispatch(editComment(id, newText));


// // DELETE
// {
//   type: DELETE_COMMENT,
//   id
// }

function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

const boundDeleteComment = id => dispatch(deleteComment(id));


// THUMB UP
// {
//   type: THUMB_UP_COMMENT,
//   id,
//   thumbs_up: 2,
// }

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    thumbs_up: thumbs_up + 1
  }
}

const boundThumbUpComment = id => dispatch(thumbUpComment(id));


// THUMB DOWN

// {
//   type: THUMB_DOWN_COMMENT,
//   id,
//   thumbs_down: thumbs_down + 1
// }

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    thumbs_down: thumbs_down + 1
  }
}

const boundThumbDownComment = id => dispatch(thumbDownComment(id));