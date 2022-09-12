import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentReducer from './commentReducer';
import likeReducer from './likeReducer';
import modelReducer from './modelReducer';


const rootReducer = combineReducers({

  auth: authReducer,
  comment: commentReducer,
  model: modelReducer,
  like: likeReducer,

});

export default rootReducer;
