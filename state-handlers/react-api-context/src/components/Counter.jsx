import React from 'react'
import { useCounter } from '../context/CounterContext'

const Counter = () => {
    const { value, reset, increment, decrement, incrementByAmount, decrementByAmount } = useCounter();
    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Value: {value}</h3>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={() => { incrementByAmount(3) }}>Increment by 3</button>
                <button onClick={() => { decrementByAmount(2) }}>Increment by 2</button>
            </div>
        </section>
    )
}

export default Counter
