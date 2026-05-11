import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleSumClick = () => {
        //console.log(event)
        setCounter(counter + 1);
    };

    const handleSubstractClick = () => {
        //console.log(event)
        setCounter(counter - 1);
    };

    const handleResetClick = () => {
        //console.log(event)
        setCounter(value);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleSumClick}> +1 </button>
            <button onClick={handleResetClick}> Reset </button>
            <button onClick={handleSubstractClick}> -1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;