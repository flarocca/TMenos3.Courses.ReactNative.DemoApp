import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import App from './src/containers/App';

const ReactApp: () => React$Node = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReactApp;
