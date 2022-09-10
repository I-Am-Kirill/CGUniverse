import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS,
  EDIT_COMMENT,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_COMMENT:
      return [...state, payload];

    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== payload);

    case EDIT_COMMENT:
      return [...state, payload];

    case GET_COMMENTS:
      return payload;
    default:
      return state;
  }
};

