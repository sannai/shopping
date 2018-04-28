import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './page/App'
import { saga } from './saga/saga'
import reducer from './reducer/reducer'
import './index.css';

const sagaMiddleware = createSagaMiddleware(saga)

const logger = createLogger({
    collapsed:true
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
)

const store = createStore(reducer, {
    shopping: [
        {
            id: 1,
            type: false,
            shop: '卡门KM男装2018',
            price: 152,
            num: 10,
        },
        {
            id: 2,
            type: false,
            shop: '青少年',
            price: 352,
            num: 5,
        },
        {
            id: 3,
            type: false,
            shop: '潮牌休',
            price: 512,
            num: 40,
        },
        {
            id: 4,
            type: false,
            shop: '2018',
            price: 152,
            num: 0,
        },
        {
            id: 5,
            type: false,
            shop: '青少年',
            price: 52,
            num: 5,
        },
        {
            id: 6,
            type: false,
            shop: '休',
            price: 82,
            num: 1,
        }
    ],
    one:5,//第一
    two:10,//第二
    sum:undefined,//和
    home:[]
}, enhancer)

sagaMiddleware.run(saga)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
    document.getElementById('root')
);
