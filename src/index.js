import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {combineReducers} from 'redux';


const initialFeedback = createStore (
    () => {
        return {
            feeling: "1",
            understanding: "2",
            support: "3",
            comment: "Notes",
        }
    }
)

const feedbackReducer = (state = initialFeedback, action) => {
    if (action.type === 'SET_FEELING'){
        return {
            ...state,
            feeling: action.payload
        }
    }

    if (action.type === 'SET_UNDERSTANDING'){
        return {
            ...state,
            understanding: action.payload
        }
    }

    if (action.type === 'SET_SUPPORTED'){
        return {
            ...state,
            supported: action.payload
        }
    }


    if (action.type === 'SET_COMMENTS') {
        return {
            ...state,
            supported: action.payload
        }
    }


return state;
}


const store = createStore(
    combineReducers({
        feedbackReducer
    })
)


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
