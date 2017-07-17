import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const middlewares = [createLogger(), thunk, routerMiddleware(browserHistory)];

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
