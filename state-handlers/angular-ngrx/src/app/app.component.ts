import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { selectAuthenticatedUser } from './store/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NgRX Project';

  user$: Observable<User | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectAuthenticatedUser);
  }
}
