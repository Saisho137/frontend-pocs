import { useState } from "react"

const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h2>Counter 2: {counter2}</h2>
            <h3>Counter 3: {counter3}</h3>
            <hr />
            <button className="btn" onClick={() => setCounter({
                ...state,
                counter1: counter1 + 1
            })}>+1</button>
        </>
    )
}

export default CounterApp
