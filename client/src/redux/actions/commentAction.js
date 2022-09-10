import { CREATE_COMMENT, DELETE_COMMENT, GET_COMMENTS } from '../types/types';

export const createComment = (data) => ({ type: CREATE_COMMENT, payload: data });
export const deleteComment = (data) => ({ type: DELETE_COMMENT, payload: data });
export const getComments = (data) => ({ type: GET_COMMENTS, payload: data });


export const deleteComment_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/comment/${id}`,
    {
      method: 'delete',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deleteComment(id));
    }
  });
};

export const getPosts_THUNK = (modelId) => (dispatch) => {
  fetch(`http://localhost:3002/comments?modelId=${modelId || 0}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getComments(res));
    });
};
