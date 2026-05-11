import { Mapper } from '@/app/infraestructure/mappers/mapper';
import { Account } from '@/app/domain/models/account/account.model';
import { AccountEntity } from '@/app/infraestructure/entities/account-entity';

export class AccountMapperImplementation extends Mapper<
  AccountEntity,
  Account
> {
  mapFrom(param: AccountEntity): Account {
    return {
      id: param.key,
      name: param.accountName,
      balance: param.amount,
      address: param.direction,
    };
  }
  mapTo(param: Account): AccountEntity {
    return {
      key: param.id,
      accountName: param.name,
      amount: param.balance,
      direction: param.address,
    };
  }
}
