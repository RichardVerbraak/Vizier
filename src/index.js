import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter } from 'react-router-dom'
import Vizier from "./Vizier";
import './styles/styles.scss';
import * as serviceWorker from "./serviceWorker";
import Movie from './components/Movie'


ReactDOM.render (
    <Provider store={store}>
        <Vizier />
    </Provider>
    , 
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
