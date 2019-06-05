import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

import { BrowserRouter as Router } from 'react-router-dom';



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
       <Router>
         <App/>
       </Router>   
    </Provider>
, document.getElementById('root'));

 
serviceWorker.unregister();
