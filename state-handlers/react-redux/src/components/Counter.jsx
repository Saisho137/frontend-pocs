import { useSelector, useDispatch } from 'react-redux';
import { reset, increment, decrement, incrementByAmount, decrementByAmount } from '../redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>{count}</h3>
            <div style={{ display: 'flex', flexDirection: 'row' , gap: '5px'}}>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
                <button onClick={() => dispatch(decrementByAmount(3))}>Decrement by 3</button>
            </div>
        </section>
    );
};

export default Counter;