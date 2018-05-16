import { CounterActionTypes } from './types';

interface IIncrementAction {
  type: CounterActionTypes.INCREMENT
};

interface IDecrementAction {
  type: CounterActionTypes.DECREMENT
};

export type CounterAction = 
IIncrementAction
  | IDecrementAction;

export function increment(): IIncrementAction {
  return {
    type: CounterActionTypes.INCREMENT
  };
}

export function decrement(): IDecrementAction {
  return {
    type: CounterActionTypes.DECREMENT
  };
}
