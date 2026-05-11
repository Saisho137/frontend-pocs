import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '@/app/models/todo.model';

export const selectTodosState = createFeatureSelector<Todo[]>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  (todos) => todos
);

export const selectCompletedTodos = createSelector(selectTodosState, (todos) =>
  todos.filter((todo) => todo.completed)
);

export const selectPendingTodos = createSelector(selectTodosState, (todos) =>
  todos.filter((todo) => !todo.completed)
);
