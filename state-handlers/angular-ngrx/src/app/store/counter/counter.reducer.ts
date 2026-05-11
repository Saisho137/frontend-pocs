import { createReducer, on } from '@ngrx/store';
import {
  increment,
  incrementByAmount,
  decrement,
  reset,
  decrementtByAmount,
} from './counter.actions';

export const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(incrementByAmount, (state, action) => state + action.value),
  on(decrement, (state) => state - 1),
  on(decrementtByAmount, (state, { value }) => state - value),
  on(reset, () => initialState)
);
