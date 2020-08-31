import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducers from './reducers';

const initialState = {};

const middleware = applyMiddleware(thunk, logger);

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;

const store = createStore(
    reducers,
    devToolsEnhancer()
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

export default store;
