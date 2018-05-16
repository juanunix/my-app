import { combineReducers, createStore } from 'redux';

import { counterReducer, CounterState } from './state/reducers';

export interface IStoreState {
  counter: CounterState
};

const rootReducer = combineReducers({
  counter: counterReducer
});

export default createStore(rootReducer);
