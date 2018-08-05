import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text,
    votes: 0
  }
}
const boundAddComment = text => dispatch(addComment(text));

function editComment(id, newText) {
  return {
    type: EDIT_COMMENT,
    id,
    text: newText
  }
}

const boundEditComment = (id, newText) => dispatch(editComment(id, newText));

function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

const boundDeleteComment = id => dispatch(deleteComment(id));

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    votes: votes + 1
  }
}

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    votes: votes - 1
  }
}

const boundThumbDownComment = id => dispatch(thumbDownComment(id));