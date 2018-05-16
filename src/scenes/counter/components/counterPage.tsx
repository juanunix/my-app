import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../store';
import { IChangeCounterInteractor } from '../useCases/ChangeCounterInteractor';
import { CounterWidget } from './widget/counterWidget';
import { createCounterWidgetData, ICounterWidgetData } from './widget/counterWidgetData';

export interface ICounterPageProps {
  changeCounterInteractor: IChangeCounterInteractor;
  counter: ICounterWidgetData 
}

const mapStateToProps = (state: IStoreState): Partial<ICounterPageProps> => {
  return {
    counter: createCounterWidgetData(state.counter)
  };
};

class CounterPage extends React.Component<ICounterPageProps, {}> {
  public render () {
    const {
      counter,
      changeCounterInteractor
    } = this.props;

    return (
      <div>
        <h1>Clean Architecture Sample</h1>
        <CounterWidget
          counter={counter}
          changeCounterInteractor={changeCounterInteractor}
        />
      </div>
    );
  }
}

export default connect<{}, {}, Partial<ICounterPageProps>>(mapStateToProps)(CounterPage);
