import { Component } from '@angular/core';
import { Account } from '@/app/domain/models/account/account.model';
import { AccountFacadeService } from '@/app/Presentation/shared/services/account-facade.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  accountList$!: Observable<Account[]>;
  selectedAccount: Account = {
    id: '',
    name: '',
    balance: 0,
    address: '',
  };
  accountIdSearch: string = '';
  account$: Observable<Account | null> = of(null);

  constructor(private _accountFacade: AccountFacadeService) {
    this.loadAccounts();
    this.loadAccount();
  }

  private loadAccounts() {
    this.accountList$ = this._accountFacade.getAllAccounts();
  }

  private loadAccount() {
    if (this.accountIdSearch)
      this.account$ = this._accountFacade.getAccountById(this.accountIdSearch);
  }

  searchAccount() {
    this.loadAccount();
  }

  createAccount(account: Account) {
    this._accountFacade.createAccount(account).subscribe(() => {
      this.loadAccounts();
    });
    this.clearSelection();
  }

  updateAccount(id: string, updatedAccount: Partial<Account>) {
    this._accountFacade.updateAccount(id, updatedAccount).subscribe(() => {
      this.loadAccounts();
      this.loadAccount();
    });
    this.clearSelection();
  }

  deleteAccount(id: string) {
    this._accountFacade.deleteAccount(id).subscribe(() => {
      this.loadAccounts();
    });
  }

  selectAccount(account: Account) {
    this.selectedAccount = account;
  }

  clearSelection() {
    this.selectedAccount = {
      id: '',
      name: '',
      balance: 0,
      address: '',
    };
  }
}
