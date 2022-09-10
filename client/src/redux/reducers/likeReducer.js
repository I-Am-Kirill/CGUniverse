import {
  CREATE_LIKE,
  DELETE_LIKE,
  GET_LIKES,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_LIKE:
      return [...state, payload];

    case DELETE_LIKE:
      return state.filter((like) => like.id !== payload);

    case GET_LIKES:
      return payload;
    default:
      return state;
  }
};


