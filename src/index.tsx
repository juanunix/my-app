import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import Hello from './scenes/hello/containers/hello';
import { enthusiasm } from './scenes/hello/reducers';

const store = createStore(enthusiasm , {languageName:"TypeScript", enthusiasmLevel:1});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
