import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import CounterPage from './scenes/counter/components/counterPage';
import { createReduxCounterGateway } from './scenes/counter/state/reduxCounterGateway';
import store from './scenes/counter/store';
import { createChangeCounterInteractor } from './scenes/counter/useCases/ChangeCounterInteractor';

const counterGateway = createReduxCounterGateway(store.dispatch);
const changeCounterInteractor = createChangeCounterInteractor(counterGateway);


ReactDOM.render(
  <Provider store={store}>
    <CounterPage
      changeCounterInteractor={changeCounterInteractor}
    />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
