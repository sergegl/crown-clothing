import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// Something that will be running between actions to root reducers
const middlewares = [logger];

// Creating store and applying some middlerwares if needed.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;