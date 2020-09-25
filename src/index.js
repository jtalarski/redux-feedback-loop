import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
//import { createStore, combineReducers} from 'redux';

ReactDOM.render(
<App />
, document.getElementById('root'));
registerServiceWorker();
