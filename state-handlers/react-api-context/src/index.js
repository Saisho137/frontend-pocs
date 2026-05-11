import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import { CounterProvider } from './context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <TodoProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>
);