import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '@/app/domain/models/account/account.model';
import { CrudAccountUseCases } from '@/app/domain/usecases/account/crud-account.usecases';
import { GetBalanceUseCase } from '@/app/domain/usecases/account/get-balance.usecase';

@Injectable({
  providedIn: 'root',
})
export class AccountFacadeService {
  constructor(
    private _getAccountUseCases: CrudAccountUseCases,
    private _getBalanceUseCase: GetBalanceUseCase
  ) {}

  createAccount(account: Account): Observable<Account> {
    return this._getAccountUseCases.createAccount(account);
  }

  getAccountById(id: string): Observable<Account | null> {
    return this._getAccountUseCases.getAccountById(id);
  }

  getAllAccounts(): Observable<Account[]> {
    return this._getAccountUseCases.getAllAccounts();
  }

  getAccountBalance(id: string): Observable<number> {
    return this._getBalanceUseCase.execute(id);
  }

  updateAccount(
    id: string,
    updatedAccount: Partial<Account>
  ): Observable<boolean> {
    return this._getAccountUseCases.updateAccount(id, updatedAccount);
  }

  deleteAccount(id: string): Observable<boolean> {
    return this._getAccountUseCases.deleteAccount(id);
  }
}
