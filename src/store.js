import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { save, load } from 'redux-localstorage-simple';

const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(
  save({ states: ['compare', 'cart'] }),
  ...middleware
)(createStore);

export const store = createStoreWithMiddleware(
  rootReducer,
  load({ states: ['compare', 'cart'] })
);
