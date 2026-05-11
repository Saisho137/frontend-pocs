import { Account } from '@/app/domain/models/account/account.model';
import { AccountEntity } from '@/app/infraestructure/entities/account-entity';
import { AccountMapperImplementation } from '@/app/infraestructure/mappers/account.mapper';

export function mapAccounts(
  accountEntities: AccountEntity[],
  mapper: AccountMapperImplementation
): Account[] {
  return accountEntities.map((entity) => mapper.mapFrom(entity));
}

export function updateAccount(
  id: string,
  accountEntities: AccountEntity[],
  updatedAccount: Partial<Account>,
  mapper: AccountMapperImplementation
) {
  const accountIndex = accountEntities.findIndex(
    (account) => account.key === id
  );

  if (accountIndex > -1) {
    const existingAccount = mapper.mapFrom(accountEntities[accountIndex]);
    const updatedAccountEntity = mapper.mapTo({
      ...existingAccount,
      ...updatedAccount,
    });
    accountEntities[accountIndex] = updatedAccountEntity;

    return accountEntities; /* .map((account, index) =>
      index === accountIndex ? updatedAccountEntity : account
    ) */
  }

  return accountEntities;
}
