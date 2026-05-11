import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../redux/todoSlice';
import { decrement, increment } from '../redux/counterSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const counter = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo({ id: Date.now(), text, completed: false }));
            dispatch(increment())
            setText('');
        }
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
        dispatch(decrement())
    }

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={handleAddTodo}>Agregar Tarea</button>
            <h4>List lenght: {counter}</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none', display: 'flex', gap: '8px' }}>
                        {todo.text}
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>
                            {todo.completed ? 'Deshacer' : 'Completar'}
                        </button>
                        <button onClick={() => handleRemoveTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
