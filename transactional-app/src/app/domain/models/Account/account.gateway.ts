import { Observable } from 'rxjs';
import { Account } from './account.model';

export abstract class AccountGateway {
  abstract getById(id: string): Observable<Account | null>;

  abstract getAll(): Observable<Account[]>;

  abstract create(account: Account): Observable<Account>;

  abstract update(
    id: string,
    updatedAccount: Partial<Account>
  ): Observable<boolean>;

  abstract delete(id: string): Observable<boolean>;

  abstract getBalance(id: string): Observable<number>;
}
