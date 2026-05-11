import { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import { useCounter } from '../context/CounterContext';

const TodoList = () => {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
    const { value, increment, decrement } = useCounter();

    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim()) {
            addTodo(text);
            increment();
            setText('');
        }
    };

    const handleRemoveTodo = (id) => {
        removeTodo(id);
        decrement();
    };

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={handleAddTodo}>Agregar Tarea</button>
            <h3>List lenght: {value}</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', gap: '5px', textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => toggleTodo(todo.id)}>
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