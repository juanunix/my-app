import * as React from 'react';

import { IChangeCounterInteractor } from '../../useCases/ChangeCounterInteractor';
import { ICounterWidgetData } from './counterWidgetData';

interface ICounterWidgetProps {
  counter: ICounterWidgetData;
  changeCounterInteractor: IChangeCounterInteractor;
}

export const CounterWidget = (props: ICounterWidgetProps) => {
  const { counter, changeCounterInteractor } = props;

  return (
    <div>
      <h1>
        {counter.value}
      </h1>
      <div>
        <button onClick={changeCounterInteractor.increment}>
          +
      </button>
      <button onClick={changeCounterInteractor.decrement}>
          -
      </button>
      </div>
    </div>
  );
};
