import { useState } from "react"

const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value)
    };

    const decrement = (value = 1) => {
        setCounter(counter - value)
    };

    const reset = () => {
        setCounter(initialValue)
    };

    return { counter, increment, decrement, reset };
}

export default useCounter;