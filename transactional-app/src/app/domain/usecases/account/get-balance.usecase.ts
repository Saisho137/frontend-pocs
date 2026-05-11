import { Observable } from 'rxjs';
import { AccountGateway } from '../../models/account/account.gateway';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetBalanceUseCase {
  constructor(private _accountGateway: AccountGateway) {}

  execute(accountId: string): Observable<number> {
    return this._accountGateway.getBalance(accountId);
  }
}
