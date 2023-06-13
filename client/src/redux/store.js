// import {createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancer(applyMiddleware(thunkMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunkMiddleware),
);

export default store;