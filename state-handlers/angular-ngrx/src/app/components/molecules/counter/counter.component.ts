import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCurrentCount,
  selectValuePerCount,
} from '@/app/store/counter/counter.selectors';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementtByAmount,
} from '@/app/store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  actionsValue: number = 1;
  count$: Observable<number>;
  duplicatedCount$: Observable<number>;
  modifyCounterModal: boolean = false;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCurrentCount);
    this.duplicatedCount$ = this.store.select(selectValuePerCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  incrementByAmount() {
    this.store.dispatch(incrementByAmount({ value: this.actionsValue }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  decrementByAmount() {
    this.store.dispatch(decrementtByAmount({ value: this.actionsValue }));
  }

  reset() {
    this.store.dispatch(reset());
  }

  toggleModal() {
    this.modifyCounterModal = !this.modifyCounterModal;
  }
}
