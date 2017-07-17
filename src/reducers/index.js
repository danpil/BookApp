import { combineReducers } from 'redux';
import books from './books';
import notification from './notification';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  books,
  notification,
  routing: routerReducer,
  form: formReducer,
});
