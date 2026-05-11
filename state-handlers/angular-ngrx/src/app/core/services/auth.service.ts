import { User } from '@/app/models/user.model';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(): Observable<void> {
    return of(undefined);
  }

  logout(): Observable<void> {
    return of(undefined).pipe(delay(500));
  }

  authError() {
    console.log('AuthError!');
  }
}
