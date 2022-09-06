import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import UserComponent from './component/Users';
import rootReducer from './reducers/rootReducer';
import store from "./store";


const App = () => (
  <Provider store={store}>
    <UserComponent />
  </Provider>
);

export default App;
