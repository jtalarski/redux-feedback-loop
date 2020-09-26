import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {combineReducers} from 'redux';
import feelingReducer from './components/Reducers/feelingsReducer'
import understandingReducer from './components/Reducers/understandingReducer'
import supportReducer from './components/Reducers/supportReducer'
import commentsReducer from './components/Reducers/commentsReducer'
import successReducer   from './components/Reducers/successReducer'

const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        successReducer
    })
)


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

registerServiceWorker();
