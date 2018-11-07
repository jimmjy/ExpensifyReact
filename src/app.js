import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

    //BrowserRouter expects only 1 element inside BrowserRouter so need to wrap things in a div or a switch but if you want static element, put outside of switch and wrap all in div


ReactDOM.render(<AppRouter />, document.getElementById('app'));