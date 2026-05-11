import { Observable } from 'rxjs';
import { Transaction } from './transaction';

export abstract class TransactionGateway {
  abstract getTransactionById(id: string): Observable<Transaction | null>;

  abstract getTransactionsByAccountId(
    accountId: string
  ): Observable<Transaction[]>;

  abstract createTransaction(transaction: Transaction): Observable<Transaction>;

  abstract getAllTransactions(): Observable<Transaction[]>;

  abstract deleteTransaction(id: string): Observable<boolean>;
}
