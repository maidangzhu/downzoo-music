import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {GlobalStyle} from './style';
import {renderRoutes} from 'react-router-config';
import {HashRouter} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle/>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
