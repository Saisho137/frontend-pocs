import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const incrementByAmount = createAction(
  '[Counter] IncrementByAmount',
  props<{ value: number }>()
);

export const decrement = createAction('[Counter] Decrement');

export const decrementtByAmount = createAction(
  '[Counter] DecrementByAmount',
  props<{ value: number }>()
);

export const reset = createAction('[Counter] Reset');
