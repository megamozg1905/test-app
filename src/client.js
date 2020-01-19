import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
//import { store } from './store';
import { createStore } from 'redux';

const store = createStore(window.REDUX_DATA);

const jsx = (
    <Provider store={ store }>
        <App />
    </Provider>
);

hydrate(jsx, document.getElementById('root'));