import { Observable } from 'rxjs';
import { Account } from '../../models/account/account.model';
import { AccountGateway } from '../../models/account/account.gateway';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudAccountUseCases {
  constructor(private _accountGateway: AccountGateway) {}

  getAccountById(accountId: string): Observable<Account | null> {
    return this._accountGateway.getById(accountId);
  }

  getAllAccounts(): Observable<Account[]> {
    return this._accountGateway.getAll();
  }

  createAccount(account: Account): Observable<Account> {
    return this._accountGateway.create(account);
  }

  updateAccount(
    accountId: string,
    updatedValues: Partial<Account>
  ): Observable<boolean> {
    return this._accountGateway.update(accountId, updatedValues);
  }

  deleteAccount(accountId: string): Observable<boolean> {
    return this._accountGateway.delete(accountId);
  }
}
