
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ItemReducer from './reducer';

const rootReducer = combineReducers({
  order: ItemReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;