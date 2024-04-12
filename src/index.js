import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './store';
import App from './App';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory({basename: '/'});

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
   <Provider store={store}>
      <App history={history}/>
   </Provider>
);
