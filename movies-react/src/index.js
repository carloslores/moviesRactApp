import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

import PopularMovies from "./components/PopularMovies"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App/>

      
    </Provider>
, document.getElementById('root'));

 
serviceWorker.unregister();
