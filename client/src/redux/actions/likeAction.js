import { CREATE_LIKE, DELETE_LIKE, GET_LIKES } from '../types/types';

export const createLike = (data) => ({ type: CREATE_LIKE, payload: data });
export const deleteLike = (data) => ({ type: DELETE_LIKE, payload: data });
export const getLikes = (data) => ({ type: GET_LIKES, payload: data });


export const deleteLike_THUNK = (id) => (dispatch) => {
  fetch(
    `http://localhost:3002/api/like/like/${id}`,
    {
      method: 'delete',
    },
  ).then((res) => {
    if (res.status === 200) {
      dispatch(deleteLike(id));
    }
  });
};

export const getLike_THUNK = (modelId) => (dispatch) => {
  fetch(`http://localhost:3002/api/like/like/?modelId=${modelId || 0}`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getLikes(res));
    });
};
