import { combineReducers } from 'redux';
import post from './post';
import loading from './loading';

const rootReducer = combineReducers({
  post,
  loading,
});

export default rootReducer;
