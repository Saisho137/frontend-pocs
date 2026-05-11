import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, tap } from 'rxjs';
// import { Router } from '@angular/router';
import { AuthService } from '@/app/core/services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth] Login'),
      mergeMap(() =>
        this.authService.login().pipe(
          map((err) => ({
            type: '[Auth] Logout',
            error: err,
          })),
          delay(60000),
          tap(() => {
            // this.router.navigate(['/login']);
            console.error('La sesion cerró después de 60 días (segundos)');
          }),
          catchError((err) => {
            throw err;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    // private router: Router
  ) {}
}
