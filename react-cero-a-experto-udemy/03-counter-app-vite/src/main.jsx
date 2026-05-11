import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import CounterApp from './CounterApp'
import HelloWorldApp from './HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={137}/>
        <HelloWorldApp/>
    </React.StrictMode>
)