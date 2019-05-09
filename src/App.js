import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import configureStore from 'store/configureStore'

import Routers from 'view/Routers'
import ResetStyles from 'styles/resetStyles'
import Fonts from 'styles/fonts'

const history = createBrowserHistory()
const store = configureStore(history)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ResetStyles />
      <Fonts />
      <Routers />
    </ConnectedRouter>
  </Provider>
);


export default App;