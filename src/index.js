import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
//import { createStore, combineReducers} from 'redux';


const store = createStore (
    () => {
        return {
            feeling: "1",
            understanding: "2",
            support: "3",
            comment: "Notes",
            
        }
    }
)





ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
