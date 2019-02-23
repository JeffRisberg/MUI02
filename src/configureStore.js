import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = ({ initialState = {}, history }) => {

  const reducer = combineReducers({
    routing: routerReducer,
    app: reducers
  });


  const middlewares = [
    routerMiddleware(history),
    thunk
  ];

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  return store;
};

export default configureStore;
