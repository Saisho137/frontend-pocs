import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector<number>('counter');

export const selectCurrentCount = createSelector(
  selectCounterState,
  (state: number) => state
);

export const selectValuePerCount = createSelector(
  selectCounterState,
  (state: number) => state * 5
);
