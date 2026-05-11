import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from './todo.actions';
import { Todo } from '@/app/models/todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { task }) => [
    ...state,
    { id: Date.now(), task, completed: false },
  ]),
  on(toggleTodo, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(removeTodo, (state, { id }) => state.filter((todo) => todo.id !== id))
);
