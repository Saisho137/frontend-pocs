// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';
import { AccountGateway } from '@/app/domain/models/account/account.gateway';
import { Account } from '@/app/domain/models/account/account.model';
import { AccountEntity } from '@/app/infraestructure/entities/account-entity';
import { AccountMapperImplementation } from '../mappers/account.mapper';
import {
  mapAccounts,
  updateAccount,
} from '@/app/infraestructure/helpers/transformers';

@Injectable({
  providedIn: 'root',
})
export class AccountGatewayService implements AccountGateway {
  private mapper: AccountMapperImplementation;
  private mockAccountsSubject: BehaviorSubject<AccountEntity[]> =
    new BehaviorSubject<AccountEntity[]>([
      {
        key: '1',
        accountName: 'John Doe',
        amount: 1000,
        direction: '123 Main St',
      },
      {
        key: '2',
        accountName: 'Jane Smith',
        amount: 2000,
        direction: '456 Elm St',
      },
      {
        key: '3',
        accountName: 'Bob Johnson',
        amount: 3000,
        direction: '789 Oak St',
      },
    ]);
  private mockAccounts$: Observable<AccountEntity[]> =
    this.mockAccountsSubject.asObservable();

  constructor() {
    this.mapper = new AccountMapperImplementation();
  }

  create(account: Account): Observable<Account> {
    const newAccountEntity: AccountEntity = this.mapper.mapTo(account);
    newAccountEntity.key = `${this.mockAccountsSubject.value.length + 1}`;

    const updatedAccounts = [
      ...this.mockAccountsSubject.value,
      newAccountEntity,
    ];
    this.mockAccountsSubject.next(updatedAccounts);

    return of(this.mapper.mapFrom(newAccountEntity)).pipe(delay(150));
  }

  getAll(): Observable<Account[]> {
    return this.mockAccounts$.pipe(
      map((accountEntities) => mapAccounts(accountEntities, this.mapper)),
      delay(300)
    );
  }

  getById(id: string): Observable<Account | null> {
    return this.mockAccounts$.pipe(
      map((accountEntities) =>
        accountEntities.find((account) => account.key === id)
      ),
      map((accountEntity) =>
        accountEntity ? this.mapper.mapFrom(accountEntity) : null
      )
    );
  }

  getBalance(id: string): Observable<number> {
    return this.mockAccounts$.pipe(
      map((accountEntities) =>
        accountEntities.find((account) => account.key === id)
      ),
      map((accountEntity) =>
        accountEntity ? this.mapper.mapFrom(accountEntity).balance : 0
      ),
      delay(150)
    );
  }

  update(id: string, updatedAccount: Partial<Account>): Observable<boolean> {
    return this.mockAccounts$.pipe(
      take(1),
      map((accountEntities) =>
        updateAccount(id, accountEntities, updatedAccount, this.mapper)
      ),
      tap((updatedAccounts) => {
        this.mockAccountsSubject.next(updatedAccounts);
      }),
      map((updatedAccounts) =>
        updatedAccounts.some((account) => account.key === id)
      )
    );
  }

  delete(id: string): Observable<boolean> {
    return this.mockAccounts$.pipe(
      take(1),
      map((accountEntities) => {
        const accountIndex = accountEntities.findIndex(
          (account) => account.key === id
        );

        if (accountIndex > -1)
          return accountEntities.filter((_, index) => index !== accountIndex);

        return accountEntities;
      }),
      tap((remainingAccounts) => {
        this.mockAccountsSubject.next(remainingAccounts);
      }),
      map((remainingAccounts) =>
        remainingAccounts.every((account) => account.key !== id)
      ),
      delay(300)
    );
  }
}

/*
### HTTP EXAMPLE:
getById(id: string): Observable<Account> {
  return this._http
    .get<AccountEntity>(`${this.apiUrl}/${id}`)
    .pipe(map((accountEntity) => this.mapper.mapFrom(accountEntity)));
}

getAll(): Observable<Account[]> {
  return this._http
    .get<AccountEntity[]>(this.apiUrl)
    .pipe(
      map((accountEntities) =>
        accountEntities.map((entity) => this.mapper.mapFrom(entity))
      )
    );
}
*/
