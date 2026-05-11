import { Component, Input, SimpleChanges } from '@angular/core';
import { Account } from '@/app/domain/models/account/account.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() account: Account | null = null;
}
