import { createAction, props } from '@ngrx/store';
import { User } from '@/app/models/user.model';

export const login = createAction('[Auth] Login', props<{ user: User }>());

export const logout = createAction('[Auth] Logout');

export const authError = createAction(
  '[Auth] Auth Error',
  props<{ error: string }>()
);
