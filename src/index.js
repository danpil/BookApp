import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from './routes';
import store from './store/store';

const rootEl = document.querySelector('#root');
const history = syncHistoryWithStore(browserHistory, store)

const wrapApp = () => {
  return (
    <Provider store={store}>
      <Router history={history} routes={Routes} />
    </Provider>
  );
};

ReactDOM.render(wrapApp(), rootEl);
