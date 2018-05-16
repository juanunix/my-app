import { Dispatch } from 'redux';

import { ICounterGateway } from '../useCases/counterGateway';
import { CounterAction, decrement, increment } from './actions';

export function createReduxCounterGateway (dispatch: Dispatch<CounterAction>): ICounterGateway {
  return {
    increment () {
      dispatch(increment());
    },

    decrement () {
      dispatch(decrement());
    }
  };
}
