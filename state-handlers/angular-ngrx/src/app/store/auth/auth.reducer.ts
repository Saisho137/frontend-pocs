import { createReducer, on } from '@ngrx/store';
import { login, logout, authError } from './auth.actions';
import { User } from '@/app/models/user.model';

export interface AuthState {
  user: User | null;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,

  on(login, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),

  on(logout, (state) => ({
    ...state,
    user: null,
    error: null,
  })),

  on(authError, (state, { error }) => ({
    ...state,
    user: null,
    error,
  }))
);
