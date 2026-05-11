import { User } from '@/app/models/user.model';
import { login, logout } from '@/app/store/auth/auth.actions';
import { selectAuthenticatedUser } from '@/app/store/auth/auth.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  user$: Observable<User | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectAuthenticatedUser);
  }

  login() {
    const exampleUser: User = {
      id: 137,
      name: 'saisho',
      email: 'saisho@hotmail.com',
      token: '321cba',
    };
    this.store.dispatch(login({ user: exampleUser }));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
