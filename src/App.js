import React from 'react';
import store from './redux/configureStore';
import { Provider } from 'react-redux';

import Flights from './screens/Flights';

export default function App() {

  return (
    <Provider store={store}>
      <Flights />
    </Provider >
  );

};