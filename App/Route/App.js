import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../Redux';
import RootContainer from './RootContainer';

/* ------------- create our store ------------- */
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 **/

const App = () => {
  return (
    <Provider store={ store }>
      <RootContainer />
    </Provider>
  );
};

export default App;
