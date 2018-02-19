import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import routes
import { Routes } from './routes/route-config';
import Store from "./redux/store";

// ========================================
ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
