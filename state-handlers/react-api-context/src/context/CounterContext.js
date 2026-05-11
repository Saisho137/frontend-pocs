import { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0);
    };

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        setValue(value - 1);
    };

    const incrementByAmount = (amount) => {
        setValue(value + amount);
    }

    const decrementByAmount = (amount) => {
        setValue(value - amount);
    }

    return (
        <CounterContext.Provider value={{ value, reset, increment, decrement, incrementByAmount, decrementByAmount }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    return useContext(CounterContext);
};
