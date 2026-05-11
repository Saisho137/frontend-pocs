import React from 'react'

const Counter = ({ counter }) => {
    const duplicate = (number) => number * 2;
    return (
        <>
            <h2>Click Counter</h2>
            <p>{duplicate(counter)}</p>
        </>
    )
}

export default Counter
