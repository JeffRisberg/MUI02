import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
import App from './App';

import createHistory from 'history/createBrowserHistory';

const history = createHistory({basename: '/'});

const store = configureStore({initialState: {}, history});

ReactDOM.render(
   <Provider store={store}>
      <App history={history}/>
   </Provider>,
   document.getElementById('container')
);
