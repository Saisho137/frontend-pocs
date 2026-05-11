import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import todoReducer from './todoSlice';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        todos: todoReducer
    },
});

export default store;