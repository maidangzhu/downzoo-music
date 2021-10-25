import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import {renderRoutes} from 'react-router-config';
import routes from './routes';

import { IconStyle } from "./assets/iconfont/iconfont";
import {GlobalStyle} from './style';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle/>
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
