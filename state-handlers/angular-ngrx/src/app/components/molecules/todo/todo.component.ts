import { Todo } from '@/app/models/todo.model';
import { addTodo, removeTodo, toggleTodo } from '@/app/store/todo/todo.actions';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementtByAmount,
} from '@/app/store/counter/counter.actions';
import {
  selectAllTodos,
  selectCompletedTodos,
  selectPendingTodos,
} from '@/app/store/todo/todo.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

type Filter = 'all' | 'pending' | 'completed';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos$: Observable<Todo[]>;
  newTodo: string = '';
  filter: Filter = 'all';

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.store.dispatch(addTodo({ task: this.newTodo }));
      this.store.dispatch(increment());
      this.newTodo = '';
    }
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
    this.store.dispatch(decrement());
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }

  changeFilter(filter: Filter) {
    this.filter = filter;

    switch (filter) {
      case 'pending': {
        this.todos$ = this.store.select(selectPendingTodos);
        return;
      }
      case 'completed': {
        this.todos$ = this.store.select(selectCompletedTodos);
        return;
      }
      default: {
        this.todos$ = this.store.select(selectAllTodos);
        return;
      }
    }
  }
}
